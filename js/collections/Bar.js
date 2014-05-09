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
				"timeConsumption": 0.15
			},
			{
				"name": "Carona Extra",
				"alcoholContent": 0.046,
				"ounces": 12,
				"timeConsumption": 0.15
			},
			{
				"name": "Guinness Draught Bottle",
				"alcoholContent": 0.042,
				"ounces": 12,
				"timeConsumption": 0.15
			},
			{
				"name": "Big Eye IPA",
				"alcoholContent": 0.068,
				"ounces": 12,
				"timeConsumption": 0.15
			},
			{
				"name": "Dogfish Head 90 IPA",
				"alcoholContent": 0.09,
				"ounces": 12,
				"timeConsumption": 0.15
			},
			{
				"name": "Samual Adams Summer Ale",
				"alcoholContent": 0.053,
				"ounces": 12,
				"timeConsumption": 0.15
			},
			{
				"name": "Stella",
				"alcoholContent": 0.052,
				"ounces": 12,
				"timeConsumption": 0.15
			},
		];

		alcohol.wine = [
			{
				"name": "Wine Coolers",
				"alcoholContent": 0.07,
				"ounces": 5,
				"timeConsumption": 0.15
			},
			{
				"name": "Table General Wine",
				"alcoholContent": 0.14,
				"ounces": 5,
				"timeConsumption": 0.15
			},
			{
				"name": "Wine Coolers",
				"alcoholContent": 0.07,
				"ounces": 5,
				"timeConsumption": 0.15
			},
			{
				"name": "Claret",
				"alcoholContent": 0.1,
				"ounces": 5,
				"timeConsumption": 0.15
			},
			{
				"name": "Shiraz",
				"alcoholContent": 0.14,
				"ounces": 5,
				"timeConsumption": 0.15
			},
			{
				"name": "White, medium",
				"alcoholContent": 0.107,
				"ounces": 5,
				"timeConsumption": 0.15
			},
			{
				"name": "Red, medium",
				"alcoholContent": 0.115,
				"ounces": 5,
				"timeConsumption": 0.15
			},
			{
				"name": "Port Wine",
				"alcoholContent": 0.2,
				"ounces": 5,
				"timeConsumption": 0.15
			},
		];
		alcohol.hl = [
			{
				"name": "Johnny Walker Black",
				"alcoholContent": 0.4,
				"ounces": 3,
				"timeConsumption": 0.016
			},
			{
				"name": "Jack Daniels",
				"alcoholContent": 0.4,
				"ounces": 3,
				"timeConsumption": 0.016
			},
		];

		return alcohol;
	},
})

var bar = new Bar();