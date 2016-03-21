Schemas.Businesses = new SimpleSchema({

	owner: {
		type: Object,
		optional: true
	},
		'owner.id': {
			type: Object,
			optional: true
		},
			'owner.id.effectiveFrom': {
				type: Date,
				optional: true
			},
			'owner.id.effectiveTo': {
				type: Date,
				optional: true
			},
			'owner.id.imageFront': {
				type: String,
				optional: true
			},
			'owner.id.imageBack': {
				type: String,
				optional: true
			},
			'owner.id.type': {
				type: Object
			},
				'owner.id.type.typeId': {
					type: String,
					optional: true
				},
				'owner.id.type.typeName': {
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
	},
	businessDocument: {
		type: String,
		optional: true
	}
});

Businesses.attachSchema(Schemas.Businesses);