const express = require('express');
const router = express.Router();
const cardController = require('../controller/cardController');
const deckController = require('../controller/deckController');

//CARD ROUTES

router.get('/cards/:id', cardController.getCard, (req, res, next) => {
  res.status(200).json(res.locals.getCard);
});

router.get('/getCardsInDeck/:id', cardController.getAllCards, (req, res, next) => {
  res.status(200).json(res.locals.getAllCards);
});

router.post('/cards', cardController.createCard, (req, res, next) => {
  res.status(200).json(res.locals.createCard);
});

router.delete('/cards/:id', cardController.deleteCard, (req, res, next) => {
  res.status(200).json(res.locals.deleteCard);
})

// router.get('/cards/nextCard/:id', cardController.nextCard, (req, res, next) => {
//   res.status(200).json(res.locals.nextCard);
// });

// DECK ROUTES

// see all decks
router.get('/getAllDecks', deckController.getAllDecks, (req, res, next) => {
  res.status(200).json(res.locals.getAllDecks);
});

//create a deck
router.post('/deck', deckController.createDeck, (req, res, next) => {
  res.status(200).json(res.locals.createDeck);
})
//delete a deck
router.delete('/deck/:id', deckController.deleteDeck, (req, res, next) => {
  res.status(200).json(res.locals.deleteDeck);
})

module.exports = router;
