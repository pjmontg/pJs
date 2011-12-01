p$.namespace("demo.module.view", function(pub, log) {
	var app_evt = p$.include("pjs.core.event");
	var demo_evt = p$.include("demo.event");
	var mod = p$.include("pjs.base.module");
	
	/*******************************
	MainModule
	********************************/
	pub.MainModule = function(id, initParams) {
		mod.BaseModule.call(this, id, initParams);
	}
	
	p$.inherit(pub.MainModule, mod.BaseModule);
	
	pub.MainModule.prototype.init = function(coreInitParams) {
		this.mediator.addContextListener(app_evt.core.ALL_MODULES_READY, 
			 this.mainAllModulesReadyHandler);
		this.ready();
	}
	
	pub.MainModule.prototype.mainAllModulesReadyHandler = function(event) {
		this.mediator.setAttribute(this.initParams.loaderDiv, 'hide');	
		this.mediator.setAttribute(this.initParams.primaryElementId, 'show');	
	}
	

	
	
	/*******************************
	MenuModule
	********************************/
	pub.MenuModule = function(id, initParams) {
		mod.BaseModule.call(this, id, initParams);
		this.selectedMenu = "Menu1";
	}
	
	p$.inherit(pub.MenuModule, mod.BaseModule);
	
	pub.MenuModule.prototype.init = function(coreInitParams) {	
		this.mediator.addContextListener(demo_evt.eventType.INIT_MENU, this.menuInitMenuHandler);
		this.mediator.addContextListener(demo_evt.eventType.MENU_CLICK, this.menuUpdateMenuHandler);
		
		this.ready();
	}
	
	
	pub.MenuModule.prototype.menuInitMenuHandler = function(event) {
		var menuModel = event.data.menuModel;
	
		var firstItem = true;
		for (i in menuModel) {
			var menuItem = '<li><a id="' + i + '" href="javascript:void(0);">' + menuModel[i] +'</a></li>';
			this.mediator.appendElement(this.initParams.primaryElementId, menuItem);	
			this.mediator.addViewListener(i, app_evt.view.CLICK, this.menuHandleMenuClick, {menuItem: i});
			if (firstItem) {
				this.mediator.setAttribute(i, "addClass", "selectedMenu");
				this.selectedMenu = i;
				firstItem = false;
			}
		}	
	}
	
	pub.MenuModule.prototype.menuUpdateMenuHandler = function(event) {
		var currentMenuId = event.data.listener.selectedMenu;

		this.mediator.setAttribute(currentMenuId, "removeClass", "selectedMenu");
		this.mediator.setAttribute(event.data.menuId, "addClass", "selectedMenu");
		this.selectedMenu = event.data.menuId;
	}
	
	pub.MenuModule.prototype.menuHandleMenuClick = function(event) {
		this.mediator.notify(demo_evt.eventType.MENU_CLICK, {menuId: event.data.menuItem});
	}
	
	
	/*******************************
	ContentModule
	********************************/
	pub.ContentModule = function(id, initParams) {
		mod.BaseModule.call(this, id, initParams);
	}
	
	p$.inherit(pub.ContentModule, mod.BaseModule);
	
	pub.ContentModule.prototype.init = function(coreInitParams) {
		this.mediator.addContextListener(demo_evt.eventType.LAYOUT_CHANGED, this.cmLayoutChangedHandler);
		this.ready();
	}
	
	pub.ContentModule.prototype.cmLayoutChangedHandler = function(event){
		this.mediator.setAttribute(this.initParams.primaryElementId, "html", "");
		this.mediator.appendElement(this.initParams.primaryElementId, event.data.layout);	
	}
	
	
	
	/*******************************
	ToolbarModule
	********************************/
	pub.ToolbarModule = function(id, initParams) {
		mod.BaseModule.call(this, id, initParams);
	}
	
	p$.inherit(pub.ToolbarModule, mod.BaseModule);
	
	pub.ToolbarModule.prototype.init = function(coreInitParams) {
		this.mediator.addContextListener(demo_evt.eventType.TOOLSET_CHANGED, this.tbToolsetChangeHandler);
		this.ready();
	}

	
	pub.ToolbarModule.prototype.tbToolsetChangeHandler = function(event) {
		this.mediator.setAttribute(this.initParams.primaryElementId, "html", "");
		
		for (i in event.data.toolbarFunctions) {
			var toolbarFn = null;
			if (event.data.toolbarFunctions[i] === 'print') {
				toolbarFn = '<div class="toolbarItem"><input type="button" id="toolbar_'+ event.data.toolbarFunctions[i] + '" value="' + event.data.toolbarFunctions[i] + '"></div>';
			} else {
				toolbarFn = '<div class="toolbarItem"><input disabled type="button" id="toolbar_'+ event.data.toolbarFunctions[i] + '" value="' + event.data.toolbarFunctions[i] + '"></div>';
			}
			this.mediator.appendElement(this.initParams.primaryElementId, toolbarFn);
			this.mediator.addViewListener("toolbar_" + event.data.toolbarFunctions[i], app_evt.view.CLICK, this.menuToolbarMenuClick, {toolbarItem: event.data.toolbarFunctions[i]});
			this.mediator.addContextListener(demo_evt.eventType.PANEL_CLICKED, this.tbhandlePanelClicked, {buttonId: "toolbar_"+ event.data.toolbarFunctions[i]});
		}
		
		var selectOptions = '<option id="null" selected="selected">--Select a Layout---</option>';
		for (j in event.data.pageLayouts) {
			selectOptions += '<option value="' + j +'">' + j + '</option>';
		}
		
		var layoutSelector = '<select id="layoutSelector">' + selectOptions + '</select>';
		
		this.mediator.appendElement(this.initParams.primaryElementId, layoutSelector);
		this.mediator.addViewListener('layoutSelector', 'change', this.changeLayoutSelectorHandler, {menuId: event.data.menuId});
		
	}
	
	pub.ToolbarModule.prototype.changeLayoutSelectorHandler = function(event) {
		this.mediator.notify(demo_evt.eventType.NEW_LAYOUT_SELECTED, {menuId: event.data.menuId, layoutKey: event.target.value});
	}
	
	pub.ToolbarModule.prototype.tbhandlePanelClicked = function(event) {
		this.mediator.setAttribute(event.data.buttonId, 'removeAttribute', 'disabled');
	}
	
	pub.ToolbarModule.prototype.tbButtonClickHandler = function(event) {
		log.info(event);	
	}
	
	pub.ToolbarModule.prototype.menuToolbarMenuClick = function(event) {
		switch (event.data.toolbarItem) {
			case 'new':
				log.info('new')
				this.mediator.notify(demo_evt.eventType.NEW_CLICKED);
				break;
			case 'edit':
				log.info('edit')
				this.mediator.notify(demo_evt.eventType.EDIT_CLICKED);
				break;
			case 'delete':
				log.info('delete')
				this.mediator.notify(demo_evt.eventType.DELETE_CLICKED);
				break;
			case 'print':
				alert("Printing...");
				break;	
		}
		
	}
	
	/*******************************
	Panel Module
	********************************/
	
	pub.PanelModule = function(id, initParams) {
		mod.BaseModule.call(this, id, initParams);
	}
	
	
	p$.inherit(pub.PanelModule, mod.BaseModule);
	
	pub.PanelModule.prototype.inEditMode = false;
	
	pub.PanelModule.prototype.init = function(coreInitParams) {
		this.mediator.addContextListener(demo_evt.eventType.LAYOUT_COMPLETE, this.basePanelLayoutCompleteHandler, {panelId: this.id});
		this.mediator.addContextListener(demo_evt.eventType.CONTENT_CHANGED, this.basePanelContentChangedHandler, {panelId: this.id});
		this.mediator.addContextListener(demo_evt.eventType.PANEL_EDIT_MODE, this.panelEditModeHandler, {panelId: this.id});
		//this.mediator.addViewListener(this.initParams.primaryElementId, 'click', baseHandleClick);
		this.ready();
	}
	
	pub.PanelModule.prototype.panelEditModeHandler = function(event){
		if (this.id === event.data.selectedPanelId) {
			var panelHeight = this.mediator.getAttribute(this.id, 'height');
			var panelWidth = this.mediator.getAttribute(this.id, 'width');
			var currentHtml = this.mediator.getAttribute(this.id + " .content", 'html');
			this.mediator.setAttribute(event.data.selectedPanelId, 'html', '<textarea id="' + this.id + '_textarea">' + currentHtml + '</textarea><input type="button" id="' + this.id + '_saveButton" value="Save" style="width: 100px"></input>');
			this.mediator.setAttribute(this.id + '_textarea', 'height', panelHeight - 36);
			this.mediator.setAttribute(this.id + '_textarea', 'width', panelWidth - 6);
			
			this.mediator.addViewListener( this.id + '_saveButton', 'click', this.saveEditedText);
			this.inEditMode = true;
			
		}
	}
	
	pub.PanelModule.prototype.basePanelLayoutCompleteHandler = function(event){
		var menuId = event.data.menuId;
		var panelId = event.data.panelId;
		
		this.mediator.addViewListener(this.initParams.primaryElementId, 'click', this.baseHandleClick);
		this.mediator.addViewListener(this.initParams.primaryElementId, 'mouseover', this.baseHandleMouseOver);
		this.mediator.addContextListener(demo_evt.eventType.PANEL_CLICKED, this.handlePanelClicked, {panelId: this.id});
		this.mediator.notify(demo_evt.eventType.READY_FOR_DATA, {menuId: menuId, panelId: panelId});
	}
	
	pub.PanelModule.prototype.basePanelContentChangedHandler = function(event){
		var retPanelId = event.data.returnPanelId;
		//log.info(retPanelId);
		if (retPanelId === this.id) {
			this.mediator.setAttribute(retPanelId + " .content", 'html', event.data.content);
			this.mediator.setAttribute(retPanelId + " .content", 'show');
			this.mediator.setAttribute(retPanelId + " .loader", 'hide');
		}
	}
	
	pub.PanelModule.prototype.handlePanelClicked = function(event) {
			
		  if (pub.PanelModule.currentSelectedPanel === this.id && this.id !== event.data.clickedPanelId){
			if (this.inEditMode) {
				this.saveEditedText(event);
			}
			this.mediator.setAttribute(pub.PanelModule.currentSelectedPanel, 'border', '1px solid #CCCCCC');
			this.mediator.setAttribute(pub.PanelModule.currentSelectedPanel, 'background-color', '#f9f9f9');
			pub.PanelModule.currentSelectedPanel = event.data.clickedPanelId;
				
		}
		if (this.id === event.data.clickedPanelId) {
			this.mediator.setAttribute(this.id, 'border', '1px solid #933');
			this.mediator.setAttribute(this.id, 'background-color', '#fff9f9');
			if (pub.PanelModule.currentSelectedPanel === null) {
				pub.PanelModule.currentSelectedPanel = this.id;
			}
			
		}
	}
	
	pub.PanelModule.prototype.saveEditedText = function(event) {
		var panelHtml = this.mediator.getAttribute(this.id + '_textarea', 'val');
		log.info(panelHtml);
		this.mediator.setAttribute(this.id, 'html', '');
		this.mediator.appendElement(this.id, '<div class="content" style="display: block;"></div>');
		this.mediator.setAttribute(this.id + ' .content', 'html', panelHtml);
		this.inEditMode = false;
	}
	
	pub.PanelModule.prototype.baseHandleClick = function(event){
		this.mediator.notify(demo_evt.eventType.PANEL_CLICKED, {clickedPanelId: this.id});
		
	}
	
	pub.PanelModule.prototype.baseHandleMouseOver = function(event) {
		this.mediator.setAttribute(this.initParams.primaryElementId, 'cursor', 'pointer');
	}
	
	pub.PanelModule.currentSelectedPanel = null;
});