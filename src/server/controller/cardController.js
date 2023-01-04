const cardDb = require('../../db/cardDb');

const cardController = {};

cardController.nextCard = async (req, res, next) => {
    try {

    console.log('just checking')

    const _id = req.params.id;
    const row = await cardDb.readAllCards();
    const ids = row.map(element => {
      return element._id; 
    })
    console.log('ids', ids);

    let idx = ids.findIndex((element) => {
      return element === Number(_id);  
    }); 
    
    console.log('idx', idx);

    const newIdx = (idx + 1) % ids.length; 

    console.log('newIdx', newIdx)

    res.locals.nextCard = row[newIdx]._id
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
  console.log('inside cardController.getAllCards');
  try {
    console.log('inside the Try cardController.getAllCards');
    const row = await cardDb.readAllCards();

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
    // sanitize post data
    const { user_id, title, front, back, difficulty, hints, scheduled } =
      req.body;
    const data = {
      user_id,
      title,
      front,
      back,
      difficulty,
      hints,
      scheduled,
    };

    console.log('creating data: ', data);
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

module.exports = cardController;