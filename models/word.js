var mongoose = require('mongoose');

//Word Schema
var WordSchema = mongoose.Schema({
	_ma:{
		type: String,
		required: true
	},
	_tu: {
		type: String,
		required: true
	},
	_loaiTu:{
		type: String,
		required: true
	},
	_phatAm:{
		type: Array
	},
	_nghia:{
		type: Array
	}
});


var Word = mongoose.model('Word',WordSchema);

module.exports = Word;
