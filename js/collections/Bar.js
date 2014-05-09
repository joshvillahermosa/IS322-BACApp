var Bar = Backbone.Collection.extend({
	model: Alcohol,
	localStorage: new Backbone.LocalStorage('Bar'),

	defaultAlcohol: function(){
		var alcohol = {
			beer: [],
			wine: [],
			hl:[]
		};

		alcohol.beer = [
			{
				"name": "Blue Moon",
				"alcoholContent": 0.054,
				"ounces": 12,
				"timeConsumption": 0.15,
				"class": "beer"
			},
			{
				"name": "Carona Extra",
				"alcoholContent": 0.046,
				"ounces": 12,
				"timeConsumption": 0.15,
				"class": "beer"
			},
			{
				"name": "Guinness Draught Bottle",
				"alcoholContent": 0.042,
				"ounces": 12,
				"timeConsumption": 0.15,
				"class": "beer"
			},
			{
				"name": "Big Eye IPA",
				"alcoholContent": 0.068,
				"ounces": 12,
				"timeConsumption": 0.15,
				"class": "beer"
			},
			{
				"name": "Dogfish Head 90 IPA",
				"alcoholContent": 0.09,
				"ounces": 12,
				"timeConsumption": 0.15,
				"class": "beer"
			},
			{
				"name": "Samual Adams Summer Ale",
				"alcoholContent": 0.053,
				"ounces": 12,
				"timeConsumption": 0.15,
				"class": "beer"
			},
			{
				"name": "Stella",
				"alcoholContent": 0.052,
				"ounces": 12,
				"timeConsumption": 0.15,
				"class": "beer"
			},
		];

		alcohol.wine = [
			{
				"name": "Wine Coolers",
				"alcoholContent": 0.07,
				"ounces": 5,
				"timeConsumption": 0.15,
				"class":"wine"
			},
			{
				"name": "Table General Wine",
				"alcoholContent": 0.14,
				"ounces": 5,
				"timeConsumption": 0.15,
				"class":"wine"
			},
			{
				"name": "Wine Coolers",
				"alcoholContent": 0.07,
				"ounces": 5,
				"timeConsumption": 0.15,
				"class":"wine"
			},
			{
				"name": "Claret",
				"alcoholContent": 0.1,
				"ounces": 5,
				"timeConsumption": 0.15,
				"class":"wine"
			},
			{
				"name": "Shiraz",
				"alcoholContent": 0.14,
				"ounces": 5,
				"timeConsumption": 0.15,
				"class":"wine"
			},
			{
				"name": "White, medium",
				"alcoholContent": 0.107,
				"ounces": 5,
				"timeConsumption": 0.15,
				"class":"wine"
			},
			{
				"name": "Red, medium",
				"alcoholContent": 0.115,
				"ounces": 5,
				"timeConsumption": 0.15,
				"class":"wine"
			},
			{
				"name": "Port Wine",
				"alcoholContent": 0.2,
				"ounces": 5,
				"timeConsumption": 0.15,
				"class":"wine"
			},
		];
		alcohol.hl = [
			{
				"name": "Johnny Walker Black",
				"alcoholContent": 0.4,
				"ounces": 3,
				"timeConsumption": 0.016,
				"class":"hl"
			},
			{
				"name": "Jack Daniels",
				"alcoholContent": 0.4,
				"ounces": 3,
				"timeConsumption": 0.016,
				"class":"hl"
			},
		];

		return alcohol;
	},
})

var bar = new Bar();