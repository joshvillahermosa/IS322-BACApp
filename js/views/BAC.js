var BAC =  Backbone.View.extend({
	el: '#load', 

	events: {
		'click #beer': 'calcBACBeer',
		'click #wine': 'calcBACWine',
		'click #hl': 'calcBACHl', 
	},

	initialize: function(){
		this.user = new You();
		this.you = this.user.retrieveProfile();
		this.calc= '<div class="row" style="text-align: center"><div class="col-sm-12"><button class="btn btn-default" style="display: block;width: 100%" id="beer">Beer</button></div><div class="col-sm-12"><button class="btn btn-warning" style="display: block;width: 100%" id="wine">Wine</button></div><div class="col-sm-12"><button class="btn btn-info" style="display: block;width: 100%" id="hl">Hard Liqour</button></div><div class="col-sm-12"><div id="BAC" class="well" style="display: block;width: 100%"><span>Your BAC level is: </span><span id="BACLevel"></span></div></div></div><br><a href="#/Manual" class="btn btn-info">Manual Input</a>';
	},

	render: function(){
		this.$el.html(this.calc);
		this.getStartTime();
	},

	//Use to recalculate funciton when view is loaded

	/*Notes
	Temporary data - Estamated dummy data
		Beer avg = 0.05;
		Wine avg = 0.11;
		HL avg = 0.4;

	*/

	calcBACBeer: function(){
		var bac = this.calcBac(12, 0.054, this.you.weight, this.you.genderBac, 1);
	},

	calcBACWine: function(){
		var bac = this.calcBac(12, 0.11, this.you.weight, this.you.genderBac, 1);
		
	},

	calcBACHl: function(){
		var bac = this.calcBac(12, 0.4, this.you.weight, this.you.genderBac, 1);
	},

	poundsToKilo: function (weight){
		return weight/2.2046;
	},

	getStartTime: function(){
		var date = new Date();
		var time = {
			hour: 0,
			min: 0
		};
		time.hour = date.getHours()
		time.min = date.getMinutes()
		console.log(time.hour +':'+time.min);
	},

	calcBac: function(acv, oz, weight, gender, hour){
		//Alex
		//var bac = ((oz * 4.5)/100* (5.14) / (weight * gender) - (0.015 * hour));
		//console.log(Math.round(bac *100)/100);
		
		/*var top = 0.806 * oz * 1.2;
		var kg = this.poundsToKilo(weight);
		var bottom = gender * kg;
		var left = 0.017 - hour;

		var bac = (top/bottom) - left;*/

		//var bac = ((oz * 5.14)/(weight * gender )) -( 0.15 * hour);
		//Gets negative value...

		//Create formula based on this - http://www.endmemo.com/medical/bac.php
		var bac = (((acv * oz) * 5.14)/(weight * gender )) -( 0.015 * hour);
		
		console.log(bac);

		$('#BACLevel').empty();
		$('#BACLevel').append(bac);
		return bac;
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
