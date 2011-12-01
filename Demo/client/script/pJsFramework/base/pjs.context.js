p$.namespace("pjs.base.context", function(pub, log) {
	var ex = p$.include("pjs.common.exception");
	
	pub.Context = function(initParams) {
		this.initParams = initParams;
		this.registeredModules = {};
		this.registeredCommands = {};
		this.registeredExtensions = {};
	}
	
	pub.Context.prototype.registerModule = function(moduleId, moduleConstructor, mediatorConstructor, moduleInitParams) {
		
		if (moduleId === undefined || moduleId === null){
			throw new ex.IllegalArgumentException("Module ID is required.");	
		}
		if (this.registeredModules[moduleId] !== undefined) {
			throw new ex.IllegalArgumentException("A Module with ID " + moduleId + " has already been registered.");
		}
		this.registeredModules[moduleId] = {
			module: moduleConstructor,
			mediator: mediatorConstructor,
			id : moduleId, 
			initParams: moduleInitParams,
			instance: null,
			status: null
		}
	}
	

	pub.Context.prototype.registerCommand = function(eventType, commandId, command, linkedModules, data) {
		if (!command.prototype.hasOwnProperty('execute')) {
			throw new ex.UnimplementedMethodException(commandId + " must implement an execute() method");
		}
		this.registeredCommands[commandId] = {eventType: eventType, command: command, linkedModules: linkedModules, data: data};
	}
	
	pub.Context.prototype.registerExtension = function(extensionPackage) {
		var key = extensionPackage.id + "|" + extensionPackage.version;
		if (this.registeredExtensions[key] !== undefined) {
			throw new ex.ExtensionConflictException("Core extension " + extensionPackage.id + " v" + extensionPackage.version + " already has been registered");
		}
				
		this.registeredExtensions[key] = extensionPackage;
	}
	
	//This method is overridden in the subclass, calling the 4 register methods above
	pub.Context.prototype.startup = function() {
		throw new ex.AbstractMethodException("Context.startup()");
	}
	
	
});