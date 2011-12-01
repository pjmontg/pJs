p$.namespace("demo.command", function(pub, log) {
	var cmd = p$.include("pjs.base.command");
	var app_evt = p$.include("pjs.core.event");
	var demo_evt = p$.include("demo.event");
	
	pub.MenuClickCommand = function() {	}

	pub.MenuClickCommand.prototype.execute = function(event) {
		var menuId = event.data.menuId;
		var viewModel = this.modules.viewModel;
		
		var layoutKey = viewModel.pageLayouts[menuId];
	
		this.eventManager.notify(demo_evt.eventType.LAYOUT_CHANGED, {menuId: menuId, layoutId: layoutKey, layout: viewModel.layoutModel[layoutKey]});
		this.eventManager.notify(demo_evt.eventType.TOOLSET_CHANGED, {menuId: menuId, toolbarFunctions: viewModel.toolbarModel[menuId], pageLayouts: viewModel.layoutModel});
		this.eventManager.notify(demo_evt.eventType.LAYOUT_COMPLETE, {menuId: menuId});
	}
	
	pub.ChangeLayoutCommand = function() {	}

	pub.ChangeLayoutCommand.prototype.execute = function(event) {
		var layoutKey = event.data.layoutKey;
		var viewModel = this.modules.viewModel;
		var menuId = event.data.menuId;
		
		this.eventManager.notify(demo_evt.eventType.LAYOUT_CHANGED, {menuId: menuId, layoutId: layoutKey, layout: viewModel.layoutModel[layoutKey]});
		//this.eventManager.notify(demo_evt.eventType.TOOLSET_CHANGED, {toolbarFunctions: viewModel.toolbarModel[menuId], pageLayouts: viewModel.layoutModel});
		this.eventManager.notify(demo_evt.eventType.LAYOUT_COMPLETE, {menuId: menuId});
	}
	
	
	pub.RetrievePanelDataCommand = function() {	}

	pub.RetrievePanelDataCommand.prototype.execute = function(event) {
		var ajaxService = event.data.listener.modules.ajaxService;
		ajaxService.getPanelContent(event.data.menuId, event.data.panelId);
	}

	
	pub.EditPanelContentsCommand = function() {	}

	pub.EditPanelContentsCommand.prototype.execute = function(event) {
	//	log.info(event);
		var viewModel = event.data.listener.modules.viewModel;
		//log.info(viewModel.selectedPanelId);
		this.eventManager.notify(demo_evt.eventType.PANEL_EDIT_MODE, {selectedPanelId: viewModel.selectedPanelId});
	}
	
	pub.DeletePanelContentsCommand = function() {	}

	pub.DeletePanelContentsCommand.prototype.execute = function(event) {
		log.info("delete command");
		var viewModel = this.modules.viewModel;
		var eventManager = event.data.listener.eventManager;
		
		log.info(viewModel.selectedPanelId);
		
	}
});