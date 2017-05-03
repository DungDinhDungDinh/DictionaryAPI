var mongoose = require('mongoose');

//Blog Schema

var BlogSchema = mongoose.Schema({
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


var Blog = mongoose.model('Blog',BlogSchema);

module.exports = Blog;
