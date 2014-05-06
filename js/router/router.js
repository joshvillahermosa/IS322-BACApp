var AppRouter =  Backbone.Router.extend({
	routes:{
		"":"checkFirstTimeUse",
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
		this.people = new People();
		this.setup = new Setup();
	},

	checkFirstTimeUse: function(){
		if(this.people.localStorage.records[0] == null){
			console.log('No records -- creating new one...');
			this.setup.render();
		}else{
			var userId = this.people.localStorage.records[0];
			console.log('User ID detected -- searching profile');
			this.people.localStorage.find({"id": userId});
			console.log('User profile found: ');
			console.log(this.people.localStorage.find({"id": userId}));
			//this.people.localStorage.update({"id":"e8070905-0e97-6abb-51ec-9c2e0645aeb1", "name": "Jess"}) // <-- how to update saved items in local storage
			this.bac.render();
		}
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