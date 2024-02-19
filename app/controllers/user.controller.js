const UserService = require('../services/user.service.js');

exports.getUsers = (req, res) => {
    try {
        const users = UserService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addUser = (req, res) => {
    try {
        const user = req.body;
        const userId = UserService.addUser(user);
        res.status(201).json({ message: 'User added successfully', userId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = (req, res) => {
    try {
        const userId = parseInt(req.params.userId);
        const user = req.body;
        UserService.updateUser(userId, user);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        if (error.message === 'User with ID not found') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

exports.deleteUser = (req, res) => {
    try {
        const userId = parseInt(req.params.userId);
        UserService.deleteUser(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        if (error.message === 'User with ID not found') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};