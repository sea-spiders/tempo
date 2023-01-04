const express = require('express');
const router = express.Router();
const db = require('../../db/db.js'); 
const cardController = require('../controller/cardController');

router.get('/cards/nextCard/:id', cardController.nextCard, (req, res, next) => {
  res.status(200).json(res.locals.nextCard);
});

router.get('/cards/:id', cardController.getCard, (req, res, next) => {
  res.status(200).json(res.locals.getCard);
});

router.get('/getAllCards', cardController.getAllCards, (req, res, next) => {
  console.log(res.locals.getAllCards)
  res.status(200).json(res.locals.getAllCards);
});

router.post('/cards', cardController.createCard, (req, res, next) => {
  res.status(200).json(res.locals.createCard);
});

router.delete('/cards/:id', cardController.deleteCard, (req, res, next) => {
  res.status(200).json(res.locals.deleteCard);
})

module.exports = router;
