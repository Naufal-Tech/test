const { User } = require('./users');
const { UserBiodata } = require('./userbiodata');

User.hasOne(UserBiodata, { foreignKey: 'user_id' });

module.exports = { User, UserBiodata };
