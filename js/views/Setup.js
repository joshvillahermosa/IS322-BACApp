var Setup =  Backbone.View.extend({
	el: '#load',

	events:{
		"click #agreement": "createProfileForm", 
		"click #create": "createProfile"
		//"onchange": "createProfile"
	},

	initialize: function(){
		this.intro = '<div class=""><h1><i>Pleasure begins with control</i></h1><h2>Blood Alcohol Content Diary (Temp Name: NJIT Wasted Meter) v0.8</h2></div><p>This will help calculate a rough estimate of your blood alcohol content while drinking. This app will give you real time updating BAC as each minute passes by. It will track you highest Blood Alcohol Content, time, and location when you are at a bar or enjoying a party. This app is in early beta and will not be completed for a while<b>PLEASE NOTE THIS IS NOT A SUBSTITUTE FOR A BREATHALYZER!</b> This does not calculate the most accurate BAC of your body, there are missing variables (such as food digested, personal metabolism rate, urination, etc) that prevents you giving the most accurate BAC. What we do is give you a estimate.</p><p><b>By clicking next, you agree that this app is not a substitute for a breathalyzer. You understand does not give you the most accurate BAC level and you understand that you must use your own judgment when performing actions while under the influence.</b></p><button id="agreement" class="btn btn-success">Yes, I agree. LETS DRINK!</button>';

		this.form = '<div class="" id="form1"><h2>Set your self up!</h2><div class="form-group"><label for="name">Name</label><input id="name" name="name" type="text" class="form-control" placeholder="Name" required></div><div class="form-group"><label for="email">Email</label><input id="email" name="email" type="text" class="form-control" placeholder="Email" required></div><div class="from-group"><label for="birthday">Birthday</label><input id="birthday" type="date" name="birthday" class="form-control" required></div><div class="from-group"><label for="weight">Weight</label><input id="weight" type="number" min="50" max="500" name="weight" class="form-control" required></div><div class="radio-inline"><div class="row"><div class="col-xs-6"><label><input type="radio" name="sex" value="0.73">Male</label></div><div class="col-xs-6"><label><input type="radio" name="sex" value="0.66">Female</label></div></div></div><br><!--<button class="btn btn-success" id="next">Next <i class="fa fa-arrow-right"></i></button>--></div><div class="" id="form2"><h2>Pick your drinks</h2><label>Beer Choice 1</label><select class="form-control" id="beer1"></select><label>Beer Choice 2</label><select class="form-control" id="beer2"></select><label>Beer Choice 3</label><select class="form-control" id="beer3"></select><label>Wine Choice 1</label><select class="form-control" id="wine1"></select><label>Wine Choice 2</label><select class="form-control" id="wine2"></select><label>Wine Choice 3</label><select class="form-control" id="wine3"></select><label>Liqour Choice 1</label><select class="form-control" id="hl1"></select><label>Liqour Choice 2</label><select class="form-control" id="hl2"></select><label>Liqour Choice 3</label><select class="form-control" id="hl3"></select><br><!--<button class="btn btn-success" id="prev">Next <i class="fa fa-arrow-left"></i></button>--><button type="button" class="btn btn-success" id="create">Set</button></div>';

		//this.render();
	},

	render: function(){
		$('#navis').attr('class', 'invisible');
		$('#notification').attr('class', 'invisible');
		this.$el.html(this.intro);
		
	},

	createProfileForm: function(){
		this.newSave = new People();
		this.$el.html(this.form);
		this.loadBar();
		this.populateList();
	},

	/*updateYou: function(){
		var a = $('#name').val();
		console.log("Function Triggered: "+a);
	}*/

	createProfile: function(){
		var bar = new Bar();
		bar.fetch();
		var name = $('#name').val();
		var email = $('#email').val();
		var birthday = $('#birthday').val();
		var weight = $('#weight').val();
		var genderBac = $('input[name="sex"]:checked').val();

		var beer = {
			"choice1": bar.where({"id": $('#beer1').val()}),
			"choice2": bar.where({"id": $('#beer2').val()}),
			"choice3": bar.where({"id": $('#beer3').val()}),
		};

		var wine = {
			"choice1": bar.where({"id": $('#wine1').val()}),
			"choice2": bar.where({"id": $('#wine2').val()}),
			"choice3": bar.where({"id": $('#wine3').val()}),
		};

		var hl = {
			"choice1": bar.where({"id": $('#hl1').val()}),
			"choice2": bar.where({"id": $('#hl2').val()}),
			"choice3": bar.where({"id": $('#hl3').val()}),
		};

		var personSetup = new Person({
			"firstTime": false,
			"name": name,
			"email": email,
			"genderBac": genderBac,
			"birthday": birthday,
			"weight": weight,
			"beer1": beer.choice1,
			"beer2": beer.choice2,
			"beer3": beer.choice3,
			"wine1": wine.choice1,
			"wine2": wine.choice2,
			"wine3": wine.choice3,
			"hl1": hl.choice1,
			"hl2": hl.choice2,
			"hl3": hl.choice3
		});

		this.newSave.add(personSetup);
		personSetup.save();

		location.reload();
	},

	populateList: function(){
		var bar = new Bar();
		bar.fetch();

		var beer = bar.where({"class": "beer"});
		var wine = bar.where({"class": "wine"});
		var hl = bar.where({"class": "hl"});
		console.log(beer);

		for(var i = 0; i < beer.length; i++){
			$('#beer1').append('<option value="'+beer[i].attributes.id+'"">'+beer[i].attributes.name+' - '+beer[i].attributes.alcoholContent+' -Ounces:'+beer[i].attributes.ounces+' -Time Consumption:'+beer[i].attributes.timeConsumption+'</option>');
			$('#beer2').append('<option value="'+beer[i].attributes.id+'"">'+beer[i].attributes.name+' - '+beer[i].attributes.alcoholContent+' -Ounces:'+beer[i].attributes.ounces+' -Time Consumption:'+beer[i].attributes.timeConsumption+'</option>');
			$('#beer3').append('<option value="'+beer[i].attributes.id+'"">'+beer[i].attributes.name+' - '+beer[i].attributes.alcoholContent+' -Ounces:'+beer[i].attributes.ounces+' -Time Consumption:'+beer[i].attributes.timeConsumption+'</option>');
		}
		for(var i = 0; i < wine.length; i++){
			$('#wine1').append('<option value="'+wine[i].attributes.id+'"">'+wine[i].attributes.name+' - '+wine[i].attributes.alcoholContent+' -Ounces:'+wine[i].attributes.ounces+' -Time Consumption:'+wine[i].attributes.timeConsumption+'</option>');
			$('#wine2').append('<option value="'+wine[i].attributes.id+'"">'+wine[i].attributes.name+' - '+wine[i].attributes.alcoholContent+' -Ounces:'+wine[i].attributes.ounces+' -Time Consumption:'+wine[i].attributes.timeConsumption+'</option>');
			$('#wine3').append('<option value="'+wine[i].attributes.id+'"">'+wine[i].attributes.name+' - '+wine[i].attributes.alcoholContent+' -Ounces:'+wine[i].attributes.ounces+' -Time Consumption:'+wine[i].attributes.timeConsumption+'</option>');
		}
		for(var i = 0; i < hl.length; i++){
			$('#hl1').append('<option value="'+hl[i].attributes.id+'"">'+hl[i].attributes.name+' - '+hl[i].attributes.alcoholContent+' -Ounces:'+hl[i].attributes.ounces+' -Time Consumption:'+hl[i].attributes.timeConsumption+'</option>');
			$('#hl2').append('<option value="'+hl[i].attributes.id+'"">'+hl[i].attributes.name+' - '+hl[i].attributes.alcoholContent+' -Ounces:'+hl[i].attributes.ounces+' -Time Consumption:'+hl[i].attributes.timeConsumption+'</option>');
			$('#hl3').append('<option value="'+hl[i].attributes.id+'"">'+hl[i].attributes.name+' - '+hl[i].attributes.alcoholContent+' -Ounces:'+hl[i].attributes.ounces+' -Time Consumption:'+hl[i].attributes.timeConsumption+'</option>');
		}

	},

	loadBar: function(){
		var newBar = new Bar();
		var alcohol = newBar.defaultAlcohol();

		var alcoholBeerLength = alcohol.beer.length;
		var alcoholWineLength = alcohol.wine.length;
		var alcoholHlLength = alcohol.hl.length;

		console.log('Loading Beer');

		for(var i = 0; i < alcoholBeerLength; i++){
			var beer = new Alcohol({
				"name": alcohol.beer[i].name,
				"alcoholContent": alcohol.beer[i].alcoholContent,
				"ounces": alcohol.beer[i].ounces,
				"timeConsumption":alcohol.beer[i].timeConsumption,
				"class": alcohol.beer[i].class
			});
			newBar.add(beer);
			beer.save()	
		}

		console.log('Finished Loading Beer');
		console.log('Loading Wine');

		for(var i = 0; i < alcoholWineLength; i++){
			var wine = new Alcohol({
				"name": alcohol.wine[i].name,
				"alcoholContent": alcohol.wine[i].alcoholContent,
				"ounces": alcohol.wine[i].ounces,
				"timeConsumption":alcohol.wine[i].timeConsumption,
				"class": alcohol.wine[i].class
			});
			newBar.add(wine);
			wine.save()	
		}

		console.log('Finished Loading Wine');
		console.log('Loading Hard Liquer');

		for(var i = 0; i < alcoholHlLength; i++){
			var hl = new Alcohol({
				"name": alcohol.hl[i].name,
				"alcoholContent": alcohol.hl[i].alcoholContent,
				"ounces": alcohol.hl[i].ounces,
				"timeConsumption":alcohol.hl[i].timeConsumption,
				"class": alcohol.hl[i].class
			});
			newBar.add(hl);
			hl.save()	
		}
		console.log('Finished Loading Hard Liquer');
	}
	//bar.fetch() // <--- Well get things in local storage
	//bar.where({"name": "Jack Daniels"}) <--- Is your selector
})