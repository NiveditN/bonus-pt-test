Schemas.Businesses = new SimpleSchema({

	ownerId: {
		type: Object,
		optional: true
	},
		'ownerId.effectiveFrom': {
			type: Date,
			optional: true
		},
		'ownerId.effectiveTo': {
			type: Date,
			optional: true
		},
		'ownerId.image1': {
			type: String,
			optional: true
		},
		'ownerId.image2': {
			type: String,
			optional: true
		},
		'ownerId.type': {
			type: Object
		},
			'ownerId.type.typeId': {
				type: String,
				optional: true
			},
			'ownerId.type.typeName': {
				type: String,
				optional: true
			},
	established: {
		type: Date,
		optional: true
	},
	businessLicense: {
		type: Object
	},
		'businessLicense.number': {
			type: String,
			optional: true
		},
			'businessLicense.effectiveFrom': {
				type: Date,
				optional: true
			},
			'businessLicense.effectiveTo':{
				type: Date,
				optional: true
			},
		'businessLicense.image': {
			type: String,
			optional: true
		},
	
	balance: {
		type: String,
		optional: true
	},
	subscription: {
		type: Object,
		optional: true
	},
		'subscription.startDate': {
			type: Date,
			optional: true
		},
		'subscription.endDate': {
			type: Date,
			optional: true
		},

	address: {
		type: Object
	},
		'address.state': {
			type: String,
			optional: true
		},
		'address.city': {
			type: String,
			optional: true
		},
		'address.line1': {
			type: String,
			optional: true
		},
		'address.line2': {
			type: String,
			optional: true
		},
		'address.postalCode': {
			type: String,
			optional: true
		},
		'address.country': {
			type: String,
			optional: true
		},
		'address.countryCode': {
			type: String,
			optional: true
		},

		'address.stateLocal': {
			type: String,
			optional: true
		},
		'address.cityLocal': {
			type: String,
			optional: true
		},
		'address.countryLocal': {
			type: String,
			optional: true
		},
		'address.line1Local': {
			type: String,
			optional: true
		},
		'address.line2Local':{
			type: String,
			optional: true		
		},

	status: {
		type: String,
		optional: true
	},
    createdAt: {
        type: Date,
	    optional:true
    },
	updatedAt: {
		type: Date,
		optional:true
	}
});

Businesses.attachSchema(Schemas.Businesses);