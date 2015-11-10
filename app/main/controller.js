var ipc = require('ipc');
var events = require('../core/constants').events;

(function () {

	init();

	///

	function init() {
		ipc.on(events.FEED_LOAD_RESPONSE, onFeedLoad);
		ipc.send(events.FEED_LOAD_REQUEST);
	};

	function onFeedLoad(data) {
		console.log(data);
	};

})();