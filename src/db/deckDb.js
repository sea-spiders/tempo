const pool = require('./pool.js');

const deck = {}

/// Deck will need to be able to be able to read all decks, click into?, delete? 

// Read all decks for when we enter homepage and it shows all decks tied to user
deck.readAllDecks = async (user_id) => {
  try {
    const sql = `SELECT *
    FROM decks 
    WHERE user_id=${user_id};`;
    const data = await pool.query(sql);
    return data.rows;
  } catch (err) {
    throw `In db.js:obj.readAllDecks: ${err.message}`;
  }
};

// When clicking a Create deck you can choose a Title
deck.createDeck = async (args) => {
    try {
      // parameterize sql arguments to prevent attacks
      const arr = [
        Number(args['user_id']),
        args['title'],
      ];

      const sql = `INSERT INTO decks
      (user_id, title)
      VALUES ($1, $2)
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