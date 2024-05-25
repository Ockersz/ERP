const User = require("../models/user");
const bcrypt = require("bcrypt");

async function getAll() {
  return await User.find();
}

async function createUser(user) {
  const newUser = new User(user);
  newUser.password = await bcrypt.hash(newUser.password, 10);
  return await newUser.save();
}

async function getUserById(id) {
  return await User.findById(id);
}

async function updateUserById(id, user) {
  return await User.findByIdAndUpdate(id, user, { new: true });
}

async function deleteUserById(id) {
  return await User.findByIdAndDelete(id);
}

async function searchUser(query) {
  const regexQuery = new RegExp(query, "i");
  return await User.find({
    $or: [{ username: regexQuery }],
  });
}

async function getByUserName(username) {
  return await User.findOne({ username });
}

module.exports = {
  getAll,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  searchUser,
  getByUserName,
};
