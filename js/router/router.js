var AppRouter = Backbone.Router.extend({
	routes:{
		"":"loadUserStats",
		"BAC": "testAlert",
		"BAC": "testAlert",
		"BAC": "testAlert"
	},

	initialize: function(){		
		//this.bac = new BAC();
		this.you  = new You();
	},
	

	testAlert: function(){
		alert('Event Triggered');
	},

	loadUserStats: function(){
		this.you();
	}
});

var appRouter = new AppRouter();

$(function  () {
	Backbone.history.start();
})