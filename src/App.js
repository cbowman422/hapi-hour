import React from 'react';
import DrinkDetails from './components/DrinkDetails';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useState, useEffect } from 'react';
import Sticky from 'react-stickynode';
import Filters from './components/Filters';

function App() {
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const url = "http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      setFilter(json)
  })
  .catch(console.error) 
}, []);

const filterState = {
  Gin: false,
  Vodka: false,
}

const [ginClicked, setGinClicked] = useState(filterState.Gin);
const [vodkaClicked, setVodkaClicked] = useState(filterState.Vodka);

return ( filter ?
  <div>
    <main className="container">
      <Sticky top={70}>
        <ul className="navBarSide">
          <label><p>Filters:</p></label>
          <li> <input type='checkbox' onClick={() => setGinClicked(current => !current)} ></input><span>Gin</span>
          </li>
          <li> <input type='checkbox' onClick={() => setVodkaClicked(current => !current)} ></input><span>Vodka</span>
          </li>
        </ul>
      </Sticky>
      <div>
        <Routes>
          {/* {filter.drinks.map((items) => {
              return ( 
                <Route path={`/:${items.strIngredient1}`} element={<Filters key={items.strIngredient1}/>} />
              )
            })
          } */}
          <Route path='/' element={<Search ginProp={ginClicked} vodkaProp={vodkaClicked}/>} />
          <Route path='/drinks/:id' element={ <DrinkDetails /> } />
          <Route path='/:id' element={ <Filters /> } />
        </Routes>
      </div>
    </main>
  </div>
  :
  <p> loading .. </p>
);
}
export default App;
