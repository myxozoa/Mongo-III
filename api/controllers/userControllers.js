const User = require('../models/userModels');

const login = (req, res) => {
  User.find({ username: req.body.username })
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

const register = (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });

  newUser.save()
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  login,
  register
}