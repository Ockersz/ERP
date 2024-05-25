const User = require("../models/user");

async function getAll() {
    return await User.find();
};

async function createUser(user) {
    return await User.create(user);
};

async function getUserById(id) {
  return await User.findById(id);
};

async function updateUserById(id, user) {
  return await User.findByIdAndUpdate(id, user, { new: true });
};

async function deleteUserById(id) {
  return await User.findByIdAndDelete(id);
};

async function searchUser(query) {
    const regexQuery = new RegExp(query, "i");
    return await User.find({ 
        $or: [
            { username: regexQuery },
        ],
    });
}

module.exports = {
    getAll,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
    searchUser,
    };
