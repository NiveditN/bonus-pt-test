angular.module('bonuspoint').constant('BUSINESS_CONSTANTS', {
	countries: [{ id: 1, name: 'Hong Kong' }, { id: 2, name: 'China' }],
	ownerIdTypes: [{ id: 1, name: 'Government ID' }, { id: 2, name: 'Other ID' }],
	salutations: [{ id: 1, name: 'Mr.' }, { id: 2, name: 'Ms.' }, { id: 3, name: 'Mrs.' }],
	securityQuestions: [
		{ id: 1, content: 'Which street did you grow up on?' }, 
		{ id: 2, content: 'What is your favorite color?' }
	]
});