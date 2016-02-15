/*Accounts.validateLoginAttempt(function(attempt) {
    
    if( ! attempt.user || ! attempt.user.profile.status.isActive){
        return false;
    } else {
        return true;
    }
});*/

Meteor.methods({

    'registerBusinessId': function(data) {
        console.log('REGISTERING BUSINESS ID');
        console.log( data.businessId );
        return Meteor.users.update({ _id: this.userId },
            { $set: {
                'profile.businessId': data.businessId,
                'profile.businessRegistered': true
            } });
    },

    'createProfile': function(data) {

        var profileData = {
            'profile.name.salutation': data.salutation.name,
            'profile.name.firstName': data.firstName,
            'profile.name.middleName': data.middleName,
            'profile.name.lastName': data.lastName,
            'profile.gender': data.gender,
            'profile.dateOfBirth': data.dateOfBirth,
            'profile.mobile': data.mobile,
            'profile.address': {
                line1: data.line1,
                line2: data.line2,
                city: data.city,
                state: data.state,
                postalCode: data.postalCode,
                country: data.country.name
            },
            'profile.activated': true
        }
        console.log('CREATING PROFILE');
        console.log(profileData);
        
        // (1) update user --- insert profile with country, name, gender, salutation, DOB, mobile, address
        return Meteor.users.update({ _id: this.userId }, { $set: profileData }, function(err, result) {
            
            console.log('Updated user profile');
            console.log(result);
            data.businessId = Meteor.user().profile.businessId;
            console.log('Found user businessId');
            console.log(data.businessId);

            // (2) update business --- insert ownerId information
            Meteor.call('registerOwnerId', data, function(err, result) {
                if(err) {
                    return err;
                }
            });

        });
    },

    'createNewUser': function(userData) {
        userData.profile.verified = false;
        userData.profile.activated = false;
        return Accounts.createUser(userData);
    },

    'changeUserStatus': function (userId) {
        return Meteor.users.update({_id: userId },
            {
                $set: {'profile.status.isActive': ! Meteor.users.findOne({_id:userId}).profile.status.isActive  }
            });
    },

    'updateUserProfile': function(userId, userData) {
        return Meteor.users.update({_id: userId},{$set: userData});
    },

});