const AuthController = require('./controllers/AuthController');
const AuthControllerPolicy = require('./policies/AuthControllerPolicy');
const ListController = require('./controllers/ListController');

module.exports = (app) => {
  app.post(
    '/register',
    AuthControllerPolicy.register,
    AuthController.register,
  );
  app.post(
    '/login',
    AuthController.login,
  );
  app.get('/list', ListController.getAll);
};
