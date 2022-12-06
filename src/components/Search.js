import React from 'react'
import {useState, useEffect } from 'react'

const Search = () => {
    const [search , setSearch] = useState(null)

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setSearch(json)
        })
        .catch(console.error) 
      }, []);


  return ( search ?

    <div>
      {search.drinks.map((searchMap,idx) => {
        return (


      <div key={idx} className='searchNav'>
        {/* <input className='searchName' type="text" placeholder="Search..."></input>
        <div className='filters'>
          <div className='ingredient'>
          <input type='radio'></input><span>Gin</span>
          </div> */}
          <div className="result">
            {searchMap.strDrink}        
          </div>
      
        {/* </div> */}
      </div>
               )
          })} 
    </div>
      :
    <p> loading .. </p>
)
}

export default Search