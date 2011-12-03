/*!
 * pJs JavaScript Framework v1.0
 * http://patrickj.co/
 * 
 * Copyright 2011, Patrick Montgomery
 * Licensed under the GPL Version 2 licenses.
 *
 * Date: Dec 3 2011
 */

p$.namespace("pjs.ext.core.base", function(pub, log) {
	
	pub.DomManipulation = {
		id: 'domManipulation',
		version: '1.0',
		requires: ['jquery-1.6.4'],
		contents: {
			append: {
				name: 'append',
				obj: function(elementId, value) {
					$("#" + elementId).append(value);	
				}
			},
			
			setAttribute : {
				name: 'setAttribute',
				obj: function(elementId, attribute, value) {
					
					//TODO make this an associative array somehow
					switch (attribute) {
						case 'background-color':
						case 'cursor':
						case 'border':
							$("#" + elementId).css(attribute, value);
							break;
						case 'value':
							$("#" + elementId).attr(attribute, value);
							break;
						case 'hide':
							$("#" + elementId).hide();
							break;
						case 'show':
							$("#" + elementId).show();
							break;
						case 'addClass':
							$("#" + elementId).addClass(value);
							break;
						case 'removeClass':
							$("#" + elementId).removeClass(value);
							break;
						case 'html':
							$("#" + elementId).html(value);
							break;
						case 'text':
							$("#" + elementId).text(value);
							break;
						case 'val':
							$("#" + elementId).val(value);
							break;
						case 'removeAttribute':
							$("#" + elementId).removeAttr(value);
							break;
						case 'height':
							$("#" + elementId).height(value);
							break;
						case 'width':
							$("#" + elementId).width(value);
							break;
						default:
							log.error("Could not find attribute " + attribute);
							throw new AttributeNotFoundException("Could not find attribute " + attribute);
					}
				}
			},
			
			getAttribute: {
				name: 'getAttribute',
				obj: function(elementId, attribute) {
					return $("#" + elementId)[attribute]();	
				/*	
				switch (attribute) {
					case 'html':
						return $("#" + elementId).html();	
						break;
					case 'text':
						return $("#" + elementId).text();	
						break;
					case 'val':
						return $("#" + elementId).val();	
						break;
					case 'height':
						return $("#" + elementId).height();
						break;
					case 'width':
						return $("#" + elementId).width();
						break;
				}*/
			}
			}
		}
	}
	
	AttributeNotFoundException = function(message) {
			this.message = "AttributeNotFoundException: " + message;	
	}
	
	p$.inherit(AttributeNotFoundException, p$.Exception);
	
	
	
	pub.ViewEvent = {
		id: 'viewEventHandling',
		version: '1.0',
		requires: ['jquery-1.6.4'],
		contents: {
			bindEvent: {
				name: 'bindEvent',
				obj: function(elementId, eventType, eventHandler, eventData) {
					$("#" + elementId).bind(eventType, eventData, eventHandler);
				}
			},
			
			unbindEvent: {
				name: 'unbindEvent',
				obj: function(elementId, eventType, eventHandler) {
					$("#" + elementId).unbind(eventType, eventHandler);
				}
			}
		}
	}
});


