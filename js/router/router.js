var AppRouter = Backbone.Router.extend({
	routes:{
		"":"",
		"BAC": "testAlert",
		"BAC": "testAlert",
		"BAC": "testAlert"
	},

	/*initialize: function(){
		this.toolsView = new ToolsView(); 

	},

	loadTools: function(){
		$('#tools').html(this.toolsView.render().el);
	},*/

	testAlert: function(){
		alert('Event Triggered');
	}
});

var appRouter = new AppRouter();

$(function  () {
	Backbone.history.start();
})