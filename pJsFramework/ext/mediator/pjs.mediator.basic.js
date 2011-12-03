/*!
 * pJs JavaScript Framework v1.0
 * http://patrickj.co/
 * 
 * Copyright 2011, Patrick Montgomery
 * Licensed under the GPL Version 2 licenses.
 *
 * Date: Dec 3 2011
 */

p$.namespace("pjs.ext.mediator.basic", function(pub, log){
	var med = p$.include("pjs.base.mediator");
	
	pub.BasicViewMediator = function(core, eventManager, moduleInstance) {
		med.BaseMediator.call(this, core, eventManager, moduleInstance);
		
		this.domExtDesc = {id: 'domManipulation', version: '1.0'};
		this.viewEventExtDesc = {id: 'viewEventHandling', version: '1.0'};
		this.dialogExtDesc = {id: 'dialog', version: '1.0'};
		
		this.core.requireExtension(this.domExtDesc);
		this.core.requireExtension(this.viewEventExtDesc);
		this.core.requireExtension(this.dialogExtDesc);
	}
	
	
	p$.inherit(pub.BasicViewMediator, med.BaseMediator);
	
	//Fix call order
	pub.BasicViewMediator.prototype.addViewListener = function(elementId, eventType, eventHandler, eventData) {
		eventData = eventData || {};
		eventData.listener = this.moduleInstance;
		var listenerSource = this.moduleInstance
		//Change the context of this back to the caller
		var handlerWrapper = function(event) {
			eventHandler.call(listenerSource, event);
		}
		this.core.getExtension(this.viewEventExtDesc).bindEvent(elementId, eventType, handlerWrapper, eventData);
	}
	
	pub.BasicViewMediator.prototype.removeViewListener = function(elementId, eventType, eventHandler) { 
		this.core.getExtension(this.viewEventExtDesc).unbindEvent(elementId, eventType, eventHandler);
	}
	
	
	pub.BasicViewMediator.prototype.setAttribute = function(elementId, attribute, value) {
		this.core.getExtension(this.domExtDesc).setAttribute(elementId, attribute, value);
	}
	
	pub.BasicViewMediator.prototype.getAttribute = function(elementId, attribute) {
		log.info('basic mediator get attribute');
		return this.core.getExtension(this.domExtDesc).getAttribute(elementId, attribute);
	}
	
	pub.BasicViewMediator.prototype.appendElement = function(elementId, value) {
		this.core.getExtension(this.domExtDesc).append(elementId, value);
	}
	
	pub.BasicViewMediator.prototype.createDialog =  function(elementId, title, height, width, buttons) {
		
		this.core.getExtension(this.dialogExtDesc).createDialog(elementId, title, height, width, buttons);
	}
	
	pub.BasicViewMediator.prototype.showDialog =  function(dialogElementId, contentElementId) {
		this.core.getExtension(this.dialogExtDesc).showDialog(dialogElementId, contentElementId);
	}
	
	
	/*************************
	
	************************/
	
	pub.BasicServiceMediator = function(core, eventManager, moduleInstance) {
		med.BaseMediator.call(this, core, eventManager, moduleInstance);
		this.ajaxExtDesc = {id: 'ajax', version: '1.0'};
		this.core.requireExtension(this.ajaxExtDesc);
	}
	
	
	p$.inherit(pub.BasicServiceMediator, med.BaseMediator);
	
	pub.BasicServiceMediator.prototype.get = function(url, data, dataType, successHandler, errorHandler) {
		this.core.getExtension(this.ajaxExtDesc).ajax({
			type: "GET",
			url: url,
			data: data,
			dataType: dataType,
			successHandler: successHandler,
			errorHandler: errorHandler	
		});
	}
	
	pub.BasicServiceMediator.prototype.post = function(url, data, dataType, successHandler, errorHandler) {
		this.core.getExtension(this.ajaxExtDesc).ajax({
			type: "POST",
			url: url,
			data: data,
			dataType: dataType,
			successHandler: successHandler,
			errorHandler: errorHandler	
		});
	}
});
