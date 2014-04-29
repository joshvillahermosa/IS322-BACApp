var Area = Backbone.View.extend({
	el: '#load',

	initialize: function(){
		//this.getLocation();
		this.canvasId = 'map';
		this.area = '<h2>Area of BAC</h2><div id="'+this.canvasId+'"></div>';
	},

	render: function(){
		this.$el.html(this.area);
		this.getLocation();
		console.log(this.lat+' '+this.lng+' - Confirmed');
		this.createMap(this.lat, this.lng);
		//google.maps.event.addDomListener(window, 'load', this.createMap);
		
	},

	createMap: function(lat, lng){
		//var mlat = lat;
		//var mlong = lng;
		//alert(lat+' '+lng);
		var mapOptions = {
			center: new google.maps.LatLng(40.7430473, -74.1777488),
			//center: new google.maps.LatLng(lat, lng),
			zoom: 15
		}
		var map = new google.maps.Map(document.getElementById(this.canvasId), mapOptions);
	},

	getLocation: function(){
		var self = this;
		console.log('Test - getGeolocation');
		if(navigator.geolocation){
			//navigator.geolocation.getCurrentPosition(this.setLatLng);
			navigator.geolocation.getCurrentPosition(function(position){
				this.lat = position.coords.latitude;
				this.lng = position.coords.longitude;
			});
		}else{
			alert('Either you have no internet connection or your browser is not supported');
		}
	},

	setLatLng: function(position){
		console.log('Test - setLatLng');
		return this.lat = position.coords.latitude;
		console.log('Test - setLatLng-lat');
		return this.lng = position.coords.longitude;
		console.log('Test - setLatLng-lng');
		console.log(this.lat+' '+this.lng);
	},

	throwErr: function(){
		alert('Cannot get coords');
	}

});