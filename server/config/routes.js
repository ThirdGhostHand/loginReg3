var user = require('./../controllers/serverController.js');
module.exports = function (app){
  app.post('/register', function(req, res){
    user.register(req, res);
  })
  app.get('/checkstatus', function(req, res){
    user.checkStatus(req, res)
  })
  app.get('/logout', function (req, res) {
    user.logout(req, res)
  })
}
