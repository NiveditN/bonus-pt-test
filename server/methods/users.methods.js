/*Accounts.validateLoginAttempt(function(attempt) {
    
    if( ! attempt.user || ! attempt.user.profile.status.isActive){
        return false;
    } else {
        return true;
    }
});*/

Meteor.methods({

    'registerBusinessId': function(data) {
        // var userData = {
        //     'profile.businessId': data.businessId
        // }
        console.log('REGISTERING BUSINESS ID');
        console.log( data.businessId );
        return Meteor.users.update({_id: this.userId},
            {$set: {
                'profile.businessId': data.businessId
            }});
    },

    'createProfile': function(data) {
        var profileData = {
            'profile.name.salutation': data.salutation,
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
            }
        }
        console.log('CREATING PROFILE');
        console.log(profileData);
        
        // update user 
        // insert profile with country, name(3), gender, salutation, DOB, mobile, address,

        return Meteor.users.update({_id: this.userId}, { $set: profileData }, function(err, result) {

            // update business
            // insert ownerId information

            console.log('Updated user profile');
            console.log(result);
            data.businessId = Meteor.user().profile.businessId;
            console.log('Found user businessId');
            console.log(data.businessId);

            Meteor.call('registerOwnerId', data, function(err, result) {
                if(err) {
                    return err;
                }
            });

        });
    },

    'createProfileOld': function(data) {
        var profileData = {
            'profile.name.salutation': data.salutation,
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
            }
        }
        console.log('CREATING PROFILE');
        console.log(profileData);
        return Meteor.users.update({_id: this.userId},
            { $set: profileData });
    },


    'updateUser': function(userData){
      return  Meteor.users.update({_id: this.userId },
            {$set: {
                'profile.name.firstName' : userData.firstName,
                'profile.name.lastName' : userData.lastName,
                'email' : userData.email
            }});
    },
    'createNewUser': function (userData){
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
    'updateUserSelectedCountry': function(selectedCountry){
        Meteor.users.update({_id: this.userId },
            {$set: { 
                'profile.selected_country' : selectedCountry
            }
        })
    } 
});