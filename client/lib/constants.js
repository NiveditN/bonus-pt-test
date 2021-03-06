angular.module('bonuspoint').constant('BUSINESS_CONSTANTS', {
	countries: [{ id: 1, name: 'Hong Kong' }, { id: 2, name: 'China' }],
	ownerIdTypes: [{ id: 1, name: 'Government ID' }, { id: 2, name: 'Other ID' }],
	salutations: [{ id: 1, name: 'Mr.' }, { id: 2, name: 'Ms.' }, { id: 3, name: 'Mrs.' }],
	securityQuestions: [
		{ id: 1, content: 'Which street did you grow up on?' }, 
		{ id: 2, content: 'What is your favorite color?' }
	]
});

angular.module('bonuspoint').constant('CARD_CONSTANTS', {
	card: {
		_id: '',
		cardModelId: '',
		userId: 'txFRjDLYsEK4hFWWN',
		businessId: '',
		data: {
			stampGift: {
				stampsAttained: 5,
				giftsClaimed: 1,
			},
			startDate: '03-01-2016',
			endDate: '03-01-2019',
		},
		createdOn: '03-01-2016',
		updatedOn: '03-01-2016',
		status: 'active'
	},
	cardModel: {
		"_id": "",
		"name": "First Card",
		"isActive": true,
		"description": "",
		"help": "'url'",
		"businessId": "",
		"rules": {
			"stampGift": {
				"side": false,
				"description": "",
				"rows": 2,
				"columns": 4,
				"stamp": {
					"image": "/images/stamp.png",
					"placeholder": "/images/stamp_plc.png"
				},
				"style": {
					"left": "5%",
					"top": "5%",
					"z-index": "90",
					"height": "90%",
					"width": "90%"
				},
				"gifts": [{
					"stampsRequired": 4,
					"name": "Free Drink",
					"description": "",
					"image": "",
					"placeholderImage": ""
				}, {
					"stampsRequired": 8,
					"name": "Free Ramen",
					"description": "",
					"image": "",
					"placeholderImage": ""
				}],
				"transactionData": {
					"stampsAttained": {
						"defaultValue": 0,
						"editable": false
					},
					"stampsUsed": {
						"defaultValue": 0,
						"editable": false
					},
					"giftsClaimed": {
						"defaultValue": 0,
						"editable": false
					}
				},
				"transactions": {
					"issueStamp": {
						"permission": "issue-stamp",
						"logic": "stampsAttained+=1"
					},
					"revokeStamp": {
						"permission": "revoke-stamp",
						"logic": "stampsAttained-=1"
					},
					"issueGift": {
						"permission": "issue-gift",
						"logic": "giftsClaimed+=1"
					},
					"revokeGift": {
						"permission": "revoke-gift",
						"logic": "giftsClaimed-=1"
					}
				}
			},
			"startDate": {
				"side": false,
				"style": {
					"left": "5%",
					"top": "75%",
					"z-index": "65",
					"height": "10%",
					"width": "50%",
					"font-family": "Arial",
					"font-size": "100%",
					"color": "#000000",
					"font-weight": "bold",
					"font-style": "normal"
				},
				"dataFields": {
					"date": {
						"defaultValue": "today",
						"editable": true
					}
				}
			},
			"endDate": {
				"side": false,
				"style": {
					"left": "5%",
					"top": "85%",
					"z-index": "65",
					"height": "10%",
					"width": "50%",
					"font-family": "Arial",
					"font-size": "100%",
					"color": "#000000",
					"font-weight": "bold",
					"font-style": "normal"
				},
				"dataFields": {
					"date": {
						"defaultValue": "today",
						"editable": true
					}
				}
			}
		},
		"background": [{
			"side": true,
			"style": {
				"background-color": "skyblue",
				"background-image": "url('smiley.gif')",
				"background-repeat": "no-repeat",
				"background-attachment": "fixed",
				"background-position": "30% 20%"
			}
		}, {
			"side": false,
			"style": {
				"background-color": "lightsalmon",
				"background-image": "url('smiley.gif')",
				"background-repeat": "no-repeat",
				"background-attachment": "fixed",
				"background-position": "30% 20%"
			}
		}],
		"texts": [{
			"side": true,
			"content": "This is some text",
			"url": "",
			"style": {
				"left": "20%",
				"top": "20%",
				"z-index": "56",
				"height": "10%",
				"width": "30%",
				"font-family": "Arial",
				"font-size": "100%",
				"color": "#000000",
				"font-weight": "bold",
				"font-style": "normal"
			}
		},
		{
			"side": true,
			"content": "This is some text too.",
			"url": "",
			"style": {
				"left": "30%",
				"top": "30%",
				"z-index": "56",
				"height": "10%",
				"width": "20%",
				"font-family": "Arial",
				"font-size": "100%",
				"color": "red",
				"font-weight": "bold",
				"font-style": "oblique"
			}
		}],
		"images": [{
			"side": true,
			"source": "/images/stamp.png",
			"url": "http://link.to",
			"style": {
				"left": "70%",
				"top": "10%",
				"z-index": "12",
				"height": "10%",
				"width": "20%"
			}
		}],
		"fields": [{
			"side": true,
			"name": "users.profile.name.firstName",
			"url": "",
			"style": {
				"left": "30%",
				"top": "70%",
				"z-index": "89",
				"height": "10%",
				"width": "50%",
				"font-family": "Arial",
				"font-size": "100%",
				"color": "green",
				"font-weight": "normal",
				"font-style": "normal"
			}
		},
		{
			"side": true,
			"name": "businesses.address.city",
			"url": "",
			"style": {
				"left": "30%",
				"top": "80%",
				"z-index": "89",
				"height": "10%",
				"width": "50%",
				"font-family": "Arial",
				"font-size": "100%",
				"color": "blue",
				"font-weight": "normal",
				"font-style": "normal"
			}
		}]
	} 
})