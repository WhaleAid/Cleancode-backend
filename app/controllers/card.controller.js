const CardService = require('../services/card.service');

exports.getCards = (req, res) => {
    try {
        const cards = CardService.getCards();
        if (!cards.length) {
            return res.status(404).json({ message: 'No cards found' });
        }
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addCard = (req, res) => {
    const { question, answer, tag } = req.body;
    try {
        const cardId = CardService.addCard({ question, answer, tag });
        res.status(201).json({ message: 'Card added successfully', cardId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCard = (req, res) => {
    const { cardId } = req.params;
    const cardData = req.body;
    try {
        CardService.updateCard(cardId, cardData);
        res.status(200).json({ message: 'Card updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCard = (req, res) => {
    const { cardId } = req.params;
    try {
        CardService.deleteCard(cardId);
        res.status(200).json({ message: 'Card deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCardsForQuiz = (req, res) => {
    try {
        const cards = CardService.getCardsForQuiz();
        if (!cards.length) {
            return res.status(404).json({ message: 'No cards found' });
        }
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.answerCard = (req, res) => {
    const { cardId } = req.params;
    const { answer } = req.body;
    try {
        const result = CardService.answerCard(cardId, answer);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
