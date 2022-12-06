import React from 'react'
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SloeGin = () => {
    const [sloeGin , setSloeGin] = useState(null)

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Sloe Gin";
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setSloeGin(json)
        })
        .catch(console.error) 
      }, []);


  return ( sloeGin ?

    <div>
      {sloeGin.drinks.map((sloeGinMap,idx) => {
        return (

          <Link to={`/drinks/${sloeGinMap.idDrink}`} key={idx} className='componentCSS'>
    
            <div className="cardTitle">
              {sloeGinMap.strDrink}
            </div>
            <div>        
              <img width={100} src={sloeGinMap.strDrinkThumb}></img>
            </div>

          </Link>
               )
          })} 
    </div>
      :
    <p> loading .. </p>
)
}

export default SloeGin