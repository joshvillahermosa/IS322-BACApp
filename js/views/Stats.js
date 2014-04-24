var Stats =  Backbone.View.extend({
	el: '#load',

	initialize: function(){
		this.stats= '<h2>Stats</h2><canvas id="chart" width="300" height="300"></canvas>';
	},

	render: function(){
		this.$el.html(this.stats);
		this.chartGenerate();
	},

	chartGenerate: function(){

		var data = {
			labels: ["Monday", "Tuesday", "Wednesday"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					data : [1.5,2.3,1.6]
				}
			]
		}

		var ctx = $("#chart").get(0).getContext("2d");
		new Chart(ctx).Bar(data);
	}

});