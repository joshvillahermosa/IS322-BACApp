var BAC =  Backbone.View.extend({
	el: '#load',

	initialize: function(){
		this.calc= '<div class="row" style="text-align: center"><div class="col-sm-12"><button class="btn btn-default" style="display: block;width: 100%">Beer</button></div><div class="col-sm-12"><button class="btn btn-warning" style="display: block;width: 100%">Warning</button></div><div class="col-sm-12"><button class="btn btn-info" style="display: block;width: 100%">Wine</button></div><div class="col-sm-12"><button class="btn btn-default btn-lg" style="display: block;width: 100%">%BAC%</button><buton class="btn btn-danger">Calculate</button></div></div><br><a href="#/Manual" class="btn btn-info">Manual Input</a>';
	},

	render: function(){
		this.$el.html(this.calc);
	},

	//Use to recalculate funciton when view is loaded

	calcBac: function(oz, weight, gender, hour){
		//Alex
		var test = ((oz * 4.5)/100* (5.14) / (weight * gender) - (0.015 * hour));
		//return test;
		console.log(Math.round(test *100)/100)
	}
	/*var weight = 160;
	var gender_male = 0.73;
	var gender_female = 0.66
	var hour = 1;


 beer_bac = function (oz){
var test = ((oz * 4.5)/100* (5.14) / (weight * gender_male) - (0.015 * hour))
//return test;
console.log(Math.round(test *100)/100)
};
beer_bac(36); // numeric value for ounces		

wine_bac = function (oz){ //additional function for wine
var test = ((oz * 12)/100* (5.14) / (weight * gender_male) - (0.015 * hour))
console.log(Math.round(test * 100)/100)
};
wine_bac(20); //how many ounces

hardLiqour_bac = function (oz){ //additional function for hard liqour
var test = ((oz * 40)/100* (5.14) / (weight * gender_female) - (0.015 * hour))
console.log(Math.round(test * 100)/100)
};
hardLiqour_bac(6); //ounces */

});
