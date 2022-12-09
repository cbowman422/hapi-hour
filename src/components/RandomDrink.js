import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Componenent function
const RandomDrink = () =>
{

// State variables
  const [refreshPage] = useState(false)
  const [randomDrink , setRandomDrink] = useState(null)

// Function that refreshes the state, thus re rendering the useEffect
  const refreshPageFunction = () =>
  {
    refreshPage(current => !current)
      setTimeout(function() 
      {
        refreshPage(current => !current)
      }, 1);
  }

// Fetches API and stores it as json in state at page load.
  useEffect(() =>
  {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
      fetch(url)
      .then((response) => response.json())
      .then((json) => 
      {
        setRandomDrink(json)
      })
      .catch(console.error)
  }, []);
  
// Conditional return
  return ( randomDrink ?
    <div>
      {randomDrink.drinks.map((randomDrinkMap,randomDrinkIdx) =>
        {
          return (
            <div className='random' key={randomDrinkIdx}>
              <Link to={`/drinks-details/${randomDrinkMap.idDrink}`} onClick={refreshPageFunction} > Randomize!
              </Link>
            </div>
                 )
        })
      }
    </div>
  :
    <p> </p>
        )
}

export default RandomDrink