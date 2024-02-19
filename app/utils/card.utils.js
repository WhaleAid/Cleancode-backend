const fs = require('fs');
const path = require('path');

const cardsFilePath = path.resolve(__dirname, '../data/cards.json');

exports.readCards = () => {
    try {
        const cardsData = fs.readFileSync(cardsFilePath, 'utf8');
        return JSON.parse(cardsData);
    } catch (error) {
        console.error('Error reading cards data:', error);
        throw new Error('Failed to read cards data');
    }
}

exports.writeCards = (cards) => {
    try {
        fs.writeFileSync(cardsFilePath, JSON.stringify(cards, null, 2));
        console.log('Cards data written successfully');
    } catch (error) {
        console.error('Error writing cards data:', error);
        throw new Error('Failed to write cards data');
    }
}
