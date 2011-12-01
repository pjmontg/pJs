// JavaScript Document

p$.namespace("pjs.core", function(pub, log){
	var ex = p$.include("pjs.common.exception");
	var med = p$.include("pjs.base.mediator");
	var evtMgr = p$.include("pjs.core.eventmanager");
	var evt = p$.include("pjs.core.event");	
	
	
	
	namespace = function (namespaceStr) {
		var namespaces = namespaceStr.split(".");
		
		if (window !== undefined) {
			root = window;
		} else {
			var root = {};
		}
		
		if (namespaces.length === 1) {
			root = root[namespaceStr];	
		} else {
			for (var i=0; i < namespaces.length; i++) {
				root[namespaces[i]] = root[namespaces[i]] || {};
				root = root[namespaces[i]];
			}
		}
		
		return root;
	}
	
	//pseudo singleton pattern
	pub.Core = (function() {
		var moduleData = {};
		var loadedExtensions = new Array();
		var coreMediator = null
		var coreInitParams = null; 
		var allModsInitializedEventSent = false;
		var eventManager = evtMgr.EventManager;
		
		var modStatuses = {
			STOPPED: 'stopped',
			INITIALIZED: 'initialized',
			READY: 'ready'
		}	
		
		//todo make private
		function loadExtension(extensionPackage) {
			
			validateExtensionPackage(extensionPackage);
			
			//TODO
			
			for(var i=0; i < extensionPackage.requires.length; i++) {
				p$.requireLibrary(extensionPackage.requires[i]);
			}
			
			var key = extensionPackage.id + "|" + extensionPackage.version;
			if (loadedExtensions[key] !== undefined) {
				throw new ex.ExtensionConflictException("Core extension " + extensionPackage.id + " v" + extensionPackage.version + " already exists");
			}
			
			loadedExtensions[key] = key;
			
			
			var version = extensionPackage.version.replace(".", "_");
			
			pub.Core.extensions[extensionPackage.id] = pub.Core.extensions[extensionPackage.id] || {};
			pub.Core.extensions[extensionPackage.id][version] = pub.Core.extensions[extensionPackage.id][version] || {};
			
			var newExtNamespace = pub.Core.extensions[extensionPackage.id][version];
			
			for (i in extensionPackage.contents) {
				newExtNamespace[extensionPackage.contents[i].name] = extensionPackage.contents[i].obj;
			}
			
			if (extensionPackage.init !== undefined) {
				extensionPackage.init();
			}
			
		}
		
		function validateExtensionPackage(extensionPackage) {
			if (!extensionPackage.hasOwnProperty('id')) {
				throw new ex.InvalidExtensionFormatException("Extension Package is missing property id");
			}
			
			if (!extensionPackage.hasOwnProperty('version')) {
				throw new ex.InvalidExtensionFormatException("Extension Package is missing property version");
			}
			
			if (!extensionPackage.hasOwnProperty('requires')) {
				throw new ex.InvalidExtensionFormatException("Extension Package is missing property requires");
			}
			
			if (!extensionPackage.hasOwnProperty('contents')) {
				throw new ex.InvalidExtensionFormatException("Extension Package is missing property contents");
			}
		}
			
		function moduleReadyHandler(event) {
			var modId = event.data.moduleId;
			moduleData[modId].status = modStatuses.READY;
			
			
			var allModulesReady = true;
			for (i in moduleData) {
				if (moduleData[i].status !== modStatuses.READY) {
					allModulesReady = false;
				}
			}
			
			if (allModulesReady) {
				log.info("All Modules Ready");
				if (!allModsInitializedEventSent) {
					coreMediator.notify(evt.core.ALL_MODULES_INITIALIZED);
					allModsInitializedEventSent = true;
				}
				coreMediator.notify(evt.core.ALL_MODULES_READY);
			}	
		}
		
		
		//todo listen for module events
		return {
			id: "CORE", 
			
			init: function(context, params) {
				try{
					coreInitParams = params;
					coreMediator =  new med.BaseMediator(this, eventManager, this);
					coreMediator.addContextListener(evt.module.READY, moduleReadyHandler);
					
					context.startup();
					
					moduleData = context.registeredModules
					
					for(j in context.registeredExtensions) {
						loadExtension(context.registeredExtensions[j]);
					}
					
					for (i in moduleData) {
						moduleData[i].instance = new moduleData[i].module(moduleData[i].id, moduleData[i].initParams);
						moduleData[i].instance.mediator = new moduleData[i].mediator(this, eventManager, moduleData[i].instance);
						moduleData[i].status = modStatuses.STOPPED;
					}
					
					
					
					
					for (k in context.registeredCommands) {
						var linkedModules = {};
						
						for (l in context.registeredCommands[k].linkedModules) {
							var linkedModuleId = context.registeredCommands[k].linkedModules[l]; 
							if (moduleData[linkedModuleId] !== undefined) {
								linkedModules[linkedModuleId] = moduleData[linkedModuleId].instance;
							}
						}
					
						var cmd = new context.registeredCommands[k].command();
						cmd.eventManager = eventManager;
						cmd.modules = linkedModules;
						eventManager.addContextListener(context.registeredCommands[k].eventType, cmd.execute, cmd, context.registeredCommands[k].data);	
					}
				} catch(e) {
					log.error("init(): " + e.message);
					throw new p$.Exception();	
				}

			},
			
			
			startModule: function(moduleId) {
				if (moduleId === undefined)	{
					throw new ex.IllegalArgumentException("Module ID is required.");	
				}
	
				moduleData[moduleId].instance.init(coreInitParams);
				if (moduleData[moduleId].status !== modStatuses.READY) {
					moduleData[moduleId].status= modStatuses.INITIALIZED;
				}
				
				
			},
			
			stopModule: function(moduleId) {
				if (moduleId === undefined)	{
					throw new ex.IllegalArgumentException("Module ID is required.");	
				}
				
				var module = moduleData[moduleId];
				if (module.instance) {
					module.instance.destroy();
					module.instance = null;	
				}
			},
			
			run: function() {
				try {
					for (var moduleId in moduleData) {
						if (moduleData.hasOwnProperty(moduleId)) {
							this.startModule(moduleId);	
						}
						
					}
					
					if (!allModsInitializedEventSent) {
						coreMediator.notify(evt.core.ALL_MODULES_INITIALIZED);
						log.info("All Modules Initialized");
						allModsInitializedEventSent = true;
					}
				} catch(e) {
					log.error("run(): " + e.message);
					throw new p$.Exception();	
				}	
	
			},
			
			
			
			stopAll: function() {
				for (var moduleId in moduleData) {
					if (moduleData.hasOwnProperty(moduleId)) {
						this.stopModule(moduleId);	
					}
				}	
				coreMediator.notify(evt.core.ALL_MODULES_STOPPED);
			},
			
			
			
			unloadExtension: function(extensionPackage) {

				if (extensionPackage.destroy !== undefined) {
					extensionPackage.destroy();	
					var key = extensionPackage.id + "|" + extensionPackage.version;
					delete loadedExtensions[key];
					var version = extensionPackage.version.replace(".", "_");
					pub.Core.extensions[extensionPackage.id][version] = null;
				}
			},
			
			requireExtension: function(extensionDescriptor) {
				if (loadedExtensions[extensionDescriptor.id + "|" + extensionDescriptor.version] === undefined) {
					throw new ex.ExtensionNotFoundException("Core extension " + extensionDescriptor.id + " v" + extensionDescriptor.version + " is not loaded.");
				}
			},
			
			getExtension: function(extDescriptor) {
				var version = extDescriptor.version.replace(".", "_");
				return pub.Core.extensions[extDescriptor.id][version];
				
			}
			
		}
	})();
	
	pub.Core.extensions = pub.Core.extensions || {};
	
	
});





