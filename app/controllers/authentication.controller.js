const authenticationService = require('../services/authentication.service.js');

exports.loginUser = (req, res) => {
    const { username, password } = req.body;
    try {
        const result = authenticationService.authenticateUser(username, password);
        res.status(200).json({ message: 'Authentication successful', userId: result.userId });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

exports.registerUser = (req, res) => {
    const { username, password } = req.body;
    console.log("Trying to register with parameters:", username, password);
    try {
        const result = authenticationService.registerUser(username, password);
        res.status(200).json({ message: 'Registration successful', userId: result.userId });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
