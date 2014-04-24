var BAC = new Backbone.View.extend({
	el: '#load',

	initialize: function(){
		this.calc= 'Test';
		//this.render();
	},

	render: function(){
		this.$el.html(this.calc);
	}

});