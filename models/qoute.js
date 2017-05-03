var mongoose = require('mongoose');

//Qoute Schema
var QouteSchema = mongoose.Schema({
	_ma:{
		type:String
	},
	_content:{
		type:String
	}
});


var Qoute = mongoose.model('Qoute',QouteSchema);

module.exports = Qoute;
