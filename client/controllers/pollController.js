app.controller('pollController', function($scope){
  $scope.addMessage = function(id) {
    $scope.newMessage._id= id
    console.log($scope.newMessage)
  }
})
