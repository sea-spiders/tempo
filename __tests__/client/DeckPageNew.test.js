import React from 'React';
import { render, fireEvent } from '@testing-library/react';

import { useNavigate } from 'react-router-dom';
import DeckPage from '../../src/client/Components/pages/DeckPage/DeckPage';
import { act } from 'react-test-renderer/act';


describe('Unit testing React components', () => {

  describe('LabeledText', () => {
    let text;
    const props = {
      label: 'Mega',
      text: 'Markets',
    };

    beforeAll(() => {
      text = render(<DeckPage />);
    });

    test('Renders the passed-in text with the label in bold', () => {
      expect(text.getByText('Verb')).toHaveTextContent('Verb');
    });
  });
});




// sorry to hijack ur space.

// test to check if DeckPage button to create a card is working/routing properly:

/*
jest.mock('react-router-dom', () => {
  return {
    useNavigate: jest.fn()
  };
});

test('button on DeckPage component navigates to the correct route', () => {
  const navigateMock = jest.fn();
  (useNavigate as jest.Mock).mockImplementation(() => navigateMock);

  const { getByText } = render(<DeckPage />);
  const button = getByText('Create New Card');

  act(() => {
    fireEvent.click(button);
  });

  expect(navigateMock).toHaveBeenCalledWith('/createcard');
});

*/