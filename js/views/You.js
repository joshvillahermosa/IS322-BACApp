var You =  Backbone.View.extend({
	el: '#load',

	events:{
		"click #update": "updateYou",
		//"click #next": "goNext",
		//"click #prev": "goPrev"
	},

	initialize: function(){
		this.people = new People();
		this.user = this.retrieveProfile();
		this.form = '<div class="" id="form1"><h2>Set your self up!</h2><div class="form-group"><label for="name">Name</label><input id="name" name="name" type="text" class="form-control" placeholder="Name" required></div><div class="form-group"><label for="email">Email</label><input id="email" name="email" type="text" class="form-control" placeholder="Email" required></div><div class="from-group"><label for="birthday">Birthday</label><input id="birthday" type="date" name="birthday" class="form-control" required></div><div class="from-group"><label for="weight">Weight</label><input id="weight" type="number" min="50" max="500" name="weight" class="form-control" required></div><div class="radio-inline"><div class="row"><div class="col-xs-6"><label><input type="radio" name="sex" value="0.73">Male</label></div><div class="col-xs-6"><label><input type="radio" name="sex" value="0.66">Female</label></div></div></div><br><!--<button class="btn btn-success" id="next">Next <i class="fa fa-arrow-right"></i></button>--></div><div class="" id="form2"><h2>Pick your drinks</h2><label>Beer Choice 1</label><select class="form-control" id="beer1"></select><label>Beer Choice 2</label><select class="form-control" id="beer2"></select><label>Beer Choice 3</label><select class="form-control" id="beer3"></select><label>Wine Choice 1</label><select class="form-control" id="wine1"></select><label>Wine Choice 2</label><select class="form-control" id="wine2"></select><label>Wine Choice 3</label><select class="form-control" id="wine3"></select><label>Liqour Choice 1</label><select class="form-control" id="hl1"></select><label>Liqour Choice 2</label><select class="form-control" id="hl2"></select><label>Liqour Choice 3</label><select class="form-control" id="hl3"></select><br><!--<button class="btn btn-success" id="prev">Next <i class="fa fa-arrow-left"></i></button>--><button type="button" class="btn btn-success" id="create">Update</button></div>';
		//this.render();
	},

	render: function(){
		this.$el.html(this.form);
		this.populateUserForm(this.user);
		this.populateList();
	},
	
	populateList: function(){
		var bar = new Bar();
		bar.fetch();

		var beer = bar.where({"class": "beer"});
		var wine = bar.where({"class": "wine"});
		var hl = bar.where({"class": "hl"});
		console.log(beer);

		for(var i = 0; i < beer.length; i++){
			$('#beer1').append('<option value="'+beer[i].attributes.alcoholContent+'"">'+beer[i].attributes.name+' - '+beer[i].attributes.alcoholContent+' -Ounces:'+beer[i].attributes.ounces+' -Time Consumption:'+beer[i].attributes.timeConsumption+'</option>');
			$('#beer2').append('<option value="'+beer[i].attributes.alcoholContent+'"">'+beer[i].attributes.name+' - '+beer[i].attributes.alcoholContent+' -Ounces:'+beer[i].attributes.ounces+' -Time Consumption:'+beer[i].attributes.timeConsumption+'</option>');
			$('#beer3').append('<option value="'+beer[i].attributes.alcoholContent+'"">'+beer[i].attributes.name+' - '+beer[i].attributes.alcoholContent+' -Ounces:'+beer[i].attributes.ounces+' -Time Consumption:'+beer[i].attributes.timeConsumption+'</option>');
		}
		for(var i = 0; i < wine.length; i++){
			$('#wine1').append('<option value="'+wine[i].attributes.alcoholContent+'"">'+wine[i].attributes.name+' - '+wine[i].attributes.alcoholContent+' -Ounces:'+wine[i].attributes.ounces+' -Time Consumption:'+wine[i].attributes.timeConsumption+'</option>');
			$('#wine2').append('<option value="'+wine[i].attributes.alcoholContent+'"">'+wine[i].attributes.name+' - '+wine[i].attributes.alcoholContent+' -Ounces:'+wine[i].attributes.ounces+' -Time Consumption:'+wine[i].attributes.timeConsumption+'</option>');
			$('#wine3').append('<option value="'+wine[i].attributes.alcoholContent+'"">'+wine[i].attributes.name+' - '+wine[i].attributes.alcoholContent+' -Ounces:'+wine[i].attributes.ounces+' -Time Consumption:'+wine[i].attributes.timeConsumption+'</option>');
		}
		for(var i = 0; i < hl.length; i++){
			$('#hl1').append('<option value="'+hl[i].attributes.alcoholContent+'"">'+hl[i].attributes.name+' - '+hl[i].attributes.alcoholContent+' -Ounces:'+hl[i].attributes.ounces+' -Time Consumption:'+hl[i].attributes.timeConsumption+'</option>');
			$('#hl2').append('<option value="'+hl[i].attributes.alcoholContent+'"">'+hl[i].attributes.name+' - '+hl[i].attributes.alcoholContent+' -Ounces:'+hl[i].attributes.ounces+' -Time Consumption:'+hl[i].attributes.timeConsumption+'</option>');
			$('#hl3').append('<option value="'+hl[i].attributes.alcoholContent+'"">'+hl[i].attributes.name+' - '+hl[i].attributes.alcoholContent+' -Ounces:'+hl[i].attributes.ounces+' -Time Consumption:'+hl[i].attributes.timeConsumption+'</option>');
		}

	},

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
});

var you = new You();