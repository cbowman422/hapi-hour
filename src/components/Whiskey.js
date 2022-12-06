import React from 'react'
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Whiskey = () => {
    const [whiskey , setWhiskey] = useState(null)

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey";
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setWhiskey(json)
        })
        .catch(console.error) 
      }, []);


  return ( whiskey ?

    <div>
      {whiskey.drinks.map((whiskeyMap,idx) => {
        return (

          <Link to={`/drinks/${whiskeyMap.idDrink}`} key={idx} className='componentCSS'>
    
            <div className="cardTitle">
              {whiskeyMap.strDrink}
            </div>
            <div>        
              <img width={100} src={whiskeyMap.strDrinkThumb}></img>
            </div>

          </Link>
               )
          })} 
    </div>
      :
    <p> loading .. </p>
)
}

export default Whiskey