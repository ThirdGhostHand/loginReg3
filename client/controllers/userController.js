app.controller('userController', function($scope, userFactory){

  userFactory.checkStatus(function(data){
    $scope.currUser = data;
  })

  $scope.register = function(){
    userFactory.register($scope.user)
  }

})
