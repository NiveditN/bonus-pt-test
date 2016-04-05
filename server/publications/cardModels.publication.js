Meteor.publish('cardModels', function() {
	return CardModels.find({});
});