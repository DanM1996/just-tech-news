const User = require("./User");
const Post = require("./Post");

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// defining the relationship of post to the user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// exports an object with the user object as a propery
module.exports = { User, Post };