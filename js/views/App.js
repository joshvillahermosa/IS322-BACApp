var App =  Backbone.View.extend({
	el: '#load',

	events:{
		"click #agreement": "createProfileForm", 
		"click #create": "createProfile"
		//"onchange": "createProfile"
	},

	initialize: function(){
		this.intro = '<div class=""><h1><i>Pleasure begins with control</i></h1><h2>Blood Alcohol Content Diary (Temp Name: NJIT Wasted Meter) v0.8</h2></div><p>This will help calculate a rough estimate of your blood alcohol content while drinking. This app will give you real time updating BAC as each minute passes by. It will track you highest Blood Alcohol Content, time, and location when you are at a bar or enjoying a party. This app is in early beta and will not be completed for a while<b>PLEASE NOTE THIS IS NOT A SUBSTITUTE FOR A BREATHALYZER!</b> This does not calculate the most accurate BAC of your body, there are missing variables (such as food digested, personal metabolism rate, urination, etc) that prevents you giving the most accurate BAC. What we do is give you a estimate.</p><p><b>By clicking next, you agree that this app is not a substitute for a breathalyzer. You understand does not give you the most accurate BAC level and you understand that you must use your own judgment when performing actions while under the influence.</b></p><div class="well">You agreed to the terms of use of this app</div>';
	},
	render: function(){
		$('#notification').empty();
		this.$el.html(this.intro);
	}
})