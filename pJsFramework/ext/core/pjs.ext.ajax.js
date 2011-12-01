p$.namespace("pjs.ext.core.ajax", function(pub, log) {
	
	//TODO
	pub.Ajax = {
		id: 'ajax',
		version: '1.0',
		requires: ['jquery-1.6.4'],
		contents: {
			ajax: {
				name: 'ajax',
				obj: function(settings) {
					$.ajax({
						type: settings.type,
						url: settings.url,
						data: settings.data,
						dataType: settings.dataType,
						success: settings.successHandler,
						error: settings.errorHandler
					});
				}
			}
		}
	}
});