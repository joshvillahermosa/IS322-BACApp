var AppRouter =  Backbone.Router.extend({
	routes:{
		"":"loadUserStats",
		"BAC": "loadBAC",
		"Person": "loadUserStats",
		"Stats": "loadStats",
		"Area": "loadArea",
		"Manual": "loadManual"
	},

	initialize: function(){		
		//this.bac = new BAC();
		this.you  = new You();
		this.bac  = new BAC();
		this.stats = new Stats();
		this.area = new Area();
		this.manual = new Manual();
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
	},

	loadManual: function(){
		this.manual.render();
	}
});

$(document).ready(function(){
	var appRouter = new AppRouter();
});

$(function  () {
	Backbone.history.start();
})