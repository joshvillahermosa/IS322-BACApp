var AppRouter =  Backbone.Router.extend({
	routes:{
		"":"loadUserStats",
		"BAC": "loadBAC",
		"Person": "loadUserStats",
		"Stats": "loadStats",
		"Area": "loadArea"
	},

	initialize: function(){		
		//this.bac = new BAC();
		this.you  = new You();
		this.bac  = new BAC();
		this.stats = new Stats();
		this.area = new Area()

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
	},

	loadArea: function(){
		this.area.render();
	}
});

$(document).ready(function(){
	var appRouter = new AppRouter();
});

$(function  () {
	Backbone.history.start();
})