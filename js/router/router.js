var AppRouter = Backbone.Router.extend({
	routes:{
		"":"loadUserStats",
		"BAC": "loadBAC",
		"Person": "loadUserStats",
		//"BAC": "testAlert"
	},

	initialize: function(){		
		//this.bac = new BAC();
		this.you  = new You();
		//this.bac  = new BAC();
	},
	

	testAlert: function(){
		alert('Event Triggered');
	},

	loadUserStats: function(){
		this.you.render();
	},

	loadBAC: function(){
		this.bac.render();
	}
});

var appRouter = new AppRouter();

$(function  () {
	Backbone.history.start();
})