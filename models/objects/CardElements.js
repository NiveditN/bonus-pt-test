/* 
	There is a collection called "cardElement", 
	each element including rule should be defined in it, 
	including its name, description, properties /parameters/default values, conflicting rules..
*/

////// Main Model //////

var CardElement = {
	_id: '',
	name: '',
	elementType: 'rule/field',
	parameters: [
		// reference ids
	],
	styleParameters: [
		// reference ids
	],
	containerType: 'array/object',
}


////// Examples //////

// background
var background = {
	_id: '',
	name: 'text',
	parameters: [
		// reference ids to:
		// side
	],
	styleParameters: [
		// reference ids to: 
		// background-color, background-image, background-repeat
		// background-attachment, background-position
	],
	containerType: 'array',
}

// text
var text = {
	_id: '',
	name: 'text',
	parameters: [
		// reference ids to:
		// side, content, url		
	],
	styleParameters: [
		// reference ids to: 
		// left, top, z-index, height, width, font-family,
		// font-size, color, font-weight, font-style
	],
	containerType: 'array',
}

// field
var field = {
	_id: '',
	name: 'field',
	parameters: [
		// reference ids to:
		// side, name, url
	],
	styleParameters: [
		// reference ids to: 
		// left, top, z-index, height, width, font-family,
		// font-size, color, font-weight, font-style
	],
	containerType: 'array',
}

////// rule //////

// stampGift
var stampGift = {
	_id: '',
	name: 'stampGift',
	parameters: [
		// reference ids to:
		// side, description,
		// !! rows, columns, stamp, gifts (structue TBD) !!
		// !! transactionData, transactions (structure TBD) !!
	],
	styleParameters: [
		// reference ids to:
		// left, top, z-index, height, width
	]
}

// startDate
var startDate = {
	_id: '',
	name: 'startDate',
	parameters: [
		// reference ids to:
		// side
		// !! dataFields (TBD) !!
	],
	styleParameters: [
		// reference ids to:
		// left, top, z-index, height, width, font-family,
		// font-size, color, font-weight, font-style
	]
}

// endDate
var endDate = {
	_id: '',
	name: 'endDate',
	parameters: [
		// reference ids to:
		// side
		// !! dataFields (TBD) !!
	],
	styleParameters: [
		// reference ids to:
		// left, top, z-index, height, width, font-family,
		// font-size, color, font-weight, font-style
	]
}