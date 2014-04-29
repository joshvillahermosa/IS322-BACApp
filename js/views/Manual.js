var Manual =  Backbone.View.extend({
	el: '#load',

	initialize: function(){
		this.form = '<form role="form"><div class="form-group"><label for="time">Time</label><input name="time" type="number" class="form-control" placeholder="0" required></div><!--<div class="from-group"><label for="age">Age</label><input type="date" name="age" class="form-control" required></div>--><div class="from-group"><label for="weight">Weight</label><input type="number" min="50" max="500" name="weight" class="form-control" required></div><div class="radio-inline"><div class="row"><div class="col-xs-6"><label><input type="radio" name="sex" value="0.73">Male</label></div><div class="col-xs-6"><label><input type="radio" name="sex" value="0.66">Female</label></div></div></div><br><button type="submit" class="btn btn-success">Submit</button></form>';

		this.bac2 = new BAC();
		//this.render();
	},

	render: function(){
		this.$el.html(this.form);
		this.bac2.calcBac(36, 185, 0.73, 1);
	}
})