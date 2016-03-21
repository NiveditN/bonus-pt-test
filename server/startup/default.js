// Configure default email MAIL_URL for accounts

/*
	State
	Unverified
	IP Address
	104.130.122.1
	SMTP Hostname
	smtp.mailgun.org
	Default SMTP Login
	postmaster@mg.bonuspoint.info
	Default Password
	cbad99f8a7c7ec2980d7780f71c5d2b2 Manage SMTP credentials
	API Base URL
	https://api.mailgun.net/v3/mg.bonuspoint.info
	API Key
	key-db59e67ede20aa2c7baa0d6ca9b1b9c6
*/

Meteor.startup(function () {

	// 1. Set up stmp
	
	// BonusPoint official config
	// process.env.MAIL_URL = 'smtp://' + 
	// encodeURIComponent('postmaster@mg.bonuspoint.info') + ':' + 
	// encodeURIComponent('cbad99f8a7c7ec2980d7780f71c5d2b2') + '@' + 
	// encodeURIComponent('smtp.mailgun.org') + ':' + '587';
	
	// Test config
	process.env.MAIL_URL = 'smtp://' + 
	encodeURIComponent('postmaster@sandboxb16f39cb3b074dd9b00734a5d29810e3.mailgun.org') + ':' + 
	encodeURIComponent('ecd751b0f35a0bb15931d1475afa91ca') + '@' + 
	encodeURIComponent('smtp.mailgun.org') + ':' + '587';

	// 2. Format the email
	Accounts.emailTemplates.from = 'business@bonuspoint.info';
	Accounts.emailTemplates.siteName = 'BonusPoint';

	Accounts.emailTemplates.verifyEmail.subject = function(user) {
		return 'Confirm Your Email Address for BonusPoint Business Account';
	};
	Accounts.emailTemplates.verifyEmail.text = function(user, url) {
		return 'Thank you for registering.  Please click on the following link to verify your email address: \r\n' + url;
	};

	// 3.  Send email when account is created
	Accounts.config({
		sendVerificationEmail: true
	});

});