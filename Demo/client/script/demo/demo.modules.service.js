p$.namespace("demo.module.service", function(pub, log) {
	var mod = p$.include("pjs.base.module");
	var demo_evt = p$.include("demo.event");
	var app_evt = p$.include("pjs.core.event");
	
	pub.AjaxService = function(id, initParams) {
		mod.BaseModule.call(this, id, initParams);
	}
	
	p$.inherit(pub.AjaxService, mod.BaseModule);
	
	pub.AjaxService.prototype.init = function(coreInitParams) {
		this.mediator.addContextListener(app_evt.core.ALL_MODULES_INITIALIZED, getViewModel);
		this.ready();
	}
	
	pub.AjaxService.prototype.getPanelContent = function(menuId, panelId) {
		var that = this;
		this.mediator.get("http://localhost:8124/ajax", "page=" + menuId + "&panelId=" + panelId, "json", 
			function(data, status) {
				that.mediator.notify(demo_evt.eventType.CONTENT_CHANGED, {
					menuId: menuId, 
					content: data.content,
					returnPanelId: data.returnPanelId});	
			},
			function(data, status) {
				log.error(status);
				log.error(data);		
			}
		);	
	}
	
	function getViewModel(event) {
		
		event.data.listener.mediator.get("http://localhost:8124/ajax", "menu=all", "json", 
			function(data, status) {
				event.data.listener.mediator.notify(demo_evt.eventType.VIEW_MODEL_LOADED, {model: data});
			},
			function(data, status) {
				log.error(status);
				log.error(data);		
			}
		);
	}
});
