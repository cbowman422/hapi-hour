import React from 'react';
import DrinkDetails from './components/DrinkDetails';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useState, useEffect } from 'react';
import DrinkList from './components/DrinkList';
import NotFound from './components/NotFound';
import RandomDrink from './components/RandomDrink';
import { Link } from 'react-router-dom';

function App() {


  const [searchBarItem, setSearchBarItem] = useState('')

  const [spiritList, setSpiritList] = useState([])

  const [isSearch, setIsSearch] = useState(false)


  const nameClick = () => {
    setIsSearch(current => !current)
    if (setIsSearch) {

      setTimeout(function() {
        setIsSearch(current => !current)
         }, 1);

    } else {

    }
  }

  const handleItemChange = (e) => {
    const newSearchItem = e.target.value
    setSearchBarItem(newSearchItem)
  }

  useEffect(() => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      setSpiritList(json.drinks)
    })
    .catch(console.error) 
  }, []);
 


return ( spiritList ?
  <div>
    <header className="header" id="sticky">
          <h1>
            <a href="/search/">COCKTAILS</a>
            <input type="text" id="myInput" value={searchBarItem} onChange={handleItemChange} /> 
             
             <Link to={'/drinks-details/'}> 
              <button onClick={nameClick}> 
               by name
              </button>
             </Link>

            <RandomDrink />
        </h1>
    </header>

  
    <main className="container">
      <div>
        <Routes>
          <Route path='/' element={<Search spirit={spiritList}/>} />
          <Route path='/search/' element={<Search spirit={spiritList}/>} />
          <Route path='/drinks/:id' element={ <DrinkList />} />
          <Route path='/drinks-details/' element={ <DrinkDetails drinkName={searchBarItem} isSearch={isSearch} /> } />
          <Route path='/drinks-details/:id' element={ <DrinkDetails /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  </div>
  :
  <p> loading .. </p>
);
}
export default App;


