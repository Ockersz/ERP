const userRepository = require('../repositories/userRepository');

async function getAll() {
  return await userRepository.getAll();
};

async function createUser(user) {
  return await userRepository.createUser(user);
};

async function getUserById(id) {
  return await userRepository.getUserById(id);
};

async function updateUserById(id, user) {
    return await userRepository.updateUserById(id, user);
};

async function deleteUserById(id) {
    return await userRepository.deleteUserById(id);
};

async function searchUser(query) {
    return await userRepository.searchUser(query);
};

async function authUser(user) {
  user = await userRepository.getByUserName(username);
    if(!user){
        return null;
    }
    if (await bcrypt.compare(password,user.password)) {
        return user;
    }
    return null;
  }

module.exports = {
    getAll,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
    searchUser,
    authUser
    };

