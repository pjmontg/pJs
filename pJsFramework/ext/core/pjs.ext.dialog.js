
p$.namespace("pjs.ext.core.dialog", function(pub, log) {
	pub.Dialog = {
		id: 'dialog',
		version: '1.0',
		requires: ['jquery-ui-1.8.13'],
		contents: {
			createDialog : {
				name: 'createDialog',
				dialogElementId: null,
				contentElementId: null,
				obj: function(elementId, dtitle, dheight, dwidth, buttons) {
					
					$('body').append("<div id='" + elementId + "'></div>");
					
					var dbuttons = {};
					
					for (i in buttons) {
						if (buttons[i].handler !== undefined && buttons[i].handler !== null) {
							dbuttons[buttons[i].name] = function() {
								//TODO insert custom handler before close
								$(this).dialog('close');
							}
							
						} else {
							dbuttons[buttons[i].name] = function() {
								$(this).dialog('close');
							}
						}
						
					}
					
					var d = $("#" + elementId).dialog({
						title: dtitle,
						autoOpen: false,
						width: dwidth,
						height: dheight,
						modal: true,
						hide: 'clip',
						resizable: false,
						buttons : dbuttons
					});
				}
			},
			showDialog: {
				name: 'showDialog',
				obj: function(dialogElementId, contentElementId) {
					$("#" + dialogElementId).append($("#" + contentElementId));
					$("#" + dialogElementId).dialog('open');	
				}
			}
		}
	}
});

