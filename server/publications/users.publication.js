Meteor.publish('users', function () {
	// if (! this.userId) return;
	return Meteor.users.find({}, { fields: { profile: 1 } });
});