Meteor.methods({

    'registerShop': function (data) {
        var shopData = {
            name: data.storeName,
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

    'getShopByBusinessId': function(businessId) {
        console.log(businessId)
        return Shops.findOne({ businessId: businessId });
    },

    updateShop: function(data) {
        console.log('UPDATING SHOP');
        console.log(data);
        return Shops.update({ _id: data._id }, { $set: data });
    }

    
});