var Stats =  Backbone.View.extend({
	el: '#load',

	initialize: function(){
		this.stats= '<h2>Stats</h2><canvas id="chart" width="300" height="300"></canvas>';
		this.table = '<table class="table table-striped"><thead><tr><th>Highest BAC</th><th>Date(Y-M-D)</th></tr></thead><tbody id="records"></tbody></table>';
	},

	render: function(){
		$('#notification').empty();
		this.user = you.retrieveProfile();
		this.$el.html(this.stats+''+this.table);
		this.chartGenerate();
		this.populateTable();
	},

	chartGenerate: function(){
		var bacData = this.stringDateAndBac();

		if(bacData.bacLevel.length <= 2){
			$('#notification').append('<h5 class="text-primary">Not enough data to create chart</h5>');
		}else{
			$('#notification').empty();
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

			var options = {
					scaleFontSize : 9
			}

			var ctx = $("#chart").get(0).getContext("2d");
			new Chart(ctx).Bar(data, options);			
		}

	},

	populateTable: function(){
		$('#records').empty(); 
		var userBacRecord = this.user.BACLevels.length - 1;

		if(this.user.BACLevels.length == 0){
			$('#records').append('<tr><td colspan="2">No data</td></tr>');
		}else{
			for(var i = userBacRecord; i >= 0; i--){
				$('#records').append('<tr><td>'+this.user.BACLevels[i].bacLevelHigh+'</td><td>'+this.user.BACLevels[i].date+'</td></tr>');
			}
		}
	},

	stringDateAndBac: function(){
		var userBacRecord = this.user.BACLevels.length - 1;
		var bacRecord = {bacLevel: [], date: []};

		/*if(userBacRecord <= 5){
			for(var i = userBacRecord; i >= 0; i--){
				bacRecord.bacLevel[i] = this.user.BACLevels[i].bacLevelHigh;
				bacRecord.date[i] = this.user.BACLevels[i].date;
			}
		}else if(userBacRecord <= 5){ //Gets 5 latest records 
			for(var i = userBacRecord; i >= (5-userBacRecord); i--){
				bacRecord.bacLevel[i] = this.user.BACLevels[i].bacLevelHigh;
				bacRecord.date[i] = this.user.BACLevels[i].date;
			}
		}
		else{
			console.log('Cannot retrieve data');
			alert('Cannot retrieve data');
		}*/
		var bacRecord = {bacLevel: [], date: []};
		for(var i = userBacRecord; i >= 0; i--){
			bacRecord.bacLevel[i] = this.user.BACLevels[i].bacLevelHigh;
			bacRecord.date[i] = this.user.BACLevels[i].date;
		}
		return bacRecord;
	}
});

var stats = new Stats();