import React from 'react';
import DrinkDetails from './components/DrinkDetails';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useState, useEffect } from 'react';
import DrinkList from './components/DrinkList';
import NotFound from './components/NotFound';

function App() {


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



return (
  <div>
    <main className="container">
 
      <div>
        <Routes>
          <Route path='/' element={<Search spirit={spiritList}/>} />
          <Route path='/drinks/:id' element={<DrinkList />} />
          <Route path='/drinks/:id/drinks-details/:idd' element={ <DrinkDetails /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  </div>
);
}
export default App;


