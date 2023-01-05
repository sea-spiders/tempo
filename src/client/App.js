import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './Components/pages/LandingPage/LandingPage';
import Home from './Components/pages/Home/Home';
import Navbar from './Components/global/Navbar/Navbar';
import CreateDeck from './Components/create/CreateDeck/CreateDeck';
import CreateCard from './Components/create/CreateCard/CreateCard';
import FlashCard from './Components/cards/FlashcardDetails/FlashcardDetails';
import DeckPage from './Components/pages/DeckPage/DeckPage';

const App = () => {
  const leftItems = {
    home: '/home',
  };

  return (
    <>
      {/* {!email ? (
        <LandingPage />
      ) : ( */}
      <BrowserRouter>
        {/* Component 'Navbar' must be placed within browser router so that navbar links work */}
        {/* <Navbar leftItems={leftItems} /> */}
        {location.pathname !== '/' && <Navbar leftItems={leftItems} />}
        {/* <Navbar leftItems={leftItems} /> */}

        <div>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            {/* Home: shows DecksContainer */}
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/createDeck' element={<CreateDeck />} />
            <Route exact path='/createCard' element={<CreateCard />} />
            <Route exact path='/deck-page' element={<DeckPage />} />
            <Route exact path='/flashcard/:id' element={<FlashCard />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* )} */}
    </>
  );
};

export default App;
