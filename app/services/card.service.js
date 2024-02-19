const { readCards, writeCards } = require('../utils/card.utils');

class CardService {
    getCards() {
        const cards = readCards();
        if (!cards.length) {
            throw new Error('No cards found');
        }
        return cards;
    }

    addCard(card) {
        if (!card || !Object.keys(card).length) {
            throw new Error('Invalid card data');
        }
        const cards = readCards();
        const cardId = cards.length + 1;
        const newCard = { cardId, ...card };
        cards.push(newCard);
        writeCards(cards);
        return newCard;
    }

    updateCard(cardId, updatedCardData) {
        if (!updatedCardData || !Object.keys(updatedCardData).length) {
            throw new Error('Invalid card data');
        }
        const cards = readCards();
        const index = cards.findIndex(c => c.cardId === cardId);
        if (index === -1) {
            throw new Error(`Card with ID ${cardId} not found`);
        }
        const updatedCard = { cardId, ...updatedCardData };
        cards[index] = updatedCard;
        writeCards(cards);
        return updatedCard;
    }

    deleteCard(cardId) {
        const cards = readCards();
        const index = cards.findIndex(c => c.cardId === cardId);
        if (index === -1) {
            throw new Error(`Card with ID ${cardId} not found`);
        }
        cards.splice(index, 1);
        writeCards(cards);
    }

    getCardsForQuiz() {
        const cards = readCards();
        if (!cards.length) {
            throw new Error('No cards found');
        }
        return cards.map(c => ({ cardId: c.cardId, question: c.question }));
    }

    answerCard(cardId, answer) {
        if (!answer) {
            throw new Error('Invalid answer');
        }
        const cards = readCards();
        const index = cards.findIndex(c => c.cardId === cardId);
        if (index === -1) {
            throw new Error(`Card with ID ${cardId} not found`);
        }
        cards[index].answer = answer;
        writeCards(cards);
        return cards[index];
    }
}

module.exports = new CardService();
