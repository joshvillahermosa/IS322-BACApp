var AppRouter =  Backbone.Router.extend({
	routes:{
		"":"loadUserStats",
		"BAC": "loadBAC",
		"Person": "loadUserStats",
		"Stats": "loadStats"
	},

	initialize: function(){		
		//this.bac = new BAC();
		this.you  = new You();
		this.bac  = new BAC();
		this.stats = new Stats();
	},
	

	testAlert: function(){
		alert('Event Triggered');
	},

	loadUserStats: function(){
		this.you.render();
	},

	loadBAC: function(){
		this.bac.render();
	},

	loadStats: function(){
		this.stats.render();
	}
});

var appRouter = new AppRouter();

$(function  () {
	Backbone.history.start();
})