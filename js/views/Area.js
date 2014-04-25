var Area = Backbone.View.extend({
	el: '#load',

	initialize: function(){
		this.canvasId = 'map';
		this.area = '<h2>Area of BAC</h2><div id="'+this.canvasId+'"></div>';

	},

	render: function(){
		this.$el.html(this.area);
		this.createMap();
		google.maps.event.addDomListener(window, 'load', this.createMap);
		
	},

	createMap: function(){
		var mapOptions = {
			center: new google.maps.LatLng(40.7430473, -74.1777488),
			zoom: 15
		}
		var map = new google.maps.Map(document.getElementById(this.canvasId), mapOptions);
	}

});