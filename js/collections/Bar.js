var Bar = Backbone.Collection.extend({
	model: Alcohol,
	localStorage: new Backbone.LocalStorage('Bar')
})