const User = require('./user');
const Activity = require('./activity');

User.hasMany(Activity, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Activity.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Activity };