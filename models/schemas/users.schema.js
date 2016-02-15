Schemas.Users = new SimpleSchema({
    username: {
        type: String,
        optional: true
    },
    emails: {
        type: [Object]
    },
	    'emails.$.address': {
	        type: String,
	        regEx: SimpleSchema.RegEx.Email
	    },
	    'emails.$.verified': {
	        type: Boolean
	    },
	status: {
		type: String,
		optional: true
	},
    createdAt: {
        type: Date,
	    optional:true
    },
	updatedAt: {
		type: Date,
		optional:true
	},
    profile: {
        type: Object,
        optional: true
    },
		'profile.name': {
			type: Object,
	        optional: true
		},
			'profile.name.salutation': {
				type: String,
				optional: true
			},
			'profile.name.firstName': {
				type: String,
		        optional: true,
				regEx: /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$/
			},
			'profile.name.middleName': {
				type: String,
		        optional: true,
				regEx: /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$/
			},
			'profile.name.lastName': {
				type: String,
		        optional: true,
				regEx: /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$$/
			},	

			'profile.name.firstNameLocal': {
				type: String,
		        optional: true,
				regEx: /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$/
			},
			'profile.name.middleNameLocal': {
				type: String,
		        optional: true,
				regEx: /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$/
			},
			'profile.name.lastNameLocal': {
				type: String,
		        optional: true,
				regEx: /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$$/
			},

		'profile.securityQuestion': {
			type: Object,
			optional: true
		},
			'profile.securityQuestion.id': {
				type: Number,
				optional: true
			},
			'profile.securityQuestion.content': {
				type: String,
				optional: true
			},
			
		'profile.securityAnswer': {
			type: String,
			optional: true        
		},

		'profile.mobile':{
			type: Number,
			optional: true
		},
		'profile.businessId':{
			type: String,
			optional: true
		},

		'profile.gender':{
			type: String,
			optional: true
		},
		'profile.dateOfBirth':{
			type: Date,
			optional: true
		},
		'profile.jobTitle':{
			type: String,
			optional: true
		},

		'profile.userType':{
			type: String,
			optional: true
		},

		'profile.address': {
			type: Object,
			optional: true
		},
			'profile.address.state': {
				type: String,
				optional: true
			},
			'profile.address.city': {
				type: String,
				optional: true
			},
			'profile.address.line1': {
				type: String,
				optional: true
			},
			'profile.address.line2': {
				type: String,
				optional: true
			},
			'profile.address.postalCode': {
				type: String,
				optional: true
			},
			'profile.address.country': {
				type: String,
				optional: true
			},
			'profile.address.countryCode': {
				type: String,
				optional: true
			},

			'profile.address.stateLocal': {
				type: String,
				optional: true
			},
			'profile.address.cityLocal': {
				type: String,
				optional: true
			},
			'profile.address.countryLocal': {
				type: String,
				optional: true
			},
			'profile.address.line1Local': {
				type: String,
				optional: true
			},
			'profile.address.line2Local':{
				type: String,
				optional: true		
			},
		
		'profile.verified': {
			type: Boolean,
			optional: true,
		},
		'profile.businessRegistered': {
			type: Boolean,
			optional: true,
		},
		'profile.activated': {
			type: Boolean,
			optional: true,
		},

	services: { 
		type: Object, 
		optional: true, 
		blackbox: true 
	}
});

Meteor.users.attachSchema(Schemas.Users);