import React from 'react'
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DrinkDetails from './DrinkDetails'
import { useParams } from 'react-router-dom'

const Filters = () => {
    const [ingredient , setIngredient] = useState(null);

    let id = "Gin";
    // let { id } = useParams();

    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`;
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setIngredient(json)
        })
        .catch(console.error) 
      }, []);

      return ( ingredient ?
        <div>
          {ingredient.drinks.map((ingredientMap, idx) => {
            return (
              <Link to={`/drinks/${ingredientMap.idDrink}`} key={idx} className='componentCSS'>
                <div>
                  <img width={150} src={ingredientMap.strDrinkThumb}></img>
                </div>
                <div className="cardTitle">
                  {ingredientMap.strDrink}
                </div>
              </Link>
                   )
              })}
        </div>
          :
        <p> loading .. </p>
    )
}

export default Filters