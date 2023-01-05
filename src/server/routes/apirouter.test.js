const request = require('supertest');
const apiRouter = require('./apiRouter');
const deckController = require('../controller/deckController')
const server = require('../server')

describe('testing GET routes', () => {

  it('should return a 200 status code', (completed) => {
    request(server)
      .get('/api/getAllDecks')
      .set('Cookie', 'id=1')
      .expect(200, completed);
  });

  it('should return a 200 status code', (completed) => {
    request(server)
      .get('/api/getCardsInDeck/1')
      .set('Cookie', 'id=1')
      .expect(200, completed);
  });
});

describe('API Router POST routes', () => {

  it('should return a 200 status code with creating a deck', (completed) => {
    request(server)
      .post('/api/deck')
      .send({ "user_id": 1, "title": "Adjectives"})
      .set('Cookie', 'id=1')
      .expect(200, completed);
  });

  it('should return a 200 status code with creating a card', (completed) => {
    request(server)
      .post('api/cards')
      .send({
        "user_id": 1,
        "title": "Testing",
        "front": "Test 3",
        "back": "Answer 3",
        "deck_id": 1,
        })
      .set('Cookie', 'id=1')
      .expect(200, completed);
  });
});

// we must require-in the apiRouter.
// I am unclear if the data structure that is received (line 8) must exactly match the real data structure from frontend request.

// /TESTING MIDDLEWARE:
// example:

// use spyOn built-in function to check if middleware has beenCalled()

// test('middleware is run when calling /api/getAllDecks', async () => {
//   // Spy on the middleware function so we can check if it was called
//   const spy = jest.spyOn(deckController, 'getAllDecks');

//   // Call the route
//   // await request(server).get('/api/getAllDecks');
//     await request(server)
//       .get('/api/getAllDecks')
//       // .send({ data: 'some data' })
//       .set('Cookie', 'id=1')
      
// expect(spy).toHaveBeenCalledTimes(1);

  // Check if the middleware function was called
  
// });

//

// beforeAll(async () => {
       
//   connection = await mongoose.connect('mongodb://localhost:27017/test_'+process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true });
//   db = mongoose.connection;
//   const collection = process.env.COLLECTION;
//   await db.createCollection(collection);
// });
// afterAll(async () => {
//   const collection = "test_"+process.env.COLLECTION;
//   await db.dropCollection(collection);
//   await db.dropDatabase();
//   await db.close();
//   await connection.close();
// });




// // spyON example:
// import video from './video';

// test('plays video', () => {
//   const spy = jest.spyOn(video, 'play');
//   video.play();

//   expect(spy).toHaveBeenCalledTimes(1);
// });

// // spyON example:

// test('calls deckController', () => {
//   const spy = jest.spyOn(deckController, 'getAllDecks');
//   deckController.getAllDecks();

//   expect(spy).toHaveBeenCalledTimes(1);
// });

// jest.mock('../controller/deckController', () => {
//   return jest.fn((req, res, next) => {
//     res.end() 
//   });
// });

// afterEach(() => {
//   jest.clearAllMocks()
// })

// it(`should use "middlewareA" for a request to '/api/getAllDecks'`, async () => {
//   await request(server)
//     .get('/api/getAllDecks')
//     .set('Cookie', 'id=1')
//   expect(deckController.getAllDecks).toBeCalledTimes(1)
// })