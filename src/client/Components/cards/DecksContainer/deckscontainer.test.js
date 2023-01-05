import moxios from 'moxios';
import axios from 'axios';

import DecksContainer from './DecksContainer';

// ** old moxios test was NOT showing "test coverage" on report... component was not actually being called/run


describe('DecksContainer', () => {
  beforeEach(() => {
    moxios.install();
  });
  
  afterEach(() => {
    moxios.uninstall();
  });

  it('should send a POST request', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'Success'
      });
    });

    const wrapper = shallow(<DecksContainer />);
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    setTimeout(() => {
      expect(wrapper.state('response')).toEqual('Success');
      done();
    }, 100);
  });
});




// ----------------------------





// describe('POST request', () => {
//   beforeEach(() => {
//     moxios.install();
//   });

//   afterEach(() => {
//     moxios.uninstall();
//   });

//   it('should send a POST request', (done) => {
//     moxios.wait(() => {
//       // mostRecent... pulls the latest moxios request
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: 'Success',
//       });
//     });

//     axios
//       .post('/api/getAllDecks', {
//         data: 'some data',
//       })
//       .then((response) => {
//         expect(response.data).toEqual('Success');
//         done();
//       });
//   });
// });

// What I am still unclear on...
// if the moxios response must exactly match the real response from the server, or if it can be mutually exclusive.
// if the structure of the data being sent by axios in the test must exactly match the structure of the real request.
