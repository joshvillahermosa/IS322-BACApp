var BAC =  Backbone.View.extend({
	el: '#load', 

	events: {
		'click .alcohol': 'getDrink'
	},

	initialize: function(){

		this.user = new You();
		this.you = this.user.retrieveProfile();

		//Setting Global Variables
		window.bac = 0;
		window.lastTime = 0;
		window.drinking = false;
		window.lastAcv = 0;
		window.lastOz = 0;
		window.lastBac = 0;
		window.i = 0;
		window.firstDrink = false;
		window.highBac = 0;
		window.startTime = 0;

		this.user = new You();
		this.you = this.user.retrieveProfile();
		this.calc= '<div class="row" style="text-align: center"><div class="col-sm-12"><div class="btn-group" style="display: block;width: 100%"><button id="beer1" class="btn btn-default alcohol" style="display: block;width: 33%">Beer 1</button><button id="beer2" class="btn btn-default alcohol" style="display: block;width: 33%">Beer 2</button><button id="beer3" class="btn btn-default alcohol" style="display: block;width: 33%">Beer 3</button></div></div></div><div class="row" style="text-align: center"><div class="col-sm-12"><div class="btn-group" style="display: block;width: 100%"><button id="wine1" class="btn btn-primary alcohol" style="display: block;width: 33%">Wine 1</button><button id="wine2" class="btn btn-primary alcohol" style="display: block;width: 33%">Wine 2</button><button id="wine3" class="btn btn-primary alcohol" style="display: block;width: 33%">Wine 3</button></div></div></div><div class="row" style="text-align: center"><div class="col-sm-12"><div class="btn-group" style="display: block;width: 100%"><button id="hl1" class="btn btn-warning alcohol" style="display: block;width: 33%">Liquer 1</button><button id="hl2" class="btn btn-warning alcohol" style="display: block;width: 33%">Liquer 2</button><button id="hl3" class="btn btn-warning alcohol" style="display: block;width: 33%">Liquer 3</button></div></div></div><br><div class="row" style="text-align: center"><div class="col-sm-12"><div id="BAC" class="well" style="display: block;width: 100%"><span>Your BAC level is: </span><span id="BACLevel"></span></div></div></div></div><br><a href="#/Manual" class="btn btn-info">Enter BAC Diary</a>';
	},

	render: function(){
		this.$el.html(this.calc);
		this.loadUserAlcohol();
		this.getStartTime();

		window.test = 5;
	},

	//Use to recalculate funciton when view is loaded

	/*Notes
	Temporary data - Estamated dummy data
		Beer avg = 0.05;
		Wine avg = 0.11;
		HL avg = 0.4;

	*/

	loadUserAlcohol: function(){
		people.fetch();
		var user = people.first();

		$("#beer1").html(user.attributes.beer1[0].name).attr('value', user.attributes.beer1[0].id);
		$("#beer2").html(user.attributes.beer2[0].name).attr('value', user.attributes.beer2[0].id);
		$("#beer3").html(user.attributes.beer3[0].name).attr('value', user.attributes.beer3[0].id);

		$("#wine1").html(user.attributes.wine1[0].name).attr('value', user.attributes.wine1[0].id);
		$("#wine2").html(user.attributes.wine2[0].name).attr('value', user.attributes.wine2[0].id);
		$("#wine3").html(user.attributes.wine3[0].name).attr('value', user.attributes.wine3[0].id);

		$("#hl1").html(user.attributes.hl1[0].name).attr('value', user.attributes.hl1[0].id);
		$("#hl2").html(user.attributes.hl2[0].name).attr('value', user.attributes.hl2[0].id);
		$("#hl3").html(user.attributes.hl3[0].name).attr('value', user.attributes.hl3[0].id);

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

	getDrink: function(){
		if(window.drinking == false){
			people.fetch();
			window.user = people.first();
			window.drinking = true;
		}
		var drinkId = $(event.target).val();
		console.log(drinkId);
		bar.fetch();
		var drink = bar.where({"id": drinkId});
		console.log(drink);

		//Drink up!

		window.lastAcv += drink[0].attributes.alcoholContent;
		window.lastOz += drink[0].attributes.ounces; 
		window.lastTime = window.lastTime + drink[0].attributes.timeConsumption;

		console.log(drink[0].attributes.alcoholContent, drink[0].attributes.ounces, window.user.attributes.weight, window.user.attributes.genderBac, drink[0].attributes.timeConsumption)
		
		window.lastBac += this.calcBac(drink[0].attributes.alcoholContent, drink[0].attributes.ounces, window.user.attributes.weight, window.user.attributes.genderBac, drink[0].attributes.timeConsumption);

		//Captures highest Bac
		

		if(window.firstDrink == false){
			window.firstDrink = true;
			window.startTime = this.getTime();
			var timer = setInterval( function(){			
			this.updateBac();
				//this.test();
			if(window.drinking == false){
					clearInterval(timer);
					this.saveBac()
				}
			}.bind(this), 1000); //.bind(this) to use this object, set to 1secs
		}else{
			console.log('Already having more than one drink');
		}
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
		bac = Math.round(bac * 1000) / 1000;
		
		console.log('Computed BAC: '+bac);

		$('#BACLevel').empty();
		$('#BACLevel').append(bac);

		if(window.lastBac >= window.highBac)
		{
			window.highBac = window.lastBac;
		}
		return bac;
	},

	saveBac:function(){

		var date = this.getDate();
		var bac = window.highBac;
		var timeStart = window.startTime;
		var timeEnd = this.getTime();
		area.getCurrentLocation();


		var newBac = new PersonBAC({
			"date": date,
			"bacLevelHigh": bac,
			"bacLevelCur": 0,
			"lat": window.lat,
			"lng": window.lng,
			"timeStart": timeStart,
			"timeFinish": timeEnd,
		});

		this.you.BACLevels.push(newBac);
		people.localStorage.update(this.you);

		console.log(newBac);
		this.resetGlobal();
	},

	getDate: function(){
		var date2 = new Date();
		var date = {
			year: 0,
			month: 0,
			day:0
		};

		date.year = date2.getFullYear();
		date.month = date2.getMonth()+1;
		date.day = date2.getDate();

		var today = date.year+'-'+date.month+'-'+date.day;

		return today;
	},

	getTime: function(){
		var date = new Date();
		var time = {
			hour: 0,
			min: 0
		};
		time.hour = date.getHours();
		time.min = date.getMinutes();

		var curTime = time.hour+':'+time.min;
		return curTime;
	},

	updateBac: function(){ //Not tested
			window.i++;
			console.log('Updating Bac round: '+window.i);
			
			window.lastTime = window.lastTime +  0.017; //adds every time when excuted
			if (window.lastBac <= 0){
				window.drinking = false;
			}else{
				window.lastBac = this.calcBac(window.lastAcv, window.lastOz, window.user.attributes.weight, window.user.attributes.genderBac, window.lastTime);
				/*console.log(window.lastBac);
				console.log(window.lastAcv);
				console.log(window.lastTime);
				console.log(window.lastTime);*/
			}
		console.log('Highest BAC: '+window.highBac);
	},

	resetGlobal: function(){
		window.bac = 0;
		window.lastTime = 0;
		window.drinking = false;
		window.lastAcv = 0;
		window.lastOz = 0;
		window.lastBac = 0;
		window.i = 0;
		window.firstDrink = false;
		window.highBac = 0;
		window.startTime = 0;
		console.log('Global Var reset');
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

//var bac = new BAC();
