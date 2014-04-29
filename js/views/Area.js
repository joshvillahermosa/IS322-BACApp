var Area = Backbone.View.extend({
	el: '#load',

	initialize: function(){
		//this.getLocation();
		this.canvasId = 'map';
		this.area = '<h2>Area of BAC</h2><div id="'+this.canvasId+'"></div>';
	},

	render: function(){
		this.$el.html(this.area);
		//this.getLocation();
		this.createMap(this.lat, this.lng);
		//google.maps.event.addDomListener(window, 'load', this.createMap);
		
	},

	createMap: function(lat, lng){
		//var mlat = lat;
		//var mlong = lng;
		//alert(lat+' '+lng);
		var mapOptions = {
			center: new google.maps.LatLng(40.7430473, -74.1777488),
			//center: new google.maps.LatLng(mlat, mlng),
			zoom: 15
		}
		var map = new google.maps.Map(document.getElementById(this.canvasId), mapOptions);
	},

	getLocation: function(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(this.setLatLng);
		}else{
			alert('Either you have no internet connection or your browser is not supported');
		}
	},

	setLatLng: function(position){
		return this.lat = position.coords.latitude;
		return this.lng = position.coords.longitude;
		console.log(this.lat+' '+this.lng);
	},

	throwErr: function(){
		alert('Cannot get coords');
	}

});