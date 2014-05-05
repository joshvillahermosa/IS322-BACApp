var Setup =  Backbone.View.extend({
	el: '#load',

	events:{
		//"click #update": "updateYou"
		"onchange": "createProfile"
	},

	initialize: function(){
		this.form = '<form role="form"><div class="form-group"><label for="name">Name</label><input id="name" name="name" type="text" class="form-control" placeholder="Name" required></div><div class="form-group"><label for="email">Email</label><input name="email" type="text" class="form-control" placeholder="Email" required></div><div class="from-group"><label for="age">Age</label><input type="date" name="age" class="form-control" required></div><div class="from-group"><label for="weight">Weight</label><input type="number" min="50" max="500" name="weight" class="form-control" required></div><div class="radio-inline"><div class="row"><div class="col-xs-6"><label><input type="radio" name="sex" value="male">Male</label></div><div class="col-xs-6"><label><input type="radio" name="sex" value="female">Female</label></div></div></div><br><button type="button" class="btn btn-success" id="update">Set/Update</button></form>';
		//this.render();
	},

	render: function(){
		this.$el.html(this.form);
	},

	/*updateYou: function(){
		var a = $('#name').val();
		console.log("Function Triggered: "+a);
	}*/

	createProfile: function(){
		var a = $('#name').val();
		console.log("Updated name: "+a);
		$('#name').setAttr('value', a);
	}
})