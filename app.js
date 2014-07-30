var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose');
var NumberList = require('./models/numbers.js');

mongoose.connect('mongodb://localhost/ajaxPractice');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);
app.get('/index2', indexController.index2);

app.get('/numbers', function(err, res){
	res.send([Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10)]);
});
app.post('/addANumber', function(req, res){
	NumberList.find(function(err, numberList){
		console.log('numberList', numberList)
		if (numberList.length > 0) {
			numberList[0].numbers.push(req.body.num)
			numberList[0].save();
			res.send(numberList[0].numbers);
		}else{
			numberList[0] = new NumberList({
				numbers: [req.body.num]
			});
			numberList[0].save();
			res.send(numberList[0].numbers);
		}
		
	})
});
var server = app.listen(9669, function() {
	console.log('Express server listening on port ' + server.address().port);
});
