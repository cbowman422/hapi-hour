import React from 'react'
import {useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Gin from './Gin'
import Vodka from './Vodka'
import Rum from './Rum'
import Tequilla from './Tequila'
import DrinkDetails from './DrinkDetails'

const Search = () => {
    const [search , setSearch] = useState(null)

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?s=";
        fetch(url)// url string
        .then((response) => response.json())//wait for json response
        .then((json) => {// then take json and exec
          setSearch(json)
        })
        .catch(console.error) // Catch and log any errors to the console
      }, []);
      console.log(search)
      function handleCheck(){
        return (
          <h2>Checked!</h2>
        )
      }


  return (
    <div className='searchNav'>
        <input className='searchName' type="text" placeholder="Search..."></input>
        <div className='filters'>
            <div className='ingredient'>
                <input type='checkbox' onClick={handleCheck()}></input><span>Gin</span>
                <input type='checkbox' onClick={handleCheck()}></input><span>Vodka</span>
                <input type='checkbox' onClick={handleCheck()}></input><span>Rum</span>
                <input type='checkbox' onClick={handleCheck()}></input><span>Tequila</span>
            </div>
        </div>
    </div>
  )
}

export default Search




