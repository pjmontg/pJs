var pageIds = ["menu1", "menu2", "menu3", "menu4"];

var pageTitles = {
	menu1: "Home",
	menu2: "Jobs",
	menu3: "Admin",
	menu4: "About"
}

exports.contentModel = {
	menu1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit ornare tortor ut posuere. Sed quis dui quam, eu convallis nulla. Ut aliquam bibendum felis ut vehicula. Pellentesque et mi eros. Nunc eget erat vel nibh consequat euismod. Aliquam erat volutpat. Mauris tristique sollicitudin nunc ut bibendum.",
	menu2: "Duis nec lectus leo, in faucibus felis. Quisque tempus porttitor hendrerit. Sed turpis erat, interdum lacinia hendrerit eget, adipiscing id lacus. Curabitur laoreet libero ac felis dapibus porttitor. Sed eu dui eget metus dictum posuere suscipit vitae magna. Donec auctor, lectus a congue tristique, erat tortor fermentum ligula, non facilisis nibh diam malesuada nibh. Quisque ac purus feugiat turpis gravida gravida. Integer et velit ac lorem scelerisque vulputate ut eu libero. Phasellus id placerat arcu. Duis non blandit augue. Vivamus a leo vel enim condimentum interdum eleifend quis tellus. Phasellus fermentum sollicitudin nisl a ornare. Phasellus nec egestas sem.", 
	menu3: "Morbi id turpis augue, non tempus eros. Aenean faucibus ligula a nisl sollicitudin a faucibus odio tincidunt. Morbi vel justo turpis, non facilisis tellus. Phasellus justo purus, ultrices sit amet malesuada et, lacinia ac enim. Quisque lacus neque, consequat sed elementum et, mollis in lacus. Aliquam erat volutpat. Proin ullamcorper eros sem. Etiam et sapien leo, vel venenatis urna. Aliquam condimentum turpis vel lectus egestas aliquet. Mauris egestas tempus felis eu lobortis. Duis pellentesque turpis ac dui auctor tincidunt. Nulla dui lectus, cursus at interdum adipiscing, semper vel nulla. Nullam faucibus vulputate interdum.",
	menu4: "Phasellus ut lectus nec turpis commodo auctor sit amet eu velit. Nam lacinia pretium ipsum, sit amet lacinia purus rutrum et. Nunc justo lectus, tincidunt id consectetur eleifend, vulputate nec ipsum. Suspendisse fringilla lorem quis lectus convallis ut dapibus magna pharetra. Suspendisse gravida consequat dignissim. Integer in interdum tortor. Nam condimentum nulla a ligula dignissim eleifend. Praesent condimentum cursus ipsum. Nunc non consequat eros. Etiam vestibulum, dui id euismod imperdiet, diam arcu pellentesque nibh, ullamcorper condimentum nisi massa sit amet tellus. Aliquam lobortis, nibh eu porttitor porta, lorem nisi porta mauris, at ultrices diam est dignissim arcu. Suspendisse potenti. Nullam commodo mi et nibh cursus euismod."
}

var toolbarModel = {
	menu1: ["new", "edit", "print"],
	menu2: ["new", "edit"], 
	menu3: ["new", "edit", "delete", "print"],
	menu4: []
}




exports.initModel = {
	pageIds: pageIds, 
	pageTitles: pageTitles, 
	content: exports.contentModel.menu1, 
	toolbarFunctions: toolbarModel
}	


		
		