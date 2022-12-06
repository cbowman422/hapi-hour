import React from 'react';
import Drinks from './components/Drinks';
import DrinkDetails from './components/DrinkDetails';
import Search from './components/Search';
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
          <Route path='/' element={<Search />} />
          <Route path='/drinks/:id' element={<Drinks />} />
          <Route path='/drinks/:id/details/:idx' element={ <DrinkDetails /> } />
        </Routes>
      </main>
    </>
  );
}

export default App;
