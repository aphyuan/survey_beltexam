app.controller('showController', function($scope, $routeParams, surveyFactory){
  var surveyId = $routeParams.id;
  surveyFactory.getSurvey(surveyId, function(data){
    console.log('show controller', data);
    $scope.survey = data.data;
  })
})
