'use strict';
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Users',
  }
);

module.exports = { User };
// module.exports = (sequelize, DataTypes) => {
//   class Users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       Users.hasOne(models.UserBiodata, {foreignKey: 'user_id'});
//       Users.hasMany(models.UserHistory, {foreignKey: 'user_id'});

//     }
//   };

//   Users.init({
//     username: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Users',
//   });
//   return Users;
// };
