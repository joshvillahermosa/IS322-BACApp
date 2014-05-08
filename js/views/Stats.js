var Stats =  Backbone.View.extend({
	el: '#load',

	initialize: function(){
		this.stats= '<h2>Stats</h2><canvas id="chart" width="300" height="300"></canvas>';
		this.table = '<table class="table-striped "><thead><tr><th>Date</th><th>Highest BAC</th></tr></thead><tbody id="records"></tbody></table>';
	},

	render: function(){
		this.user = you.retrieveProfile();
		this.$el.html(this.stats+''+this.table);
		this.chartGenerate();
		this.populateTable();
	},

	chartGenerate: function(){
		var bacData = this.stringDateAndBac();

		var data = {
			labels: bacData.date,
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,1)",
					data : bacData.bacLevel
					//data: [0.0245,0.0645,0.0545]					
				}
			]
		}

		var ctx = $("#chart").get(0).getContext("2d");
		new Chart(ctx).Bar(data);

		console.log(bacData.bacLevel);
	},

	populateTable: function(){
		$('#records').empty(); 
		var userBacRecord = this.user.BACLevels.length - 1;

		for(var i = userBacRecord; i >= 0; i--){
			$('#records').append('<tr><td>'+this.user.BACLevels[i].bacLevelHigh+' -</td><td>'+this.user.BACLevels[i].date+'</td></tr>');
		}
	},

	stringDateAndBac: function(){
		var userBacRecord = this.user.BACLevels.length - 1;
		var bacRecord = {bacLevel: [], date: []};
		for(var i = userBacRecord; i >= 0; i--){
			bacRecord.bacLevel[i] = this.user.BACLevels[i].bacLevelHigh;
			bacRecord.date[i] = this.user.BACLevels[i].date;
		}
		return bacRecord;
	}
});

var stats = new Stats();