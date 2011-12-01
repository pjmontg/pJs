//TODO - event manager manage view event registration, so when a module is stopped, all view and context event listeners are removed

p$.namespace("pjs.core.eventmanager", function(pub, log) {
	var ex = p$.include("pjs.common.exception");
	var evt = p$.include("pjs.core.event");	
	
	pub.EventManager = (function() {
		var listenersMap = {};
		
		var instance = {};
		
		instance.notify = function(eventType, data) {
			//log.info(eventType);
			if (listenersMap[eventType] !== undefined) {
				//log.info(eventType);
				//log.info(listenersMap[eventType]);
				for (var i=0; i < listenersMap[eventType].length; i++) {
					var listenerObj = listenersMap[eventType][i];
	
					var dataObj =  {};
					dataObj.listener = listenerObj.listener;
					for (j in listenerObj.data) {
						dataObj[j] = listenerObj.data[j];	
					}
					for (k in data) {
						dataObj[k] = data[k];	
					}
					//Changes context of this back to calling object
					listenerObj.handler.call(listenerObj.listener, (new evt.Event(eventType, dataObj)));
				}
			}
		};
		
		instance.addContextListener = function(eventType, handler, listener, data, priority) {
			if (listenersMap[eventType] === undefined) {
					listenersMap[eventType] = new Array();
			}
		
			listenersMap[eventType][listenersMap[eventType].length] = {
				listener: listener,
				handler: handler, 
				data: data
			}
		};
			
		instance.removeContextListener = function(eventType, handler, source) {
			//todo
		}
		
		return instance;
	})();	
});