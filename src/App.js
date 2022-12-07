import React from 'react';
import DrinkDetails from './components/DrinkDetails';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useState, useEffect } from 'react';
import DrinkList from './components/DrinkList';
import NotFound from './components/NotFound';
import RandomDrink from './components/RandomDrink';

function App() {

  const [searchBarItem, setSearchBarItem] = useState('')


  const handleItemChange = (e) => {
    const newSearchItem = e.target.value
    setTodoItem(newSearchItem)
    
    console.log(e)
  }

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
    <main className="container">

    <header className="header" id="sticky">
          <h1>
            <a href="/">Cocktails</a>
            <input type="text" id="myInput" value={searchBarItem}/> 
            <RandomDrink />
        </h1>
    </header>
    <div className='homeContainer'>
      <img src='https://imgur.com/jFROHy1.jpg'/>
      <h1>WELCOME</h1>
    </div>
    <main className="container">
      <div>
        <Routes>
          <Route path='/' element={<Search spirit={spiritList}/>} />
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


