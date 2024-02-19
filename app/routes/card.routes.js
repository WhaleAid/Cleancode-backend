module.exports = (app) => {
    const CardController = require("../controllers/card.controller.js");

    app.get('/cards', CardController.getCards);    
    app.post('/cards', CardController.addCard);
    app.put('/cards/:cardId', CardController.updateCard);
    app.delete('/cards/:cardId', CardController.deleteCard);
    app.get('/cards/quizz', CardController.getCardsForQuiz);
    app.patch('/cards/:cardId/answer', CardController.answerCard);
};
