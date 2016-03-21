Schemas.CardModels = new SimpleSchema({
	
	name: {
		type: String,
		optional: true
	},
	status: {
		type: String,
		optional: true
	},
	description: {
		type: String,
		optional: true
	},
	help: {
		type: String,
		optional: true
	},
	businessId: {
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
	
	cardElements: {
		type: Object,
		optional: true
	},
		// backgrounds
		'cardElements.backgrounds': {
			type: [Object],
			optional: true
		},
			'cardElements.backgrounds.$.side': {
				type: String,
				optional: true	
			},
			'cardElements.backgrounds.$.style': {
				type: Object,
				optional: true
			},
		// texts
		'cardElements.texts': {
			type: [Object],
			optional: true
		},
			'cardElements.texts.$.id': {
				type: String,
				optional: true
			},
			'cardElements.texts.$.content': {
				type: String,
				optional: true
			},
			'cardElements.texts.$.url': {
				type: String,
				optional: true
			},
			'cardElements.texts.$.side': {
				type: String,
				optional: true
			},
			'cardElements.texts.$.style': {
				type: Object,
				optional: true
			},
		// images
		'cardElements.images': {
			type: [Object],
			optional: true			
		},
			'cardElements.images.$.id': {
				type: String,
				optional: true
			},
			'cardElements.images.$.url': {
				type: String,
				optional: true
			},
			'cardElements.images.$.side': {
				type: String,
				optional: true
			},
			'cardElements.images.$.style': {
				type: Object,
				optional: true
			},
		// fields
		'cardElements.fields': {
			type: [Object],
			optional: true
		},
			'cardElements.fields.$.id': {
				type: String,
				optional: true
			},
			'cardElements.fields.$.name': {
				type: String,
				optional: true
			},
			'cardElements.fields.$.placeholder': {
				type: String,
				optional: true
			},
			'cardElements.fields.$.field': {
				type: String,
				optional: true
			},
			'cardElements.fields.$.url': {
				type: String,
				optional: true
			},
			'cardElements.fields.$.side': {
				type: String,
				optional: true
			},
			'cardElements.fields.$.style': {
				type: Object,
				optional: true
			},
		// rules
		'cardElements.rules': {
			type: Object,
			optional: true
		},
			// stampGift
			'cardElements.rules.stampGift': {
				type: Object,
				optional: true
			},
				'cardElements.rules.stampGift.name': {
					type: String,
					optional: true
				},
				'cardElements.rules.stampGift.description': {
					type: String,
					optional: true
				},
				'cardElements.rules.stampGift.side': {
					type: String,
					optional: true
				},
				// stamps
				'cardElements.rules.stampGift.stamps': {
					type: Object,
					optional: true
				},
					'cardElements.rules.stampGift.stamps.rows': {
						type: Number,
						optional: true
					},
					'cardElements.rules.stampGift.stamps.columns': {
						type: Number,
						optional: true
					},
					'cardElements.rules.stampGift.stamps.image': {
						type: String,
						optional: true
					},					
					'cardElements.rules.stampGift.stamps.placeholderImage': {
						type: String,
						optional: true
					},					
					'cardElements.rules.stampGift.stamps.style': {
						type: Object,
						optional: true
					},
				// gifts
				'cardElements.rules.stampGift.gifts': {
					type: [Object],
					optional: true
				},
					'cardElements.rules.stampGift.gifts.$.id': {
						type: String,
						optional: true
					},
					'cardElements.rules.stampGift.gifts.$.stampsRequired': {
						type: Number,
						optional: true
					},
					'cardElements.rules.stampGift.gifts.$.name': {
						type: String,
						optional: true
					},
					'cardElements.rules.stampGift.gifts.$.description': {
						type: String,
						optional: true
					},
					'cardElements.rules.stampGift.gifts.$.image': {
						type: String,
						optional: true
					},
					'cardElements.rules.stampGift.gifts.$.placeholderImage': {
						type: String,
						optional: true
					},
				// transactionData
				'cardElements.rules.stampGift.transactionData': {
					type: Object,
					optional: true
				},
					// stampsAttained
					'cardElements.rules.stampGift.transactionData.stampsAttained': {
						type: Object,
						optional: true
					},
						'cardElements.rules.stampGift.transactionData.stampsAttained.defaultValue': {
							type: Number,
							optional: true
						},
						'cardElements.rules.stampGift.transactionData.stampsAttained.editable': {
							type: Boolean,
							optional: true
						},
					// stampsUsed
					'cardElements.rules.stampGift.transactionData.stampsUsed': {
						type: Object,
						optional: true
					},
						'cardElements.rules.stampGift.transactionData.stampsUsed.defaultValue': {
							type: Number,
							optional: true
						},
						'cardElements.rules.stampGift.transactionData.stampsUsed.editable': {
							type: Boolean,
							optional: true
						},
					// giftsClaimed
					'cardElements.rules.stampGift.transactionData.giftsClaimed': {
						type: Object,
						optional: true
					},
						'cardElements.rules.stampGift.transactionData.giftsClaimed.defaultValue': {
							type: Number,
							optional: true
						},
						'cardElements.rules.stampGift.transactionData.giftsClaimed.editable': {
							type: Boolean,
							optional: true
						},
				// transactions
				'cardElements.rules.stampGift.transactions': {
					type: Object,
					optional: true
				},
					// issueStamp
					'cardElements.rules.stampGift.transactions.issueStamp': {
						type: Object,
						optional: true
					},
						'cardElements.rules.stampGift.transactions.issueStamp.permission': {
							type: String,
							optional: true
						},
						'cardElements.rules.stampGift.transactions.issueStamp.logic': {
							type: String,
							optional: true
						},
					// revokeStamp
					'cardElements.rules.stampGift.transactions.revokeStamp': {
						type: Object,
						optional: true
					},
						'cardElements.rules.stampGift.transactions.revokeStamp.permission': {
							type: String,
							optional: true
						},
						'cardElements.rules.stampGift.transactions.revokeStamp.logic': {
							type: String,
							optional: true
						},
					// issueGift
					'cardElements.rules.stampGift.transactions.issueGift': {
						type: Object,
						optional: true
					},
						'cardElements.rules.stampGift.transactions.issueGift.permission': {
							type: String,
							optional: true
						},
						'cardElements.rules.stampGift.transactions.issueGift.logic': {
							type: String,
							optional: true
						},
					// revokeGift
					'cardElements.rules.stampGift.transactions.revokeGift': {
						type: Object,
						optional: true
					},
						'cardElements.rules.stampGift.transactions.revokeGift.permission': {
							type: String,
							optional: true
						},
						'cardElements.rules.stampGift.transactions.revokeGift.logic': {
							type: String,
							optional: true
						},
			// startDate
			'cardElements.rules.startDate': {
				type: Object,
				optional: true
			},
				'cardElements.rules.startDate.name': {
					type: String,
					optional: true
				},
				'cardElements.rules.startDate.side': {
					type: String,
					optional: true
				},
				'cardElements.rules.startDate.style': {
					type: Object,
					optional: true
				},
				'cardElements.rules.startDate.dateFormat': {
					type: String,
					optional: true
				},
				// dataFields
				'cardElements.rules.startDate.dataFields': {
					type: Object,
					optional: true
				},
					// date
					'cardElements.rules.startDate.dataFields.date': {
						type: Object,
						optional: true
					},
						'cardElements.rules.startDate.dataFields.date.defaultValue': {
							type: String,
							optional: true
						},
						'cardElements.rules.startDate.dataFields.date.editable': {
							type: Boolean,
							optional: true
						},
			// endDate
			'cardElements.rules.endDate': {
				type: Object,
				optional: true
			},
				'cardElements.rules.endDate.name': {
					type: String,
					optional: true
				},
				'cardElements.rules.endDate.side': {
					type: String,
					optional: true
				},
				'cardElements.rules.endDate.style': {
					type: Object,
					optional: true
				},
				'cardElements.rules.endDate.dateFormat': {
					type: String,
					optional: true
				},
				// dataFields
				'cardElements.rules.endDate.dataFields': {
					type: Object,
					optional: true
				},
					// date
					'cardElements.rules.endDate.dataFields.date': {
						type: Object,
						optional: true
					},
						'cardElements.rules.endDate.dataFields.date.defaultValue': {
							type: String,
							optional: true
						},
						'cardElements.rules.endDate.dataFields.date.editable': {
							type: Boolean,
							optional: true
						},
});

CardModels.attachSchema(Schemas.CardModels);