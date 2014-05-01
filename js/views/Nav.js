var Nav =  Backbone.View.extend({
	el: 'body',

	events:{
		"click #nav": "openNav",
		"click div.snap-drawer button": "closeNav"
	},

	initialize: function(){
		this.snap = new Snap({
			element: document.getElementById('content')
		})
	},

	testAlert: function(){
		alert('Event Triggered');
	},

	openNav: function(){
		this.snap.enable();
		this.snap.open('left');
		this.snap.disable();
	},

	closeNav: function(){
		this.snap.enable();
		this.snap.close();
		this.snap.disable();
	}
})