import React from 'react'
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import "../css/DrinkList.css"
import Sticky from 'react-stickynode';

// Componenent function.
const DrinkList = ({ingredientName, isSearchIngredient}) => 
{

// Id variable from URL.
  let { id } = useParams();

// State variables.
  const [drinkList , setDrinkList] = useState(null)
  const [drinkListInfo , setDrinkListInfo] = useState(null)

// Conditional variables for drink list by name search vs drink list by link click/ alcohol info URL variable.
  const ingredientUrlDrinkList = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`
  const drinkNameUrlDrinkList = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`
  const url = isSearchIngredient ? ingredientUrlDrinkList : drinkNameUrlDrinkList
  const drinkNameUrlInfo = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${id}`;

// Fetches API for drinks list and stores it as json in state everytime isSearchIngredient returns true.
  useEffect(() => 
  {
      fetch(url)
      .then((response) => response.json())
      .then((json) => 
      {
        setDrinkList(json)
      })
      .catch(console.error) 
  }, [isSearchIngredient]);

// Fetches API for alcohol info and stores it as json in state everytime isSearchIngredient returns true.
  useEffect(() => {
      fetch(drinkNameUrlInfo)
      .then((response) => response.json())
      .then((json) => {
        setDrinkListInfo(json.ingredients)
      })
      .catch(console.error) 
    }, [isSearchIngredient]);
   
// Conditional return.
  return ( drinkList && drinkListInfo ?
    <>
      <div>
        <Sticky top={50}>
          <h2 id='baseIngredients'> {id} </h2>
        </Sticky>
      </div>
      <div className='drinkInfo'>
        {drinkListInfo.map((drinkListInfoMap,drinkListInfoIdx) => 
          {
            return (
              <div key={drinkListInfoIdx}> 
                <h2>
                  {drinkListInfoMap.strIngredient}
                </h2>
                <h3> ABV:   
                  {drinkListInfoMap.strABV}%
                </h3>
                <h3>
                  {drinkListInfoMap.strDescription}
                </h3>
              </div>
                   )
          })
        }
      </div>
      <div className='ingredientSection'>
        <h2 className='backBox'>
          <a href={`/search`}><i className="backLink"></i>Change Base Ingredient</a>
        </h2>
        <section className='drinkList'>
          {drinkList.drinks.map((drinkListMap,drinkListIdx) => 
            {
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
            })
          }
        </section> 
      </div>
    </>
  :
    <p> loading .. ingredient doesnt match! </p>
        );
}

export default DrinkList