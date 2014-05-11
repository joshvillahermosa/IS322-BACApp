var Area = Backbone.View.extend({
	el: '#load',

	initialize: function(){
		//this.getLocation();
		this.canvasId = 'map';
		this.area = '<h2>Area of BAC</h2><div id="'+this.canvasId+'"></div>';
		google.maps.event.addDomListener(window, 'load', this);
		window.lat = 0;
		window.lng = 0;
	},

	render: function(){
		this.$el.html(this.area);
		this.createMap();
		this.getCurrentLocation();
		console.log('Check location: '+window.lat+' : '+window.lng);
		//Does not store local
		
	},

	createMap: function(lat, lng){
		//var mlat = lat;
		//var mlong = lng;
		//alert(lat+' '+lng);
		var mapOptions = {
			//center: new google.maps.LatLng(40.7430473, -74.1777488),
			center: new google.maps.LatLng(lat, lng),
			zoom: 15
		}
		var map = new google.maps.Map(document.getElementById(this.canvasId), mapOptions);
	},

	getCurrentLocation: function(){
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
	}


})

var area = new Area()