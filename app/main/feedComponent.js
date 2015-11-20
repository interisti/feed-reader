(function (ns) {

	ns.UI = ns.UI || {};

	ns.UI.FeedComponent = function () {
		return new Ractive({
			// The `el` option can be a node, an ID, or a CSS selector.
			el: '#feedsContainer',
			// We could pass in a string, but for the sake of convenience
			// we're passing the ID of the <script> tag above.
			template: '#feed-item-template'
		});
	};

})(window.FR = window.FR || {});