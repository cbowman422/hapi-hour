import React from 'react';
import DrinkDetails from './components/DrinkDetails';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className='container'>
      <header>
          <h1>
            <a href="/">Cocktails</a>
          </h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/drinks/:id' element={ <DrinkDetails /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
