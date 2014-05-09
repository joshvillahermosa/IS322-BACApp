var Manual =  Backbone.View.extend({
	el: '#load',

	events:{
		'click #manualBac': 'addBACLevel'
	},

	initialize: function(){
		this.user = new You();
		this.you = this.user.retrieveProfile();
		this.form = '<div class="form-group"><label for="acv">Total Alcohol Content Volume</label><input id="acv" name="acv" class="form-control" placeholder="0" required></div><div class="form-group"><label for="oz">Total Ounzes</label><input id="oz" name="oz" class="form-control" placeholder="0" required></div><div class="from-group"><label for="time">Total Time</label><input id="time" type="number" min="0" max="24" class="form-control" required></div><br><button id="manualBac" class="btn btn-success">Calculate</button><div class="well" id="BAC"><span > Your BAC Level is</span><span id="BACLevel"></span></div>';

		this.manualBac = new BAC();
		//this.render();
	},

	render: function(){
		this.$el.html(this.form);
	},

	calcBac: function(){
		var acv = $('#acv').val();
		var oz = $('#oz').val();
		var time = $('#time').val();
		var bac = this.manualBac.calcBac(acv, oz, this.you.weight, this.you.genderBac, time);
		$('#BACLevel').empty();
		$('#BACLevel').append('<p>'+bac+'</p>');
		return bac;
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

	addBACLevel: function(){
		console.log(this.you);
		var bac = this.calcBac();
		var time = this.getTime();
		var date = this.getDate();
		//var location = area.getLocation();

		var newBac = new PersonBAC({
			"date": date,
			"bacLevelHigh": bac,
			"bacLevelCur": 0,
			"lat": 0,
			"lng": 0,
			"timeStart": time,
			"timeFinish": time,
			"manualEnter": true
		});

		this.you.BACLevels.push(newBac);
		people.localStorage.update(this.you);

		console.log(newBac);
	}
})