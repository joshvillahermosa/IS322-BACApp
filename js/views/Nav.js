var Nav =  Backbone.View.extend({
	el: 'body',

	events:{
		"click #nav": "openNav"
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
		this.snap.open('left');
	},

	closeNav: function(){
		this.snap.close();	
	}
})