const crypto = require('crypto');

function hashPassword (user) {
  if(user.password) {
    user.salt = crypto.randomBytes(16).toString('hex')
    user.password = crypto.createHash('md5').update(user.password + user.salt).digest('hex')
  }
}

function beforeUpdate (user) {
  if(user.change('password')) {
    hashPassword(user)
  }
} 

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'User',

    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate
    }
  })

  User.prototype.comparePassword = function (password, hashedPassword) {
    return crypto.createHash('md5').update(password).digest('hex') === hashedPassword
  }
  
  return User
}
