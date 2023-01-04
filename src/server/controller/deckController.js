const deckDb = require('../../db/deckDb');

const deckController = {};

deckController.getAllDecks = async (req, res, next) => {
  //console.log('inside get all decks');
  try {
    const row = await deckDb.readAllDecks();

    // res status here
    res.locals.getAllDecks = row;
    return next();
  } catch (err) {
    next({
      log: 'error getting Decks',
      status: 500,
      message: { err: err },
    });
  }
}

deckController.createDeck = async (req, res, next) => {
    try {
      // sanitize post data
      const { user_id, title, scheduled } =
        req.body;
      const data = {
        user_id, 
        title,
        scheduled,
      };
  
      console.log('creating data: ', data);
      const row = await deckDb.createDeck(data);
    
      res.locals.createDeck = row;
  
      return next();
      
    } catch (err) {
      next({
        log: 'error creating deck',
        status: 500,
        message: { err: err },
      });
    }
  }

deckController.deleteDeck = async (req, res, next) => {
    try {
      const _id = req.params.id; 
      const row = await deckDb.deleteDeck(_id); 
  
      // no card found
      // if (row === undefined) throw `no card with id=${_id} found`;
      if (row === undefined) next(err);
  
      res.locals.deleteDeck = row;
      return next(); 
  
    } catch(err) {
      next({
        log: 'error deleting the deck', 
        status: 500, 
        message: { err: err }, 
      }); 
    }
  }

  module.exports = deckController;