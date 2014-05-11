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


})

var area = new Area()