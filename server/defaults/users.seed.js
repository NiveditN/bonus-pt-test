UsersSeed = [
    {
        'username': 'test',
        'email':'test@test.com',
        'profile': {
            'name': {
                'salutation': 'Ms.',
                'firstName': 'Jane',
                'lastName': 'Doe'
            },
            'userType': 'Test',
        },
        'password': 'test@123'
    }];

if (Meteor.users.find().count() === 0) {
    _.each(UsersSeed, function (users) {
        Accounts.createUser(users);
        console.log("User created successfully");
    })
}