var Manual =  Backbone.View.extend({
	el: '#load',

	events:{
		'click #manualBac': 'calcBac'
	},

	initialize: function(){
		this.user = new You();
		this.you = this.user.retrieveProfile();
		this.form = '<form role="form"><div class="form-group"><label for="acv">Alcohol Content Volume</label><input id="acv" name="acv" class="form-control" placeholder="0" required></div><div class="form-group"><label for="oz">Ounzes</label><input id="oz" name="oz" class="form-control" placeholder="0" required></div><div class="from-group"><label for="time">Time</label><input id="time" type="number" class="form-control" required></div><br><button id="manualBac" class="btn btn-success">Calculate</button></form><div class="well" id="BAC"></div>';

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
		$('#BAC').append('<p>'+bac+'</p>');
	}
})