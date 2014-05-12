var Area = Backbone.View.extend({
	el: '#load',

	events: {
		'click .loadMap': 'loadNewMap'
	},

	initialize: function(){
		//this.getLocation();
		this.getCurrentLocation();
		this.canvasId = 'map';
		this.area = '<h2>Area of BAC</h2><div id="'+this.canvasId+'"></div>';
		this.table = '<table class="table table-striped"><thead><tr><th>Highest BAC</th><th>Date(Y-M-D)</th></tr></thead><tbody id="records"></tbody></table>';
		google.maps.event.addDomListener(window, 'load', this);
		window.lat = 0;
		window.lng = 0;
	},

	render: function(){
		$('#notification').empty();
		this.user = you.retrieveProfile();
		this.$el.html(this.area+this.table);
		this.createMap();
		this.populateTable();
		this.getCurrentLocationMap();
		console.log('Check location: '+window.lat+' : '+window.lng);
		//Does not store local
		
	},

	createMap: function(lat, lng){
		//var mlat = lat;
		//var mlong = lng;
		//alert(lat+' '+lng);
		console.log('Input coords: '+lat+' - '+lng);
		var glatlng = new google.maps.LatLng(lat, lng);
		var mapOptions = {
			//center: new google.maps.LatLng(40.7430473, -74.1777488),
			center: new google.maps.LatLng(lat, lng),
			//center: new google.maps.LatLng(window.glatlng),
			zoom: 15
		}
		window.gmap = new google.maps.Map(document.getElementById(this.canvasId), mapOptions);	
		this.createMarker(glatlng);
	},

	createMarker: function(glatlng){
		window.gmarker = new google.maps.Marker({
		    position: glatlng,
		    map: window.gmap,
		    title:"Hello World!"
		});	
	},

	getCurrentLocationMap: function(){
		$('#'+this.canvasId).empty();
		if (navigator.geolocation){
		    navigator.geolocation.getCurrentPosition(function(position){
		    	console.log('Getting current location....');
		    	window.lat = position.coords.latitude;
		    	window.lng = position.coords.longitude;

		    	console.log('...Location found: '+window.lat+' : '+window.lng);

		    	this.createMap(window.lat, window.lng);
		    }.bind(this));
		}else{
			alert('Please turn on GPS');
		}
	},

	loadNewMap: function(){
		$('#'+this.canvasId).empty();
		var lat = $(event.target).attr('lat');
		var lng = $(event.target).attr('lng');
		this.createMap(lat, lng);
	},

	getCurrentLocation: function(){
		if (navigator.geolocation){
		    navigator.geolocation.getCurrentPosition(function(position){
		    	console.log('Getting current location....');
		    	var loc = {
		    		lat: 0,
		    		lng: 0
		    	};
		    	window.lat = position.coords.latitude;
		    	window.lng = position.coords.longitude;
		    	loc.lat = position.coords.latitude;
		    	loc.lng = position.coords.longitude;
		    	console.log('...Location found: '+window.lat+' : '+window.lng);
		    	return loc;
		    }.bind(this));
		}else{
			alert('Please turn on GPS');
		}
	},

	populateTable: function(){
		$('#records').empty(); 
		var userBacRecord = this.user.BACLevels.length - 1;

		if(this.user.BACLevels.length == 0){
			$('#records').append('<tr><td colspan="2">No data</td></tr>');
		}else{

			for(var i = userBacRecord; i >= 0; i--){
				$('#records').append('<tr><td><a class="loadMap text-primary"  lat="'+this.user.BACLevels[i].lat+'" lng="'+this.user.BACLevels[i].lng+'">'+this.user.BACLevels[i].bacLevelHigh+'</a></td><td>'+this.user.BACLevels[i].date+'</td></tr>');
			}
		}
	}
});

var area = new Area()