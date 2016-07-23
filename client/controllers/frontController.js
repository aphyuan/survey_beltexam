app.controller('frontController', function($scope, $location, surveyFactory){
  console.log('Im able to load my frontController with my frontpage');
  $scope.Enter = function(){
    console.log('user entered', $scope.newUser);
    surveyFactory.addloginUser($scope.newUser, function(data){
      console.log('successfully loged in with name', data);
    })
    $location.path('/dashboard');
  }
})
