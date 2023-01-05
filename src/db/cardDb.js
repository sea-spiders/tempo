const pool = require('./pool.js');

const card = {};

card.readCard = async (id) => {
  try {
    const sql = `SELECT *
    FROM cards
    WHERE _id=$1;`;
    const data = await pool.query(sql, [id]);
    // TODO: validate that there is only one row
    return data.rows[0];
  } catch (err) {
    throw `In db.js:obj.readCard: ${err.message}`;
  }
};

// Read all cards will need to get passed the deck id in the fetch/the route endpoint so it knows the WHERE it is actually searching
// Did not finish setting up so if their is an error with grabing page look here
//Will eventually need read all cards to select from a where deck // WHERE deck_id=$1 ;
card.readAllCards = async (user_id, deck_id) => {
    try {
      //seeing our cookie
      const sql = `SELECT *
      FROM cards
      WHERE user_id=${user_id}
      AND
      deck_id=${deck_id}`;
      const data = await pool.query(sql);
      return data.rows;
    } catch (err) {
      throw `In db.js:obj.readAllCards: ${err.message}`;
    }
  };

  card.createCard = async (args) => {
    try {

      // parameterize sql arguments to prevent attacks
      const arr = [
        Number(args['user_id']),
        args['title'],
        args['front'],
        args['back'],
        args['deck_id'],
      ];

      const sql = `INSERT INTO cards
      (user_id, title, front, back, deck_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;`;
      // execute sql command
      const data = await pool.query(sql, arr);
      return data.rows[0];
    } catch (err) {
      throw `In db.js:obj.createCard: ${err.message}`;
    }
  };

  card.deleteCard = async (id) => {
    try {
      const sql = `DELETE FROM cards 
      WHERE _id=$1 RETURNING *`; 
      const data = await pool.query(sql, [id]);
      return data.rows[0]; 
  
    } catch (err) {
      throw `In db.js: obj.deleteCard: ${err.message}`; 
    }
  }
  // card.updateCard = async (args) => {
  //   try {
  //     // console.log('checking for update'); 
  //     // console.log(args); 
  //     const selectUserSQL = ` SELECT * FROM cards WHERE _id=$1`;
  //     const data1 = await pool.query(selectUserSQL, [Number(args['_id'])]);
  //     console.log('data1', data1.rows[0]); 
  
  //     const arr = [
  //       Number(args['_id']),
  //       args['user_id'] === undefined ? data1.rows[0].user_id : args['user_id'],
  //       args['title'] === undefined ? data1.rows[0].title : args['title'],
  //       args['front'] === undefined ? data1.rows[0].front : args['front'],
  //       args['back'] === undefined ? data1.rows[0].back : args['back'],
  //       Number(args['difficulty']) === undefined ? data1.rows[0].difficulty : args['difficulty'],
  //       args['hints'] === undefined ? data1.rows[0].hints : args['hints'],
  //       args['scheduled'] === undefined ? data1.rows[0].scheduled : args['scheduled'],
  //     ];
  
  //     const updateUserSQL = ` UPDATE cards
  //     SET title = $3,
  //     user_id = $2, 
  //     front = $4,
  //     back = $5,
  //     difficulty = $6,
  //     hints = $7,
  //     scheduled = $8
  //     WHERE _id = $1`;
  
  //     const data2 = await pool.query(updateUserSQL, arr);
  
  //   } catch (err) {
  //     throw `In db.js: obj.updateCard: ${err.message}`; 
  //   }
  // }


  
module.exports = card;