var mongoose = require('mongoose');

//Grammar Schema

var GrammarSchema = mongoose.Schema({
	_ma:{
		type: String,
		required: true
	},
	_title:{
		type: String,
		required: true
	},
	_content:{
		type: String,
		required: true
	},
	_img:{
		type: Array
	},
	_info: {
		type: Object
	}
});


var Grammar = mongoose.model('Grammar',GrammarSchema);

module.exports = Grammar;
