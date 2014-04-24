var BAC =  Backbone.View.extend({
	el: '#load',

	initialize: function(){
		this.calc= '<div class="row" style="text-align: center"><div class="col-sm-12"><button class="btn btn-default" style="display: block;width: 100%">Beer</button></div><div class="col-sm-12"><button class="btn btn-warning" style="display: block;width: 100%">Warning</button></div><div class="col-sm-12"><button class="btn btn-info" style="display: block;width: 100%">Wine</button></div><div class="col-sm-12"><button class="btn btn-default btn-lg" style="display: block;width: 100%">%BAC%</button><buton class="btn btn-danger">Calculate</button></div></div>';
	},

	render: function(){
		this.$el.html(this.calc);
	},

	calcBac: function(){
		//Alex
	}

});