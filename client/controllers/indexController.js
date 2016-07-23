app.controller('indexController', function($scope,$location,surveyFactory){
  console.log('I am able to load my indexController along with my index partial');
  surveyFactory.getUser(function(data){
    console.log(data);
    $scope.username = data;
  })
  $scope.submitForm = function(){
    console.log('create a survey indexController', $scope.survey);
    $scope.survey.username = $scope.username;
    surveyFactory.addSurvey($scope.survey, function(surveys){
      $scope.surveys = surveys;
    })
    $location.path('/dashboard');
  }
  surveyFactory.getSurveys(function(data){
    console.log(data);
    $scope.surveys = data;
  })
})
