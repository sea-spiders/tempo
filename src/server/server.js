const path = require('path');
const passport = require('passport');
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/apiRouter.js');
const authRouter = require('./routes/authRouter.js');

const session = require('express-session'); // Required for OAuth Session

const { SESSION_SECRET } = require('../../secrets.js');
const app = express();
const PORT = 3000;

// Session middle parses the OAuth JWT
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.authenticate('session'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// To get around CORS we normally set response header 
// However, when ussing cookies many browsers do not allow Access-Control-Allow-Origin '*'
// Instead, we use the 'cors' npm module.
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

// Static index file
app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

// Routers
app.use('/api', apiRouter);
app.use('/auth', authRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
