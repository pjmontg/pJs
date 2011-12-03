/*!
 * pJs JavaScript Framework v1.0
 * http://patrickj.co/
 * 
 * Copyright 2011, Patrick Montgomery
 * Licensed under the GPL Version 2 licenses.
 *
 * Date: Dec 3 2011
 */

 // JavaScript Document

p$.namespace("pjs.base.module", function(pub, log) {
	var evt = p$.include("pjs.event");
	
	pub.BaseModule = function(id, initParams) {
		this.id = id;
		this.initParams = initParams;
		this.mediator = null;
	}
	
	
	pub.BaseModule.prototype.init = function() {
		this.initialized();
		this.ready();
	}
	
	pub.BaseModule.prototype.destroy = function() { 
		this.mediator.removeAllEventListeners();
		this.stopped();
	}
	
	pub.BaseModule.prototype.ready = function() {
		this.mediator.notify(evt.module.READY, {moduleId: this.id});
	}
	
	pub.BaseModule.prototype.initialized = function() {
		this.mediator.notify(evt.module.INITIALIZED,  {moduleId: this.id});
	}
	
	pub.BaseModule.prototype.stopped = function() {
		this.mediator.notify(evt.module.STOPPED,  {moduleId: this.id});
	}
});
