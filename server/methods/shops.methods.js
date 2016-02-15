Meteor.methods({

    'registerShop': function (data) {
        var shopData = {
            name: data.storeName,
            ownerName: data.ownerName,
            address: {
                line1: data.line1,
                line2: data.line2,
                city: data.city,
                state: data.state,
                postalCode: data.postalCode,
                country: data.country.name
            },
            businessId: data.businessId
        }
        console.log('REGISTERING SHOP');
        console.log(shopData);
        return Shops.insert(shopData);
    },
    
});