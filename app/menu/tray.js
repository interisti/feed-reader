var path = require('path');
var Menu = require('menu');
var Tray = require('tray');


module.exports = function () {
	var appIcon = new Tray(path.join(__dirname, '../../images/icon.png'));
	var contextMenu = Menu.buildFromTemplate([
		{ label: 'Item1', type: 'radio' },
		{ label: 'Item2', type: 'radio' },
		{ label: 'Item3', type: 'radio', checked: true },
		{ label: 'Item4', type: 'radio' },
	]);
	appIcon.setToolTip('This is my application.');
	appIcon.setContextMenu(contextMenu);
	return appIcon;
};