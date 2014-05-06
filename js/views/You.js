var You =  Backbone.View.extend({
	el: '#load',

	events:{
		"click #update": "updateYou"
		//"onchange": "updateName"
	},

	initialize: function(){
		this.people = new People();
		this.user = this.retrieveProfile();
		this.form = '<form role="form"><div class="form-group"><label for="name">Name</label><input id="name" name="name" type="text" class="form-control" placeholder="Name" required></div><div class="form-group"><label for="email">Email</label><input id="email" name="email" type="text" class="form-control" placeholder="Email" required></div><div class="from-group"><label for="birthday">Birthday</label><input id="birthday" type="date" name="birthday" class="form-control" required ></div><div class="from-group"><label for="weight">Weight</label><input id="weight" type="number" min="50" max="500" name="weight" class="form-control" required></div><div class="radio-inline"><div class="row"><div class="col-xs-6"><label><input type="radio" name="sex" value="0.73">Male</label></div><div class="col-xs-6"><label><input type="radio" name="sex" value="0.66">Female</label></div></div></div><br><button type="button" class="btn btn-success" id="update">Update</button></form>';
		//this.render();
	},

	render: function(){
		this.$el.html(this.form);
		this.populateUserForm(this.user);
	},

	/*updateYou: function(){
		var a = $('#name').val();
		console.log("Function Triggered: "+a);
	}*/

	retrieveProfile: function(){
			var userId = this.people.localStorage.records[0];
			console.log('User ID detected -- searching profile');
			return this.people.localStorage.find({"id": userId});
			//console.log('User profile found: ');
			//this.user = console.log(this.people.localStorage.find({"id": userId}));
			//return this.user;
	},

	updateYou: function(){
		
	},

	populateUserForm: function(user){
		$('#name').attr('value', user.name);
		$('#email').attr('value', user.email);
		$('#birthday').attr('value', user.birthday);
		$('#weight').attr('value', user.weight);
		//Needs to find a way to enable user selected radio button
	}
})