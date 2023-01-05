import React from 'react';
import { create, act } from 'react-test-renderer';
import { useNavigate } from 'react-router-dom';
import DeckPage from '../../src/client/Components/pages/DeckPage/DeckPage';
import Flashcard from '../../src/client/Components/cards/Flashcard/Flashcard';

/*
test('DeckPage is rendering properly', () => {
  const component = create(<DeckPage />);
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});

// making sure there is an instance of <Flashcard/> rendered properly inside of <DeckPage/>
test('DeckPage should render the Flashcard component', () => {
  const component = create(<DeckPage />);
  const root = component.root;
  const deck = root.findByType(Flashcard);
  expect(deck).toBeDefined();
});
*/


// 

test('DeckPage should navigate to the Flashcard page when the Flashcard component is clicked', () => {
  const navigate = jest.fn();
  jest.spyOn(react-router-dom, 'useNavigate').mockImplementation(() => navigate);

  const component = create(<DeckPage />);
  const root = component.root;
  const flashcard = root.findByType(Flashcard);

  act(() => {
    flashcard.props.onClick();
  });

  expect(navigate).toHaveBeenCalledWith('/flashcard');
});


// testing the useNavigate hook with jest.mockImplementation
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
  }));