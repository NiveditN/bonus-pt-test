Schemas.Shops = new SimpleSchema({

	name: {
		type: String,
		optional: true
	},
	ownerName: {
		type: String,
		optional: true
	},
	businessId: {
		type: String,
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

Shops.attachSchema(Schemas.Shops);