module.exports = (app) => {
  const userControllers = require('../controllers/userControllers');
  const postControllers = require('../controllers/postControllers');

  app.route('/new-user')
    .post(userControllers.register);

  app.route('/login')
    .post(userControllers.login);

  app.route('/new-post')
    .post(postControllers.newPost);

  app.route('/posts')
    .get(postControllers.getPosts);

  app.route('/posts/:id')
    .get(postControllers.getOnePost)
    .put(postControllers.postComment);
};
