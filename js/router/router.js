var AppRouter = Backbone.Router.extend({
	routes:{
		"":"",
		"BAC": "testAlert",
		"BAC": "testAlert",
		"BAC": "testAlert"
	},

	initialize: function(){		
		//this.bac = new BAC();
	},
	

	testAlert: function(){
		alert('Event Triggered');
	},

	loadUserStats: function(){
		
	}
});

var appRouter = new AppRouter();

$(function  () {
	Backbone.history.start();
})