const request = require('supertest');
const app = require('./apiRouter');

describe('POST /api/getAllDecks', () => {
  it('should return a 200 status code', (completed) => {
    request(app)
      .post('/api/getAllDecks')
      .send({ data: 'some data' })
      .expect(200, completed);
  });
});

// we must require-in the apiRouter.
// I am unclear if the data structure that is received (line 8) must exactly match the real data structure from frontend request.
