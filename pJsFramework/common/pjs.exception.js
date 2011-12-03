
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
p$.namespace("pjs.common.exception", function(pub, log) {
	
	//UninitializedException
	pub.UninitializedException = function(message) {
			this.message = "UninitializedException: " + message;
			this.callbackHandler = function() {
				alert(this.message);	
			}
	}
	
	p$.inherit(pub.UninitializedException, p$.Exception);

	//IllegalArgumentException
	pub.IllegalArgumentException = function(message) {
			this.message = "IllegalArgumentException: " + message;
			
	}
	
	p$.inherit(pub.IllegalArgumentException, p$.Exception);
	
	
	//PageNotFoundException
	pub.PageNotFoundException = function(message) {
			this.message = "PageNotFoundException: " + message;
			
	}
	
	p$.inherit(pub.PageNotFoundException, p$.Exception);
	
	
	
	pub.ModuleAlreadyRunningException = function(message) {
			this.message = "ModuleAlreadyRunningException: " + message;	
	}
	
	p$.inherit(pub.ModuleAlreadyRunningException, p$.Exception);
	
	
	pub.HandlerNotFoundException = function(message) {
			this.message = "HandlerNotFoundException: " + message;	
	}
	
	p$.inherit(pub.HandlerNotFoundException, p$.Exception);
	
	
	
	pub.ContextListenerException = function(message) {
			this.message = "ContextListenerException: " + message;	
	}
	
	p$.inherit(pub.ContextListenerException, p$.Exception);
	
	
	pub.ExtensionConflictException = function(message) {
			this.message = "ExtensionConflictException: " + message;	
	}
	
	p$.inherit(pub.ExtensionConflictException, p$.Exception);
	
	
	pub.ExtensionNotFoundException = function(message) {
			this.message = "ExtensionNotFoundException: " + message;	
	}
	
	p$.inherit(pub.ExtensionNotFoundException, p$.Exception);
	
	pub.InvalidExtensionFormatException  = function(message) {
			this.message = "InvalidExtensionFormatException: " + message;	
	}
	
	p$.inherit(pub.InvalidExtensionFormatException, p$.Exception);
	
	
	
	pub.AbstractMethodException = function(methodName, message) {
			this.message = "AbstractMethodException: Method " + methodName + " must be overridden in subclass. " + message;	
	}
	
	p$.inherit(pub.AbstractMethodException, p$.Exception);
	
	pub.UnimplementedMethodException  = function(message) {
			this.message = "UnimplementedMethodException: " + message;	
	}
	
	p$.inherit(pub.UnimplementedMethodException, p$.Exception);
	
});

