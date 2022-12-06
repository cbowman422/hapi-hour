import React from 'react';
import DrinkDetails from './components/DrinkDetails';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { useState } from 'react';

function App() {

const [filter, setFilter] = useState(false);

const [ginClicked, setGinClicked] = useState(false);

// function handleClick(){
//   setGinClicked(current => !current)
//   console.log(ginClicked)
// }
console.log(ginClicked)

  return (
    <div className='container'>
      <header className="header">
          <h1>
            <a href="/">Cocktails</a>
          </h1>
      </header>
      <main>
      <input type='radio' onClick={() => setGinClicked(current => !current)} ></input><span>Gin</span>
        <Routes>
          <Route path='/' element={<Search clickedGin={ginClicked}/>} />
          <Route path='/drinks/:id' element={ <DrinkDetails /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
