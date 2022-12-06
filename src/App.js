import React from 'react';
import DrinkDetails from './components/DrinkDetails';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useState } from 'react';
import Sticky from 'react-stickynode';

function App() {


const [ginClicked, setGinClicked] = useState(false);
const [vodkaClicked, setVodkaClicked] = useState(false);
const [whiskeyClicked, setWhiskeyClicked] = useState(false);


return (
  <div>
    <main className="container">
      <Sticky top={70}>
      <ul className="navBarSide">
        <p>Filters:</p>
        <li> 
        </li> <input type='checkbox' onClick={() => setGinClicked(current => !current)} ></input><span>Gin</span> 
        <li> <input type='checkbox' onClick={() => setVodkaClicked(current => !current)} ></input><span>Vodka</span>
        </li>
        <li> <input type='checkbox' onClick={() => setWhiskeyClicked(current => !current)} ></input><span>Whiskey</span>
        </li>
      </ul>
      </Sticky>
      <div>
        <Routes>
          <Route path='/' element={<Search ginProp={ginClicked} vodkaProp={vodkaClicked} whiskeyProp={whiskeyClicked}/>} />
          <Route path='/drinks/:id' element={ <DrinkDetails /> } />
        </Routes>
      </div>
    </main>
  </div>
);
}
export default App;


