////// Main Model //////

var CardElementParam = {
	_id: '',
	name: '',
	type: 'general/style/rule',		
	nested: false,					// true for nested. complicated elements
	options: ['a', 'b', 'c'],		// also allows objects, i.e. [{name: 'a'},{name: 'b'},{name: 'c'}]
	default: 1,						// index of default value in options. i.e. options[1] = 'b'
	elementRestriction: null,		// specify the types of elements that can have this parameter
};

// Examples: 

//////// General Parameters ////////

// Side //
var side = {
	_id: '',
	name: 'side',
	type: 'general',
	nested: false,
	options: [true, false],
	default: null,
	elementRestriction: null,
}

// Content //
var content = {
	_id: '',
	name: 'content',
	type: 'general',
	nested: false,
	options: [],
	default: null,
	elementRestriction: ['text']
}

//////// Style Parameters ////////

// Background Color //
var backgroundColor = {
	_id: '',
	name: 'background-color',
	type: 'style',
	nested: false,
	options: ['#FFFFFF'],
	default: 0,
	elementRestriction: ['background']
}

// Background Repeat //
var backgroundRepeat = {
	_id: '',
	name: 'background-repeat',
	type: 'style',
	nested: true,
	options: [
		{ name: 'Horizontal', value: 'repeat-x' },
		{ name: 'Vertical', value: 'repeat-y' },
		{ name: 'No-repeat', value: 'no-repeat' },
		{ name: 'Horizontal & Vertical', value: 'repeat-x repeat-y' }
	],
	default: 2,
	elementRestriction: ['background']
}

// Left //
var left = {
	_id: '',
	name: 'left',
	type: 'style',
	nested: false,
	options: ['0%'],
	default: 0,
	elementRestriction: null
}

// etc.

/*//////// Rule Parameters ////////

// rows //
var rows = {
	name: 'rows',
	type: 'rule',
	nested: false
}

// stamp //
var stamp = {
	name: 'stamp',
	type: 'rule',
	nested: true,
}

// startDate.dataFields //
var dataFields = {
	_id: '',
	name: 'dataFields',
	type: 'rule',
	nested: true,	
}*/



