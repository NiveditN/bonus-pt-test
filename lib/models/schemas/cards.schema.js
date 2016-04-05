/*Schemas.Cards = new SimpleSchema({

	userId: {
		type: String,
		optional: true
	},
	cardModelId: {
		type: String,
		optional: true
	},
	code: {
		type: String,
		optional: true
	},
	status: {
		type: String,
		optional: true
	},
	createdOn: {
		type: Date,
		optional: true
	},
	updatedOn: {
		type: Date,
		optional: true
	},
	
	// cardData ---- (This will be updated later to include Schema level validation)
	cardData: {
		type: Object,
		optional: true
	},
		'cardData.redeemedStamps': {
			type: Number,
			optional: true
		},
		'cardData.redeemedGifts': {
			type: Number,
			optional: true
		},
		// fields
		'cardData.fields': {
			type: Object,
			optional: true
		},
			'cardData.fields.shopData': {
				type: Object,
				optional: true
			},
			'cardData.fields.customerData': {
				type: Object,
				optional: true
			},
			'cardData.fields.vendorData': {
				type: Object,
				optional: true
			}
});

Cards.attachSchema(Schemas.Cards);
*/