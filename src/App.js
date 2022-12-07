import React from 'react';
import DrinkDetails from './components/DrinkDetails';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useState, useEffect } from 'react';
import DrinkList from './components/DrinkList';
import NotFound from './components/NotFound';
import RandomDrink from './components/RandomDrink';
import Home from './components/Home';

function App() {

  const [searchBarItem, setSearchBarItem] = useState('')


  // const handleItemChange = (e) => {
  //   const newSearchItem = e.target.value
  //   setTodoItem(newSearchItem)
    
  //   console.log(e)
  // }

  const [spiritList, setSpiritList] = useState([])

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
        <div>
          <RandomDrink />
        </div>
        <div>
          <a href="/search/">COCKTAILS</a>
        </div>
        <div>
          <input type="text" id="myInput"/>
        </div>
    </header>

  
    <main className="container">
      <div>
        <Routes>
          <Route path='/' element={<Home spirit={spiritList}/>} />
          <Route path='/search/' element={<Search spirit={spiritList}/>} />
          <Route path='/drinks/:id' element={<DrinkList />} />
          <Route path='/drinks-details/:idd' element={ <DrinkDetails /> } />
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


