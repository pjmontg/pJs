p$.namespace("demo.event", function(pub, log) {
	pub.eventType = {
			MENU_CLICK: 'menuClick',
			LAYOUT_CHANGED: 'layoutChanged',
			LAYOUT_COMPLETE: 'layoutComplete',
			INIT_MENU: 'initMenu',
			CONTENT_CHANGED: 'contentChanged',
			NEW_CLICKED: 'newClicked',
			EDIT_CLICKED: 'editClicked',
			DELETE_CLICKED: 'deleteClicked',
			EDIT_PANEL: 'editPanel',
			DELETE_PANEL: 'deletePanel',
			READY_FOR_DATA: 'readyForData',
			TOOLSET_CHANGED: 'toolsetChanged',
			PANEL_CLICKED: 'panelClicked',
			VIEW_MODEL_LOADED: 'viewModelLoaded',
			NEW_LAYOUT_SELECTED: 'newLayourSelected',
			PANEL_EDIT_MODE: 'panelEditMode'
		}
	
});