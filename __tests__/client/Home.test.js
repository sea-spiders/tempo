import React from 'react';
import { create } from 'react-test-renderer';
import DecksContainer from '../../src/client/Components/cards/DecksContainer/DecksContainer.jsx';
import Home from '../../src/client/Components/pages/Home/Home.js';

test('Home is rendering properly', () => {
  const component = create(<Home />);
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});

// making sure there is an instance of <DecksContainer/> rendered properly inside of <Home/>
test('Home should render the DecksContainer component', () => {
  const component = create(<Home />);
  const root = component.root;
  const deck = root.findByType(DecksContainer);
  expect(deck).toBeDefined();
});
