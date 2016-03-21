Meteor.publish('businesses', function () {
	if (! this.userId) return;
	return Businesses.find();
});