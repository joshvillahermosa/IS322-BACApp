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
	/*var weight = 160;
	var male_r = 0.73;
	var hour = 1;

 beer_bac = function (oz){
var test_value =((oz * 4.5)/100* (5.14) / (weight * male_r) - (0.015 * hour)) //function works but needs fixing
console.log(Match.round(test_value * 100)/ 100) //fixed issued with rounding
};
beer_bac(36);*/ 

});
