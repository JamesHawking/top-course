const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.auth.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const userJSON = user.toJSON();
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON),
      });
    } catch (err) {
      res.status(400).send({
        error: 'This email is in use',
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(403).send({
          error: 'Info was incorrect',
        });
      }

      const isPasswordValid = await user.comparePasswords(password);
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Info was incorrect',
        });
      }

      const userJSON = user.toJSON();
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON),
      });
    } catch (err) {
      res.status(500).send({
        error: err,
      });
    }
  },
};
