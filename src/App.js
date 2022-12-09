import React from 'react';
import DrinkDetails from './components/DrinkDetails';
import IngredientOneList from './components/IngredientOneList';
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
  const [isSearchIngredient, setIsSearchIngredient] = useState(false)


  // Search drink list by name cick function to reset state to false after click
  const nameClick = () => {
    setIsSearch(current => !current)
    if (setIsSearch) {

      setTimeout(function() {
        setIsSearch(current => !current)
         }, 1);

    } else {

    }
  }


  // Search drink list by ingredient cick function to reset state to false after click
  const ingredientClick = () => {
    setIsSearchIngredient(current => !current)
    if (setIsSearchIngredient) {

      setTimeout(function() {
        setIsSearchIngredient(current => !current)
         }, 1);

    } else {

    }
  }



  // Event handler for setting the search bar input to state
  const handleItemChange = (e) => {
    const newSearchItem = e.target.value.toUpperCase()
    setSearchBarItem(newSearchItem)
  }


  // Grabs the list of ingredients 1 from API
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
        <div className='randomDrinkBtn'>
          <RandomDrink />
        </div>
        <div className='pageTitle'>
          <a href="/search">H-API HOUR</a>
        </div>
        <div className='searchBar'>
          <input type="text" id="myInput" value={searchBarItem} onChange={handleItemChange} placeholder='Search Cocktail..' />
          <Link to={`/drinks-details/${searchBarItem}`}> 
            <button onClick={nameClick} className="searchName"> 
              by name
            </button>
          </Link>
          <Link to={`/drinks/${searchBarItem}`}> 
              <button onClick={ingredientClick} className="searchBase"> 
               by base
              </button>
          </Link>
        </div>
    </header>
    <main className="container">
      <div>
        <Routes>
          <Route path='/' element={<IngredientOneList spirit={spiritList} visitProp={false}/>} />
          <Route path='/search/' element={<IngredientOneList spirit={spiritList} visitProp={true}/>} />
          <Route path='/drinks/:id' element={ <DrinkList ingredientName={searchBarItem} isSearchIngredient={isSearchIngredient} />} />

          {/* <Route path='/drinks-details/' element={ <DrinkDetails drinkName={searchBarItem} isSearch={isSearch}/>} /> */}

          <Route path='/drinks-details/:id' element={ <DrinkDetails drinkName={searchBarItem} isSearch={isSearch} /> } />

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


