p$.namespace("demo.module.grid", function(pub, log) {
	var app_evt = p$.include("pjs.core.event");
	var demo_evt = p$.include("demo.event");
	var mod = p$.include("pjs.base.module");
	

	pub.GridComponent = function(id, initParams) {
		mod.BaseModule.call(this, id, initParams);
	}
	
	p$.inherit(pub.GridComponent, mod.BaseModule);
	
	pub.DataModule.prototype.pageIds = null;
	pub.DataModule.prototype.menuModel = null;
	pub.DataModule.prototype.toolbarModel = null;
	pub.DataModule.prototype.layoutModel = null;
	pub.DataModule.prototype.pageLayouts = null;
	pub.DataModule.prototype.currentPageContent = null;
	pub.DataModule.prototype.selectedPanelId = null;
	
	pub.DataModule.prototype.init = function(coreInitParams) {
		var that = this;
		this.mediator.addContextListener(demo_evt.eventType.VIEW_MODEL_LOADED, viewModelLoadedHandler);
		this.mediator.addContextListener(demo_evt.eventType.PANEL_CLICKED, panelClickedHandler);
	}
	
	function viewModelLoadedHandler(event) {
		var model = event.data.listener;
		model.pageIds = event.data.model.pageIds;
		model.menuModel = event.data.model.pageTitles;
		model.toolbarModel = event.data.model.toolbarFunctions;
		model.layoutModel = event.data.model.layoutModel;
		model.pageLayouts = event.data.model.pageLayouts;
		model.currentPageContent = event.data.model.initialContent;
		
		model.ready();
		
		log.info(model);
		
		event.data.listener.mediator.notify(demo_evt.eventType.INIT_MENU, {menuModel: model.menuModel});
		event.data.listener.mediator.notify(demo_evt.eventType.MENU_CLICK, {menuId: model.pageIds[0]});
	}
	
	function panelClickedHandler(event) {
		event.data.listener.selectedPanelId = event.data.clickedPanelId;
	}
	
});