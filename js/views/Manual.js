var Manual =  BAC.extend({
	el: '#load',

	events:{
		'click #manualBac': 'addBACLevel'
	},

	initialize: function(){
		this.user = new You();
		this.you = this.user.retrieveProfile();
		this.form = '<div class="form-group"><label for="acv">Total Alcohol Content Volume</label><input type="number" step="any" id="acv" name="acv" class="form-control" placeholder="0" required></div><div class="form-group"><label for="oz">Total Ounzes</label><input type="number" step="any" id="oz" name="oz" class="form-control" placeholder="0" required></div><div class="from-group"><label for="time" type="number" step="any">Total Time</label><input id="time" min="0" max="24" class="form-control" required></div><br><button id="manualBac" class="btn btn-success">Calculate</button><div class="well" id="BAC"><span > Your BAC Level is</span><span id="BACLevel"></span></div>';

		//this.manualBac = new BAC();
		//this.render();
	},

	render: function(){
		$('#notification').empty();
		this.$el.html(this.form);
	},

	/*calcBac: function(){
		var acv = $('#acv').val();
		var oz = $('#oz').val();
		var time = $('#time').val();
		var bac = this.calcBac(acv, oz, this.you.weight, this.you.genderBac, time);
		$('#BACLevel').empty();
		$('#BACLevel').append('<p>'+bac+'</p>');
		return bac;
	},*/

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
		//var bac = this.calcBac();
		var acv = $('#acv').val();
		var oz = $('#oz').val();
		var time = $('#time').val();
		var bac = this.calcBac(acv, oz, this.you.weight, this.you.genderBac, time);
		var time = this.getTime();
		var date = this.getDate();
		area.getCurrentLocation();

		var newBac = new PersonBAC({
			"date": date,
			"bacLevelHigh": bac,
			"bacLevelCur": 0,
			"lat": window.lat,
			"lng": window.lng,
			"timeStart": time,
			"timeFinish": time,
			"manualEnter": true
		});

		this.you.BACLevels.push(newBac);
		people.localStorage.update(this.you);

		console.log(newBac);
	}
})