Meteor.methods({
	'scanData': function(barcodeData) {
		console.log('In scan data');
		console.log(barcodeData);
		return true;
	},

	'getCard': function() {
		var cardModel = {
			_id: '123456789',
			name: 'My Card',
			status: 'active',
			description: 'This is a card model.',
			businessId: 'abcdefghijkl',
			cardElements: {
				background: {
					style: {
						'background-color': '#FFFFFF',
						'background-image': "url('/images/qrcode.jpg')",
						'background-repeat': 'no-repeat',
						'background-attachment': 'fixed',
						'background-position': '30% 20%',
					}
				},
				texts: [{
					id: 0,
					content: 'Hello, friend!',
					url: 'http://www.google.com',
					style: {
						left: '10%',
						top: '20%',
						'z-index': '20',
						height: '100%',
						width: '100%',
						'font-family': 'Arial',
						'font-size': '12px',
						color: '#000000',
						'font-weight': 'bold',
						'font-style': 'normal',
						// position: 'absolute'
					}
				}],
				images: [{
					id: 0,
					src: '/images/qrcode.jpg',
					url: 'http://www.google.com',
					style: {
						left: '60%',
						top: '60%',
						'z-index': '10',
						height: '100%',
						width: '100%',
						// position: 'absolute'
					}
				}],
				rules: {
					stampGift: {
						name: 'stamp-gift', 				// array of all stamp objects with their positional properties
						description: '',
						stamps: { 							// this is a visible area on the card model showing a matrix of stamps. this is the only visible part of the 'stamp-gift' rule.
							rows: 2, 						//rows of the matrix
							columns: 4, 					//columns of the matrix
							image: '/images/stamp.png', 	// all stamps should have the same image & place holder
							placeholderImage: '/images/stamp_plc.png',
							style: { 						//this defines the size and position of the area. 
								left: '50%',
								top: '50%',
								'z-index': '10',
								height: '100%',
								width: '100%'
							}
						},
						gifts: [{
							id: 'gift',
							stampsRequired: 4,
							name: 'My Gift',
							description: 'This is a gift.',
							image: '/images/gift.png',
							placeholderImage: '/images/gift_plc.png',
						}],
						transactionData: [ 			// these fields are transaction data that will be kept in Cards since they are issued to customers.
							{
								name: "stampsAttained",
								defaultValue: 0,
								editable: false
							}, 						// fieldname and default value, default value may or may not be editable during card model creation. if it's not editable, should not appear in the card rule edit dialog'
							{
								name: "stampsUsed",
								defaultValue: 0,
								editable: false
							}, 
							{
								name: "giftsClaimed",
								defaultValue: 0,
								editable: false
							}
						],
						transactions: [
							{ 					
								name: "issue-stamp",
								permission: "issue-stamp",
								logic: "stampsAttained+=1"	// logic is pure javascript, if the logic becomes to complicated, can use a function(). logic can reference the dataFields
							}, 						
							{								
								name: "revoke-stamp",
								permission: "revoke-stamp", // permissions will be used in transaction, to verify if the employee has the permission or not to do this transaction. will be insert into the "permission" collection once this rule is added into the card model. 
								logic: "stampsAttained-=1"
							}, 
							{								
								name: "issue-gift",			// transaction name will be used in a few places, e.g. the transaction collection and transaction history collection.
								permission: "issue-gift",
								logic: "giftsClaimed+=1"
							}, 
							{
								name: "revoke-gift",
								permission: "revoke-gift",
								logic: "giftsClaimed-=1"
							}
						],
					},

				}
					
				
			}
		}
		return cardModel;
	}

	
})

