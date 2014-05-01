var AppRouter =  Backbone.Router.extend({
	routes:{
		"":"loadUserStats",
		"BAC": "loadBAC",
		"Person": "loadUserStats",
		"Stats": "loadStats",
		"Area": "loadArea",
		"Manual": "loadManual"
	},

	events:{
		"click button#nav": "testAlert"
	},

	initialize: function(){		
		//this.bac = new BAC();
		this.you  = new You();
		this.bac  = new BAC();
		this.stats = new Stats();
		this.area = new Area();
		this.manual = new Manual();
		this.nav = new Nav();
	},
	

	testAlert: function(){
		alert('Event Triggered');
	},

	loadUserStats: function(){
		this.you.render();
		this.nav.closeNav();
	},

	loadBAC: function(){
		this.bac.render();
		this.nav.closeNav();
	},

	loadStats: function(){
		this.stats.render();
		this.nav.closeNav();
	},

	loadArea: function(){
		this.area.render();
		this.nav.closeNav();
	},

	loadManual: function(){
		this.manual.render();
		this.nav.closeNav();
	}
});

$(document).ready(function(){
	var appRouter = new AppRouter();
});

$(function  () {
	Backbone.history.start();
})