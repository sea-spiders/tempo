const cardDb = require('../../db/cardDb');

const cardController = {};

cardController.nextCard = async (req, res, next) => {
    try {

    const _id = req.params.id;
    const row = await cardDb.readAllCards();
    const ids = row.map(element => {
      return element._id; 
    })

    let idx = ids.findIndex((element) => {
      return element === Number(_id);  
    }); 
    
    const newIdx = (idx + 1) % ids.length; 

    res.locals.nextCard = row[newIdx]._id;
    return next();
  } catch (err) {
      next({
        log: 'error getting cards',
        status: 500,
        message: { err: err },
      });
    }
}

cardController.getCard = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const row = await cardDb.readCard(_id);
    // no card found
    // if (row === undefined) throw `no card with id=${_id} found`;
    if (row === undefined) next(err);
    
    res.locals.getCard = row;
    return next();

  } catch (err) {
      next({
        log: 'error getting single card',
        status: 500,
        message: { err: err },
      });
  }
}

cardController.getAllCards = async (req, res, next) => {
  try {
    // console.log('res.cookies: ', res.cookies);
    // console.log('req.cookies: ', req.cookies);
    // console.log('res.headers: ', res.headers);
    
    const user_id = req.cookies.id;
    const deck_id = req.params.id;
    const row = await cardDb.readAllCards(user_id, deck_id);
    // res status here
    res.locals.getAllCards = row;
    return next();
  } catch (err) {
    next({
      log: 'error getting cards',
      status: 500,
      message: { err: err },
    });
  }
}

cardController.createCard = async (req, res, next) => {
  try {
    const { 
      user_id, 
      title, 
      front, 
      back, 
      deck_id,
     } = req.body;

    const data = {
      user_id, 
      title, 
      front, 
      back, 
      deck_id,
    };

    const row = await cardDb.createCard(data);
  
    res.locals.createCard = row;
    return next();
    
  } catch (err) {
    next({
      log: 'error creating card',
      status: 500,
      message: { err: err },
    });
  }
}

cardController.deleteCard = async (req, res, next) => {
  try {
    const _id = req.params.id; 
    const row = await cardDb.deleteCard(_id); 

    // no card found
    // if (row === undefined) throw `no card with id=${_id} found`;
    if (row === undefined) next(err);

    res.locals.deleteCard = row;
    return next(); 

  } catch(err) {
    next({
      log: 'error deleting the card', 
      status: 500, 
      message: { err: err }, 
    }); 
  }
}

/*
//cardController.updateCard = (req, res, next) => {
    try {

    const { _id, user_id, title, front, back, difficulty, hints, scheduled } = req.body; 
    const data = { _id, user_id, title, front, back, difficulty, hints, scheduled }; 
    
    const row = await db.updateCard(data); 
    res.status(200).json(row); 
    console.log('updated sucessfully') 
    return next(); 

  } catch(err) {
    next({
      log: 'error updating the card', 
      status: 500, 
      message: { err: err }, 
    }); 
  }
}
*/

module.exports = cardController;