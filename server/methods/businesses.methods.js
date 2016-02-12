Meteor.methods({

    'getBusiness': function (data) {
        console.log(data)
        return Businesses.findOne({_id: data });
    },

    'registerBusiness': function (data) {
        var businessId;
        var businessData = {
            established: data.established,
            businessLicense: { 
                number: data.licenseNumber 
            },
            address: {
                line1: data.line1,
                line2: data.line2,
                city: data.city,
                state: data.state,
                postalCode: data.postalCode,
                country: data.country.name
            }
        }
        console.log('REGISTERING BUSINESS');
        console.log(businessData);
        return Businesses.insert(businessData, function(err, result) {
            if(err) {
                return err;
            }
            console.log('Inserted Business')
            console.log(result);
            businessId = result;
            data.businessId = businessId;
            // update user
            Meteor.call('registerBusinessId', data, function(err, result) {
                // insert shop
                if(err) {
                    return err;
                }
                console.log('Inserted BId in user')
                console.log(result)
                // insert shop
                Meteor.call('registerShop', data, function(err, result) {
                    if(err) {
                        return err;
                    }
                    console.log('Inserted shop')
                    console.log(result);                    
                });
            });
        });
    },

    'registerBusinessOld': function (data) {
        var businessData = {
            established: data.established,
            businessLicense: { 
                number: data.licenseNumber 
            },
            address: {
                line1: data.line1,
                line2: data.line2,
                city: data.city,
                state: data.state,
                postalCode: data.postalCode,
                country: data.country.name
            }
        }
        console.log('REGISTERING BUSINESS');
        console.log(businessData);
        return Businesses.insert(businessData);
    },
    'registerOwnerId': function(data) {
        var ownerIdData = {
            'ownerId.type.typeId': data.ownerIdType.id,
            'ownerId.type.typeName': data.ownerIdType.name,
        }
        console.log('REGISTERING BUSINESS ID');
        console.log(ownerIdData);
        return Businesses.update({ _id: data.businessId },
            { $set: ownerIdData });
    }
});