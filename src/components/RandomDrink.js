import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const RandomDrink = () => {



    const [randomDrink , setRandomDrink] = useState(null)
    
    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setRandomDrink(json)
        })
        .catch(console.error) 
      }, []);




  return ( randomDrink ?

    <div>
      {randomDrink.drinks.map((randomDrinkMap,randomDrinkIdx) => {
     return (

    <div className='container' key={randomDrinkIdx}>
      <p>
      <Link to={`/drinks/:id/drinks-details/${randomDrinkMap.idDrink}`} > Randomize!
      </Link>
      </p>
    </div>

     )
    })} 
    </div>


      :
    <p> loading .. </p>
  )
}

export default RandomDrink