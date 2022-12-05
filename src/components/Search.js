import React from 'react'
import {useState, useEffect } from 'react'

const Search = () => {
    const [search , setSearch] = useState(null)

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
        fetch(url)// url string
        .then((response) => response.json())//wait for json response
        .then((json) => {// then take json and exec
          setSearch(json)
        })
        .catch(console.error) // Catch and log any errors to the console
      }, []);

      console.log(search)
  return (
    <>
    <input type="text" placeholder="Search..."></input>
    </>
  )
}

export default Search