const pool = require('./pool.js');

const user = {};

user.addUser = async (args) => {
    try {
      const arr = [
        args['sub'],
        args['picture'],
        args['email'],
        args['email_verified'],
      ];
      const sql = `INSERT INTO GoogleUserInfo
      (sub, picture, email, email_verified)
      VALUES ($1, $2, $3, $4)
      RETURNING _id;`;
      const data = await pool.query(sql, arr);
      return data.rows[0]._id;
    } catch (err) {
      console.log('addUser', err);
    }
  };
  
  user.getUser = async (sub) => {
    try {
      const sql = `SELECT * 
      FROM GoogleUserInfo
      WHERE GoogleUserInfo.sub=$1`;
      const data = await pool.query(sql, [sub]);
      if (data.rows.length === 0) {
        return null;
      } else if (data.rows.length === 1) {
        return data.rows[0];
      } else {
        console.warn('more than one user found');
        throw '';
      }
    } catch {
      console.log('crash in db.getUser');
    }
  };

  module.exports = user;