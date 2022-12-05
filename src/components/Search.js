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

      console.log(search)
  return (
    <div>Search</div>
  )
}

export default Search