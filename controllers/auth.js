const { User } = require('../models');

const register = async (req, res, next) => {
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
};

module.exports = { register };
