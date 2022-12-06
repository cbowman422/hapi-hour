import React from 'react'
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Gin = () => {
    const [gin , setGin] = useState(null)

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setGin(json)
        })
        .catch(console.error) 
      }, []);


  return ( gin ?

    <div>
      {gin.drinks.map((ginMap,idx) => {
        return (

          <Link to={`/drinks/${ginMap.idDrink}`} key={idx} className='componentCSS'>
    
            <div className="cardTitle">
              {ginMap.strDrink}
            </div>
            <div>        
              <img width={100} src={ginMap.strDrinkThumb}></img>
            </div>

          </Link>
               )
          })} 
    </div>
      :
    <p> loading .. </p>
)
}

export default Gin