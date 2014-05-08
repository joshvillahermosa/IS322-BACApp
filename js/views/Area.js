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
		var loc = {"lat": 0, "lng":0};
		if(navigator.geolocation){
			loc = navigator.geolocation.getCurrentPosition(this.setLatLng);
			/*navigator.geolocation.getCurrentPosition(function(position){
				var location = {"lat": 0, "lng":0};
				location.lat = position.coords.latitude;
				location.lng = position.coords.longitude;
				return location;
			});*/
		}else{
			alert('Either you have no internet connection or your browser is not supported');
		}
		console.log(loc.lat+' '+loc.lng);
	},

	setLatLng: function(position){
		var setLoc = {"lat": 0, "lng":0};
		console.log('Test - setLatLng');
		setLoc.lat = position.coords.latitude;
		console.log('Test - setLatLng-lat');
		setLoc.lng = position.coords.longitude;
		console.log('Test - setLatLng-lng');
		console.log(setLoc.lat+' '+setLoc.lng);
		return setLoc;
	},

	throwErr: function(){
		alert('Cannot get coords');
	}

})

var area = new Area()