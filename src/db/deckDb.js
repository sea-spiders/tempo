const pool = require('./pool.js');

const deck = {}

/// Deck will need to be able to be able to read all decks, click into?, delete? 

// Read all decks for when we enter homepage and it shows all decks tied to user
deck.readAllDecks = async () => {
  try {
    const sql = `SELECT *
    FROM decks;`;
    const data = await pool.query(sql);
    return data.rows;
  } catch (err) {
    throw `In db.js:obj.readAllDecks: ${err.message}`;
  }
};

// When clicking a Create deck you can choose a Title
deck.createDeck = async (args) => {
    try {
      // this is the current time in format 2022-12-28 12:34:56
      const currentTime = new Date();
      const formattedTime = currentTime
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ');
  
      // parameterize sql arguments to prevent attacks
      const arr = [
        Number(args['user_id']),
        args['title'],
        args['scheduled'] === undefined ? formattedTime : args['scheduled'], // args['scheduled'] should have format 2022-12-28 12:34:56
      ];
  
      const sql = `INSERT INTO decks
      (user_id, title, scheduled)
      VALUES ($1, $2, $3)
      RETURNING *;`;
      // execute sql command
      const data = await pool.query(sql, arr);
      return data.rows[0];
    } catch (err) {
      throw `In db.js:obj.createDeck: ${err.message}`;
    }
  };

// Read a single deck for when we click into 
// Might not want this as when we click a deck it reads all cards with the deck id not reading the deck itself
// deck.readDeck = async (id) => {
//   try {
//     const sql = `SELECT *
//     FROM decks
//     WHERE _id=$1;`;
//     const data = await pool.query(sql, [id]);
//     // TODO: validate that there is only one row
//     return data.rows[0];
//   } catch (err) {
//     throw `In db.js:obj.readDeck: ${err.message}`;
//   }
// };

// Delete a deck
deck.deleteDeck = async (id) => {
    try {
      const sql = `DELETE 
      FROM decks 
      WHERE _id=$1 
      RETURNING *`; 
      const data = await pool.query(sql, [id]);
      return data.rows[0]; 
  
    } catch (err) {
      throw `In db.js: obj.deleteDeck: ${err.message}`; 
    }
  }

  module.exports = deck;