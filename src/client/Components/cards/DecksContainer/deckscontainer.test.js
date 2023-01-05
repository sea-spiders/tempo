import moxios from 'moxios';
import axios from 'axios';

describe('POST request', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should send a POST request', (done) => {
    moxios.wait(() => {
      // mostRecent... pulls the latest moxios request
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'Success',
      });
    });

    axios
      .post('/api/getAllDecks', {
        data: 'some data',
      })
      .then((response) => {
        expect(response.data).toEqual('Success');
        done();
      });
  });
});

// What I am still unclear on...
// if the moxios response must exactly match the real response from the server, or if it can be mutually exclusive.
// if the structure of the data being sent by axios in the test must exactly match the structure of the real request.
