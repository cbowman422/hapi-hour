import React from 'react';
import DrinkDetails from './components/DrinkDetails';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useState, useEffect } from 'react';
import Sticky from 'react-stickynode';

function App() {

  const [ginClicked, setGinClicked] = useState(false);
  const [spiritList, setSpiritList] = useState([])

  useEffect(() => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      setSpiritList(json)
    })
    .catch(console.error) 
  }, []);



return (
  <div>
    <main className="container">
      <Sticky top={70}>
      <ul className="navBarSide">
        <p>Filters:</p>
        <li> <input type='checkbox' onClick={() => setGinClicked(current => !current)} ></input><span>Gin</span>
        </li>  
      </ul>
      </Sticky>
      <div>
        <Routes>
          <Route path='/' element={<Search ginProp={ginClicked}/>} />
          <Route path='/drinks/:id' element={ <DrinkDetails /> } />
        </Routes>
      </div>
    </main>
  </div>
);
}
export default App;


