import React from 'react'
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import "./css/DrinkList.css"
import Sticky from 'react-stickynode';


const DrinkList = (props) => {

    let { id } = useParams();

    const [drinkList , setDrinkList] = useState(null)
    
    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`;
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setDrinkList(json)
        })
        .catch(console.error) 
      }, []);


  return ( drinkList ?
    <>
      <Sticky>
        <h2 className='baseIngredientDrinks'>{id}</h2>
      </Sticky>
    <div className='ingredientSection'>
      <h2 className='backBox'>
        <a href={`/search`}><i className="backLink"></i>Change Base Ingredient</a>
      </h2>
      <section className='drinkList'>
        {drinkList.drinks.map((drinkListMap,drinkListIdx) => {
          return (
            <Link to={`/drinks-details/${drinkListMap.idDrink}`} key={drinkListIdx} className='componentCSS'>
              <div>        
                <img width={150} src={drinkListMap.strDrinkThumb}></img>
              </div>
              <div className="cardTitle">
                {drinkListMap.strDrink}
              </div>
            </Link>
                 )
            })}
      </section> 
    </div>
    </>
      :
    <p> loading .. </p>
      );
}

export default DrinkList