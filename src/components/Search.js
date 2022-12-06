import React from 'react'
import {useState, useEffect } from 'react'

const Search = () => {
    const [search , setSearch] = useState(null)

    useEffect(() => {
        const url = "www.thecocktaildb.com/api/json/v1/1/random.php";
        fetch(url)// url string
        .then((response) => response.json())//wait for json response
        .then((json) => {// then take json and exec
          setSearch(json)
        })
        .catch(console.error) // Catch and log any errors to the console
      }, []);

  return (
    <div className='searchNav'>
        <input className='searchName' type="text" placeholder="Search..."></input>
        <div className='filters'>
            <div className='ingredient'>
                <input type='radio'></input><span>Gin</span>
                {/*https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin */}   
            </div>
            {search.map((search, idx) => {
                return (
                <div key={idx}>{search.strDrink}</div>
        )
      })}

        </div>
    </div>
  )
}

export default Search