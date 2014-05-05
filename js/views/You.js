var You =  Backbone.View.extend({
	el: '#load',

	events:{
		//"click #update": "updateYou"
		"onchange": "updateName"
	},

	initialize: function(){
		this.form = '<form role="form"><div class="form-group"><label for="name">Name</label><input id="name" name="name" type="text" class="form-control" placeholder="Name" required></div><div class="form-group"><label for="email">Email</label><input id="email" name="email" type="text" class="form-control" placeholder="Email" required></div><div class="from-group"><label for="age">Age</label><input id=""age type="date" name="age" class="form-control" required ></div><div class="from-group"><label for="weight">Weight</label><input id="weight" type="number" min="50" max="500" name="weight" class="form-control" required></div><div class="radio-inline"><div class="row"><div class="col-xs-6"><label><input type="radio" name="sex" value="0.73">Male</label></div><div class="col-xs-6"><label><input type="radio" name="sex" value="0.66">Female</label></div></div></div><br><button type="button" class="btn btn-success" id="update">Set/Update</button></form>';
		//this.render();
	},

	render: function(){
		this.$el.html(this.form);
	},

	/*updateYou: function(){
		var a = $('#name').val();
		console.log("Function Triggered: "+a);
	}*/

	updateName: function(){
		var a = $('#name').val();
		console.log("Updated name: "+a);
		$('#name').setAttr('value', a);
	}
})