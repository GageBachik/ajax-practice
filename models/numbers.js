var mongoose = require('mongoose');

var NumberList = mongoose.model('NumberList', {
	numbers: Array
})

module.exports = NumberList;