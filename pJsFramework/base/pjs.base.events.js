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

p$.namespace("pjs.event", function(pub, log) {
	
	pub.Event = function(eventType, data) {
		this.type = eventType;
		this.data = data;	
	}
	
	//Common view events
	pub.view = {
		CLICK: 'click',
		MOUSEOVER: 'mouseover',
		MOUSEOUT: 'mouseout'		
	}
	
	pub.core = {
		ALL_MODULES_STOPPED: 'allModulesStopped',
		ALL_MODULES_INITIALIZED: 'allModulesInitialized',	
		ALL_MODULES_READY: 'allModulesReady'
	}
	
	pub.module = {
		STOPPED: 'moduleStopped',
		INITIALIZED: 'moduleInitialized',
		READY: 'moduleReady'
	}
});


