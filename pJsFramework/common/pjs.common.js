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

p$ = (function(){
	
	var dbg = 0;
	var namespaces = {};
	var registeredLibraries = {};
	
	Logger = function(namespaceId) {
		this.namespaceId = namespaceId;	
	}
	
	Logger.prototype.info = function(message) {
		if (dbg >= p$.INFO) {
			if (console !== undefined) {
				if (this.namespaceId !== null) {
					
					console.log(Logger.getTimestamp(), "[" + this.namespaceId + "]", message);	
				} else {
					console.log(message);	
				}
			} else {
				alert(message);	
			}
		}
	};
	
	Logger.prototype.error = function(message) {
		if (dbg >= p$.ERROR) {
			if (console !== undefined) {
				if (this.namespaceId !== null) {
					console.error(Logger.getTimestamp(), "[" + this.namespaceId + "]", message);	
				} else {
					console.error(message);	
				}
			} else {
				alert(message);	
			}
		}
	};
	
	Logger.getTimestamp = function() {
		var now = new Date();
		return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	}
	
	return {
		log: new Logger("p$"),
		//Defines a namespace for a file
		namespace: function(namespaceId, namespaceFn){
			try {
				var newId = namespaceId.replace(/\./g, "_");
				var npsc = {};
				var temp = new namespaceFn(npsc, new Logger(namespaceId));
				namespaces[newId] = npsc;
				delete temp;
				npsc = null;
			} catch(e) {
				if (e.message !== undefined) {
					console.error(Logger.getTimestamp(), "[" + namespaceId + "]", e.message);	
				} else {
					console.error(Logger.getTimestamp(), "[" + namespaceId + "]", e);
				}
			}
		},
		
		//Turns logging off or on across entire app
		setLoggingLevel: function(value) {
			dbg = value;
		},
		
		//Includes a namespace within another namespace
		include: function(namespaceId, caller) {
			//console.log(caller);
			var newId = namespaceId.replace(/\./g, "_");
			var namespace = namespaces[newId];
			if (namespace === undefined) {
				throw new p$.Exception("Namespace " + namespaceId + " is undefined");
			}
	
			return namespace;	
		},
		
		//Sets up prototypal inheritiance across constructor functions
		inherit: function(child, parent) {
			function subclass() {};
			subclass.prototype = parent.prototype;
			child.prototype = new subclass();
			child.prototype.constructor = child;
		},
		
		registerLibrary: function(libraryId) {
			registeredLibraries[libraryId] = libraryId;
		},
		
		requireLibrary: function(libraryId) {
			if (registeredLibraries[libraryId] === undefined) {
				throw new p$.Exception("Required library " + libraryId + " has not been registered");
			}
			
		}
	}
	
})();

p$.Exception = function(message) {
	this.message = message;	
}

p$.INFO = 2;
p$.ERROR = 1;
p$.OFF = 0;

