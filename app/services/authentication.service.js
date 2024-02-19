const { readUsers, writeUsers } = require('../utils/user.utils.js');

class AuthenticationService {
    authenticateUser(username, password) {
        const users = readUsers();
        const user = users.find(u => u.username === username);

        if (!user) {
            throw new Error('User not found');
        }

        if (user.password === password) {
            return { success: true, userId: user.userId };
        } else {
            throw new Error('Authentication failed');
        }
    }

    registerUser(username, password) {
        const users = readUsers();
        if (users.some(u => u.username === username)) {
            throw new Error('Username already exists');
        }

        const userId = users.length + 1;
        const newUser = { userId, username, password };
        users.push(newUser);
        writeUsers(users);
        return { success: true, userId };
    }
}

module.exports = new AuthenticationService();
