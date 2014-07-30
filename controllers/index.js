var total = 0;

var indexController = {
	index: function(req, res) {
		res.render('index', {total:total});
	},
	index2: function(req, res) {
		res.render('index2');
	}
};

module.exports = indexController;