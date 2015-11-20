var BrowserWindow = require('browser-window');

module.exports = function () {
	var mainWindow = new BrowserWindow({ width: 1200, height: 600 });

	// and load the index.html of the app.
	mainWindow.loadUrl('file://' + __dirname + '/view.html');

	// Open the DevTools.
	// mainWindow.openDevTools();
	
	return mainWindow;
};