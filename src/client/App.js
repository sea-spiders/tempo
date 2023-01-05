import axios from 'axios';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPicture } from './Redux/slices/userSlice';
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

  // On first render, get user data
  const dispatch = useDispatch();
  useEffect(() => {
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: '/auth/user',
    }).then((res) => {
      if (res.data) {
        dispatch(setEmail(res.data.email));
        dispatch(setPicture(res.data.picture));
      }
    });
  }, []);
  const email = useSelector((state) => state.user.email);

  return (
    <>
      {!email ? (
        <LandingPage />
      ) : (
        <BrowserRouter>
            {/* Component 'Navbar' must be placed within browser router so that navbar links work */}
          {/* <Navbar leftItems={leftItems} /> */}
            {/* {location.pathname !== '/' && <Navbar />} */}
            <Navbar leftItems={leftItems} />

          <div>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                {/* Home: shows DecksContainer */}
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/createDeck" element={<CreateDeck />} />
              <Route exact path="/createCard" element={<CreateCard />} />
              <Route exact path="/deck-page" element={<DeckPage />} />
              <Route exact path="/flashcard/:id" element={<FlashCard />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
