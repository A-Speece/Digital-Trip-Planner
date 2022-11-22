const User = require('./User');
const Trip = require('./Trip');
const Activities = require('./Activities');

User.hasMany(Trip, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Trip.belongsTo(User, {
  foreignKey: 'user_id'
});

Activities.belongsTo(Trip, {
  foreignKey: 'trip_id'
});

Trip.hasMany(Activities, { 
    foreignKey: 'trip_id',
    onDelete: 'CASCADE'
  });

module.exports = { User, Trip, Activities };
