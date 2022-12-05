import React from 'react';
import Drinks from './components/Drinks';
import DrinkDetails from './components/DrinkDetails';
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Cocktails</a>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Drinks />} />
          <Route path='/details/:id' element={ <DrinkDetails /> } />
        </Routes>
      </main>
    </>
  );
}

export default App;
