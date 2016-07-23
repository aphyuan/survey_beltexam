var mongoose = require('mongoose');
var Survey = mongoose.model('surveys');

module.exports = (function() {
	return {
		getSurveys: function(req, res){
			Survey.find({}, function(err, surveys){
				if(err){
					console.log(err);
					console.log('getsurvey function surveys controller');
				} else{
					res.json(surveys);
				}
			})
		},
		createSurvey: function(req, res){
			survey = new Survey(req.body);
			survey.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new survey');
				} else {
					console.log('this is our new survey',result);
					res.json(result);
				}
			})
		},
		getSurvey: function(req, res){
			Survey.find({_id: req.params.id}, function(err, result){
				if(err){
					console.log("this is the survey you are looking for", result);
				} else {
					console.log('this is our survey',result);
					res.json(result);
				}
			})
		},
		deleteSurvey: function(req, res){
			Survey.remove({_id: req.params.id}, function(err){
				if(err){
					console.log('couldnt delete', err);
				}else {
					console.log('successfully deleted.');
				}
			})
		},
		vote: function(req, res){
		//need implementation
		}
	}
})();
