var ipc = require('ipc');
var Datastore = require('nedb')
var path = require('path');
var events = require('../core/constants').events;

var db = {
	feeds: new Datastore({ filename: path.join(__dirname, './feeds.db'), autoload: true }),
	channels: new Datastore({ filename: path.join(__dirname, './channels.db'), autoload: true }),
	settings: new Datastore({ filename: path.join(__dirname, './settings.db'), autoload: true })
};

module.exports = function init() {
	ipc.on(events.FEED_LOAD_REQUEST, onFeedLoadRequest);
};


function onFeedLoadRequest(event, msg) {
	db.feeds.find({}, function (err, feeds) {
		event.sender.send(events.FEED_LOAD_RESPONSE, feeds);
	});
};
