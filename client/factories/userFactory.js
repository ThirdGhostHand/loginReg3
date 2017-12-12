app.factory('userFactory', function($http, $location){
    var factory = {};
    factory.register = function(user){
      $http.post('/register', user).then(function(output){
        if(output.data){
          $location.url('/dash')
        }
      })
    }
    factory.checkStatus = function(cb){
      $http.get('/checkstatus').then(function (output) {
        if(!output.data){
          $location.url('/')
        }else{
          cb(output.data)
        }
      })
    }
    return factory
})
