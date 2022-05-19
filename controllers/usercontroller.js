//Models here
const { User } = require('../models');

module.exports = {
  //Login and Register part (Create method)
  registerPost: async (req, res) => {
    try {
      const { email, password, username } = req.body;
      const isExist = await User.findOne({
        where: {
          email,
        },
      });

      if (isExist) {
        throw new Error('user already exists');
      }

      const user = await User.create({
        email,
        password,
        username,
      });
      return res.json({
        user,
      });
    } catch (error) {
      next(error);
    }
  },

  loginPost: async (req, res) => {
    try {
      const { email, password } = req.body;
      // console.log(`input: ${email}, Password: ${password}`)
      const userFind = await User.findOne({
        where: {
          email: email,
          password: password,
        },
      });
      // console.log(userFind)

      if (userFind) {
        res.redirect(`/game?username=${userFind.username}`);
        console.log(userFind.username + userFind.id);
      } else {
        res.status(404).json({
          message: 'Email or Password is wrong',
        });
        console.log('Failed!');
      }
    } catch (error) {
      console.log(error);
    }
  },

  registerGet: async (req, res) => {
    res.render('register');
  },

  homeRender: async (req, res) => {
    res.render('user');
  },

  loginGet: async (req, res) => {
    res.render('login');
  },

  gameRender: async (req, res) => {
    res.render('game', {
      username: req.query.username || 'PLAYER 1',
    });
  },
};
