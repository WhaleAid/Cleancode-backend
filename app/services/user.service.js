const { readUsers, writeUsers } = require('../utils/user.utils.js');

class UserService {
    getUsers() {
        return readUsers();
    }

    addUser(user) {
        const users = readUsers();
        const userId = users.length + 1; 
        const newUser = { userId, ...user };
        users.push(newUser);
        writeUsers(users);
        return userId;
    }

    updateUser(userId, user) {
        const users = readUsers();
        const index = users.findIndex(u => u.userId === userId);
        if (index === -1) {
            throw new Error(`User with ID ${userId} not found`);
        }
        users[index] = { userId, ...user };
        writeUsers(users);
    }

    deleteUser(userId) {
        const users = readUsers();
        const index = users.findIndex(u => u.userId === userId);
        if (index === -1) {
            throw new Error(`User with ID ${userId} not found`);
        }
        users.splice(index, 1);
        writeUsers(users);
    }
}

module.exports = new UserService();
