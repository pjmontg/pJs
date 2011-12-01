var pageIds = ["home", "jobs", "admin", "about"];

var pageTitles = {
	home: "Home",
	jobs: "Jobs",
	admin: "Admin",
	about: "About"
}

exports.contentModel = {};

exports.contentModel.home = {
	panel1: "<strong>HOME-PANEL 1:</strong> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit ornare tortor ut posuere. Sed quis dui quam, eu convallis nulla.</p><p> Ut aliquam bibendum felis ut vehicula. Pellentesque et mi eros. Nunc eget erat vel nibh consequat euismod. Aliquam erat volutpat. Mauris tristique sollicitudin nunc ut bibendum.</p>",
	panel2: "<strong>HOME-PANEL 2:</strong> <p>Duis nec lectus leo, in faucibus felis. Quisque tempus porttitor hendrerit. Sed turpis erat, interdum lacinia hendrerit eget, adipiscing id lacus. Curabitur laoreet libero ac felis dapibus porttitor. Sed eu dui eget metus dictum posuere suscipit vitae magna. Donec auctor, lectus a congue tristique, erat tortor fermentum ligula, non facilisis nibh diam malesuada nibh. </p><p>Quisque ac purus feugiat turpis gravida gravida. Integer et velit ac lorem scelerisque vulputate ut eu libero. Phasellus id placerat arcu. Duis non blandit augue. Vivamus a leo vel enim condimentum interdum eleifend quis tellus. Phasellus fermentum sollicitudin nisl a ornare. Phasellus nec egestas sem.</p>", 
	panel3: "<strong>HOME-PANEL 3:</strong> <p>Morbi id turpis augue, non tempus eros. Aenean faucibus ligula a nisl sollicitudin a faucibus odio tincidunt. Morbi vel justo turpis, non facilisis tellus. Phasellus justo purus, ultrices sit amet malesuada et, lacinia ac enim. Quisque lacus neque, consequat sed elementum et, mollis in lacus. Aliquam erat volutpat. Proin ullamcorper eros sem. Etiam et sapien leo, vel venenatis urna. Aliquam condimentum turpis vel lectus egestas aliquet. </p><p>Mauris egestas tempus felis eu lobortis. Duis pellentesque turpis ac dui auctor tincidunt. Nulla dui lectus, cursus at interdum adipiscing, semper vel nulla. Nullam faucibus vulputate interdum.<p>"
}

exports.contentModel.jobs = {
	panel1: "<strong>JOBS-PANEL 1:</strong> <p>Phasellus ut lectus nec turpis commodo auctor sit amet eu velit. Nam lacinia pretium ipsum, sit amet lacinia purus rutrum et. Nunc justo lectus, tincidunt id consectetur eleifend, vulputate nec ipsum. Suspendisse fringilla lorem quis lectus convallis ut dapibus magna pharetra. Suspendisse gravida consequat dignissim. Integer in interdum tortor. </p><p>Nam condimentum nulla a ligula dignissim eleifend. Praesent condimentum cursus ipsum. Nunc non consequat eros. </p><p>Etiam vestibulum, dui id euismod imperdiet, diam arcu pellentesque nibh, ullamcorper condimentum nisi massa sit amet tellus. Aliquam lobortis, nibh eu porttitor porta, lorem nisi porta mauris, at ultrices diam est dignissim arcu. Suspendisse potenti. Nullam commodo mi et nibh cursus euismod.</p>",
	panel2:"<strong>JOBS-PANEL 2:</strong> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit ornare tortor ut posuere. Sed quis dui quam, eu convallis nulla. Ut aliquam bibendum felis ut vehicula. Pellentesque et mi eros. Nunc eget erat vel nibh consequat euismod. Aliquam erat volutpat. Mauris tristique sollicitudin nunc ut bibendum.</p>",
	
	panel3: "<strong>JOBS-PANEL 3:</strong> <p>Duis nec lectus leo, in faucibus felis. Quisque tempus porttitor hendrerit. Sed turpis erat, interdum lacinia hendrerit eget, adipiscing id lacus. </p><p>Curabitur laoreet libero ac felis dapibus porttitor. Sed eu dui eget metus dictum posuere suscipit vitae magna. Donec auctor, lectus a congue tristique, erat tortor fermentum ligula, non facilisis nibh diam malesuada nibh. </p><p>Quisque ac purus feugiat turpis gravida gravida. Integer et velit ac lorem scelerisque vulputate ut eu libero. Phasellus id placerat arcu. Duis non blandit augue. Vivamus a leo vel enim condimentum interdum eleifend quis tellus. Phasellus fermentum sollicitudin nisl a ornare. Phasellus nec egestas sem.</p>"
}
	 
exports.contentModel.admin = {
	panel1:	"<strong>ADMIN-PANEL 1:</strong> <p>Morbi id turpis augue, non tempus eros. Aenean faucibus ligula a nisl sollicitudin a faucibus odio tincidunt. </p><p>Morbi vel justo turpis, non facilisis tellus. Phasellus justo purus, ultrices sit amet malesuada et, lacinia ac enim. Quisque lacus neque, consequat sed elementum et, mollis in lacus. Aliquam erat volutpat. </p><p>Proin ullamcorper eros sem. Etiam et sapien leo, vel venenatis urna. Aliquam condimentum turpis vel lectus egestas aliquet. Mauris egestas tempus felis eu lobortis. Duis pellentesque turpis ac dui auctor tincidunt. Nulla dui lectus, cursus at interdum adipiscing, semper vel nulla. Nullam faucibus vulputate interdum.</p>",
	panel2: "<strong>ADMIN-PANEL 2:</strong> <p>Phasellus ut lectus nec turpis commodo auctor sit amet eu velit. Nam lacinia pretium ipsum, sit amet lacinia purus rutrum et. Nunc justo lectus, tincidunt id consectetur eleifend, vulputate nec ipsum. Suspendisse fringilla lorem quis lectus convallis ut dapibus magna pharetra. Suspendisse gravida consequat dignissim. Integer in interdum tortor. Nam condimentum nulla a ligula dignissim eleifend. Praesent condimentum cursus ipsum. Nunc non consequat eros. Etiam vestibulum, dui id euismod imperdiet, diam arcu pellentesque nibh, ullamcorper condimentum nisi massa sit amet tellus. </p><p>Aliquam lobortis, nibh eu porttitor porta, lorem nisi porta mauris, at ultrices diam est dignissim arcu. Suspendisse potenti. Nullam commodo mi et nibh cursus euismod.<p>",
	panel3: "<strong>ADMIN-PANEL 3:</strong> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit ornare tortor ut posuere. Sed quis dui quam, eu convallis nulla. Ut aliquam bibendum felis ut vehicula. Pellentesque et mi eros. Nunc eget erat vel nibh consequat euismod. Aliquam erat volutpat. Mauris tristique sollicitudin nunc ut bibendum.</p>",
	
}

exports.contentModel.about = {
	panel1:"<strong>ABOUT-PANEL 1:</strong> <p>Duis nec lectus leo, in faucibus felis. Quisque tempus porttitor hendrerit. Sed turpis erat, interdum lacinia hendrerit eget, adipiscing id lacus. Curabitur laoreet libero ac felis dapibus porttitor. Sed eu dui eget metus dictum posuere suscipit vitae magna./<p><p> Donec auctor, lectus a congue tristique, erat tortor fermentum ligula, non facilisis nibh diam malesuada nibh. Quisque ac purus feugiat turpis gravida gravida. Integer et velit ac lorem scelerisque vulputate ut eu libero. </p><p>Phasellus id placerat arcu. Duis non blandit augue. Vivamus a leo vel enim condimentum interdum eleifend quis tellus. Phasellus fermentum sollicitudin nisl a ornare. Phasellus nec egestas sem.</p>",
	panel2: "<strong>ABOUT-PANEL 2:</strong> <p>Morbi id turpis augue, non tempus eros. Aenean faucibus ligula a nisl sollicitudin a faucibus odio tincidunt. Morbi vel justo turpis, non facilisis tellus. Phasellus justo purus, ultrices sit amet malesuada et, lacinia ac enim. Quisque lacus neque, consequat sed elementum et, mollis in lacus. </p><p>Aliquam erat volutpat. </p><p>Proin ullamcorper eros sem. Etiam et sapien leo, vel venenatis urna. Aliquam condimentum turpis vel lectus egestas aliquet. Mauris egestas tempus felis eu lobortis. Duis pellentesque turpis ac dui auctor tincidunt. Nulla dui lectus, cursus at interdum adipiscing, semper vel nulla. Nullam faucibus vulputate interdum.</p>",
	panel3: "<strong>ABOUT-PANEL 3:</strong> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit ornare tortor ut posuere. </p><p>Sed quis dui quam, eu convallis nulla. Ut aliquam bibendum felis ut vehicula. Pellentesque et mi eros. Nunc eget erat vel nibh consequat euismod. Aliquam erat volutpat. Mauris tristique sollicitudin nunc ut bibendum.</p>"
}



var toolbarModel = {
	home: ["new", "edit", "print"],
	jobs: ["new", "edit"], 
	admin: ["new", "edit", "delete", "print"],
	about: []
}

var layoutModel = {
	layout_3_panel_left: '<div id="layout_3_panel_left"><div id="panel1" class="left"><div class="loader"><img src="/images/ajax-loader.gif"/> Loading...</div><div class="content"></div></div><div id="panel2" class="right-top"><div class="loader"><img src="/images/ajax-loader.gif"/> Loading...</div><div class="content"></div></div><div id="panel3" class="right-bottom"><div class="loader"><img src="/images/ajax-loader.gif"/> Loading...</div><div class="content"></div></div></div>',
	
	layout_3_panel_right:  '<div id="layout_3_panel_right"><div id="panel3" class="right"><div class="loader"><img src="/images/ajax-loader.gif"/> Loading...</div><div class="content"></div></div><div id="panel1" class="left-top"><div class="loader"><img src="/images/ajax-loader.gif"/> Loading...</div><div class="content"></div></div><div id="panel2" class="left-bottom"><div class="loader"><img src="/images/ajax-loader.gif"/> Loading...</div><div class="content"></div></div></div>',
	
	layout_3_panel: '<div id="layout_3_panel"><div id="panel1" class="left"><div class="loader"><img src="/images/ajax-loader.gif"/> Loading...</div><div class="content"></div></div><div id="panel2" class="middle"><div class="loader"><img src="/images/ajax-loader.gif"/> Loading...</div><div class="content"></div></div><div id="panel3" class="right"><div class="loader"><img src="/images/ajax-loader.gif"/> Loading...</div><div class="content"></div></div></div>'
}

var pageLayouts = {
	home: 'layout_3_panel_left',
	jobs: 'layout_3_panel_right',
	admin: 'layout_3_panel',
	about: 'layout_3_panel_left'
}

exports.initModel = {
	pageIds: pageIds, 
	pageTitles: pageTitles, 
	toolbarFunctions: toolbarModel,
	layoutModel: layoutModel,
	pageLayouts: pageLayouts,
	initialContent: exports.contentModel.home
}	


		
		