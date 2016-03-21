Meteor.publish("shopsByBusinessId", function(businessId){
	if (! this.userId) return;
    return Shops.find({ businessId: businessId });
});

Meteor.publishComposite('shops', function () {
	if (! this.userId) return;

	return {
		find() {
			return Meteor.users.find({ _id: this.userId });
		},
		children: [
		{
			find(user) {
				console.log(user);
				return Shops.find({ businessId: user.profile.businessId });
			}
		}
		// ,{
		// 	find(user) {
		// 		let query = { _id: this.userId };
		// 		let options = { fields: { profile: 1 } };

		// 		return Meteor.users.find(query, options);
		// 	}
		// }
		]
	};
});
