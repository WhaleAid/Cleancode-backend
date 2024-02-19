const fs = require('fs');
const path = require('path');

const usersFilePath = path.resolve(__dirname, '../data/users.json');

exports.readUsers = () => {
    try {
        const usersData = fs.readFileSync(usersFilePath, 'utf8');
        return JSON.parse(usersData);
    } catch (error) {
        console.error('Error reading users data:', error);
        throw new Error('Failed to read users data');
    }
}

exports.writeUsers = (users) => {
    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        console.log('Users data written successfully');
    } catch (error) {
        console.error('Error writing users data:', error);
        throw new Error('Failed to write users data');
    }
}
