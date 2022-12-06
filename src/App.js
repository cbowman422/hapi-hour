import React from 'react';
import DrinkDetails from './components/DrinkDetails';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useState } from 'react';

function App() {

const [ginClicked, setGinClicked] = useState(false);
const [vodkaClicked, setVodkaClicked] = useState(false);


  return (
    <div>
      <main className="container">
        <ul className="navBarSide">
          <li> <input type='radio' onClick={() => setGinClicked(current => !current)} ></input><span>Gin</span>
          </li>
          <li> <input type='radio' onClick={() => setVodkaClicked(current => !current)} ></input><span>Vodka</span>
          </li>
        </ul> 
        <div>
          <Routes>
            <Route path='/' element={<Search ginProp={ginClicked} vodkaProp={vodkaClicked}/>} />
            <Route path='/drinks/:id' element={ <DrinkDetails /> } />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
