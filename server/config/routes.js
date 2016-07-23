var surveys = require('./../controllers/surveys.js');

module.exports = function(app){
//get all surveys
  app.get('/surveys', function(req, res){
    console.log('made it to my /surveys get routes');
    surveys.getSurveys(req, res);
  });
//create a new survey
  app.post('/surveys', function(req, res){
    console.log('made it to my /surveys post routes');
    surveys.createSurvey(req, res);
  });
//get only one surveys
  app.get('/survey/:id', function(req, res){
    console.log('made it to my /survey/:id get routes');
    surveys.getSurvey(req, res);
  });
//delete a survey
  app.get('/survey/delete/:id', function(req, res){
    console.log('made it to my /delete get route');
    surveys.deleteSurvey(req, res);
  })
//option controller
  app.post('/survey/vote', function(req, res){
    surveys.vote(req, res);
  })

//add later
//   app.get('/option/:id', function(req, res){
//     option.read(req, res);
//   })
// //click on a vote
//   app.post('/option/vote', function(req, res){
//     console.log('made it to my /vote post routes');
//     option.createVote(req, res);
//   });
//to add : find the user route

}
