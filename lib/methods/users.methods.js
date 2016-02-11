
/*Accounts.validateLoginAttempt(function(attempt) {
    
    if( ! attempt.user || ! attempt.user.profile.status.isActive){
        return false;
    } else {
        return true;
    }
});*/

Meteor.methods({
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