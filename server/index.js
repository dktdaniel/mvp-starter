var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var axios = require('axios');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.post('/search', (req, res) => {
	// console.log('in search!');
	// console.log(req.body);

	var searchTerm = req.body.term;

	//make ajax call to api

	
	axios({
		url: 'https://trackapi.nutritionix.com/v2/natural/exercise',
		method: 'POST',
		headers: {
  			'x-app-id': '54c2efc1',
  			'x-app-key': '2a3c8eb8c746a2f6cd593158bca9a9c5',
  			'x-remote-user-id': 0
  		},		
  	data: {
		 "query": searchTerm,
		 "gender": 'male',
		 "weight_kg": 61.3,
		 "height_cm": 165.26,
		 "age": 23
		},
		contentType: 'application/json',
		dataType: 'json'

	})	
	.then((result) => {
		//save data to db
		var mapped = result.data.exercises.map((resultItem) => {
			return {
				activity: resultItem.name,
				duration: resultItem.duration_min,
				calories: resultItem.nf_calories
			}
		});
		return Promise.all(mapped.map(item => { return items.save(item)}))
		//query db then res send results
	})
	.then(() => {
		items.selectAll(function(err, data) {
	    if(err) {
	      res.sendStatus(500);
	    } else {
	    	console.log('haaaaaaayyyyyy', data);
	      res.send(data);
	    }
	  });
	});
 });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

