var ipc = require('ipc');
var events = require('../core/constants').events;

(function (ns) {

	init();

	///

	function init() {
		ipc.on(events.FEED_LOAD_RESPONSE, onFeedLoad);
		ipc.send(events.FEED_LOAD_REQUEST);
	};

	function onFeedLoad(data) {
		feedComponent.set('data', data);
		console.log(data);
	};



	var feedComponent = ns.UI.FeedComponent();

})(window.FR = window.FR || {});