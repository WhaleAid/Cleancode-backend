module.exports = (app) => {
    const AuthController = require("../controllers/authentication.controller.js");
    const UserController = require("../controllers/user.controller.js");

    app.post('/login', AuthController.loginUser);
    app.post('/register', AuthController.registerUser);
    app.get('/users', UserController.getUsers);
    app.post('/users', UserController.addUser);
    app.put('/users/:userId', UserController.updateUser);
    app.delete('/users/:userId', UserController.deleteUser);
};