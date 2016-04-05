CardsSeed = [
	{
		cardModelId: 'firstCard1234567890',
		userId: 'txFRjDLYsEK4hFWWN',
		businessId: '6huJwHFWSDYzKBiJW',
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
	}
]

if (Cards.find().count() === 0) {
	_.each(CardsSeed, function (card) {
	    Cards.insert(card);
	    console.log("Card created successfully");
	})
}

