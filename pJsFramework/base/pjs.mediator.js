// JavaScript Document

p$.namespace("pjs.base.mediator", function(pub, log) {
	var ex = p$.include("pjs.common.exception");
	
	pub.BaseMediator = function(core, eventManager, moduleInstance) {
		this.core = core;
		this.eventManager = eventManager;
		this.moduleInstance = moduleInstance;
	}
	
	pub.BaseMediator.prototype.notify = function(eventType, data) {
		this.eventManager.notify(eventType, data);
	}


	pub.BaseMediator.prototype.addContextListener = function(eventType, handler, data, priority) {
		this.eventManager.addContextListener(eventType, handler, this.moduleInstance, data, priority);
	}

	pub.BaseMediator.prototype.removeContextListener = function(eventType, handler) {
		this.eventManager.removeContextListener(eventType, this.moduleInstance, handler);
	}
	
	
	
});




