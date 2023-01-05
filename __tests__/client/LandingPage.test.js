import React from 'react';
import { create } from 'react-test-renderer';

test('Home is rendering properly', () => {
  const component = create(<LandingPage />);
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});
