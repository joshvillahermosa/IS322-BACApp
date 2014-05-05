var People = Backbone.Collection.extend({
	model: Person,
	localStorage: new Backbone.LocalStorage('BACPeople')
})

var people = new People();