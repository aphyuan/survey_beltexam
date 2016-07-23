app.factory('surveyFactory', function($http){
  var factory = {};
  var surveys = {};
  var loginuser = "";
  factory.addloginUser = function(data, callback){
    console.log('made the username to factory');
    loginuser = data;
    callback(loginuser);
  }
  factory.getSurveys = function(callback){
    $http.get('/surveys').then(function(surveys){
      surveys = surveys.data;
      callback(surveys);
    })
  }
  factory.getSurvey = function(surveyId, callback){
    $http.get('/survey/'+surveyId).then(function(survey){
      callback(survey);
    })
  }
  factory.getUser = function(callback){
    callback(loginuser);
  }
  factory.addSurvey = function(data, callback){
    data.username = loginuser;
    console.log(data);
    $http.post('/surveys', data).then(function(data){
      console.log('make it back from backend this is our new survey', data);
      surveys.push(data.data);
      callback(surveys);
    })
  }
  return factory;
})
