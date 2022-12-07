import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const NotFound = () => {



    const [notFound , setNotFound] = useState(null)
    
    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setNotFound(json)
        })
        .catch(console.error) 
      }, []);




  return ( notFound ?

    <div>
      {notFound.drinks.map((notFoundMap,notFoundIdx) => {
     return (

    <div className='container' key={notFoundIdx}>
      <h1>404 - Not Found</h1>
      <h1>
      <Link to={`/drinks-details/${notFoundMap.idDrink}`} > Try this random Cocktail!
      </Link>
      </h1>
    </div>

     )
    })} 
    </div>


      :
    <p> loading .. </p>
  )
}

export default NotFound