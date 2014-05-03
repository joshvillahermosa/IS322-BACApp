var People = Backbone.Collection.extend({
	model: Person,
	localStorage: new Backbone.LocalStorage('BAC-People')
})