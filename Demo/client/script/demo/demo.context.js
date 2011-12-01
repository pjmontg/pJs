p$.namespace("demo.context", function(pub, log) {
	var ctx = p$.include("pjs.base.context");
	var demo_view = p$.include("demo.module.view");
	var demo_data = p$.include("demo.module.data");
	var demo_service = p$.include("demo.module.service");
	var demo_evt = p$.include("demo.event");
	var med = p$.include("pjs.ext.mediator.basic");
	var medBase =  p$.include("pjs.base.mediator");
	var extBase = p$.include("pjs.ext.core.base");
	var extDialog = p$.include("pjs.ext.core.dialog");
	var extAjax = p$.include("pjs.ext.core.ajax");
	var extTmpl = p$.include("pjs.ext.core.template");
	var demoCommands = p$.include("demo.command");
	
	pub.DemoContext = function(initParams) {
		ctx.Context.call(this, initParams);
	}
	
	p$.inherit(pub.DemoContext, ctx.Context);
	
	pub.DemoContext.prototype.startup = function() {
		
		this.registerExtension(extBase.DomManipulation);
		this.registerExtension(extBase.ViewEvent);
		this.registerExtension(extDialog.Dialog);
		this.registerExtension(extAjax.Ajax);
		this.registerExtension(extTmpl.TemplateEngine);
		
		
		this.registerModule("viewModel", demo_data.DataModule, med.BasicServiceMediator, { });
		
		this.registerModule("ajaxService", demo_service.AjaxService, med.BasicServiceMediator, { });
		
		this.registerModule("main", demo_view.MainModule, med.BasicViewMediator, {
			loaderDiv: 'mainLoader',
			primaryElementId: 'main'
		});
			
		this.registerModule("content", demo_view.ContentModule, med.BasicViewMediator, {
			loaderDiv: 'pageLoader',
			primaryElementId: 'pageContent'
		});
		
		this.registerModule("panel1", demo_view.PanelModule, med.BasicViewMediator, {
			primaryElementId: 'panel1'
		});
		
		this.registerModule("panel2", demo_view.PanelModule, med.BasicViewMediator, {
			primaryElementId: 'panel2'
		});
		
		this.registerModule("panel3", demo_view.PanelModule, med.BasicViewMediator, {
			primaryElementId: 'panel3'
		});
		
		this.registerModule("menu", demo_view.MenuModule, med.BasicViewMediator, {
			primaryElementId: 'primary-nav'
		});
		
		this.registerModule("toolbar", demo_view.ToolbarModule, med.BasicViewMediator, {
			primaryElementId: 'toolbar'
		});
		
		this.registerCommand(demo_evt.eventType.MENU_CLICK, 'menuClickCommand', demoCommands.MenuClickCommand, ["viewModel"]);
		this.registerCommand(demo_evt.eventType.NEW_LAYOUT_SELECTED, 'changeLayoutCommand', demoCommands.ChangeLayoutCommand, ["viewModel"]);
		this.registerCommand(demo_evt.eventType.READY_FOR_DATA, 'retrievePanelDataCommand', demoCommands.RetrievePanelDataCommand, ["ajaxService"]);
		this.registerCommand(demo_evt.eventType.EDIT_CLICKED, 'editPanelContentsCommand', demoCommands.EditPanelContentsCommand, ["viewModel"]);
		this.registerCommand(demo_evt.eventType.DELETE_CLICKED, 'deletePanelContentsCommand', demoCommands.DeletePanelContentsCommand, ["viewModel"]);
		
	}

});