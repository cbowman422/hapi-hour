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
 
      const [drinkListInfo , setDrinkListInfo] = useState(null)
    
      useEffect(() => {
          const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${id}`;
          fetch(url)
          .then((response) => response.json())
          .then((json) => {
            setDrinkListInfo(json)
          })
          .catch(console.error) 
        }, []);
   

        return ( drinkList && drinkListInfo ?
          <>
          <div>
            <Sticky top={100}>
              <h2 id='baseIngredients'>{id}</h2>
            </Sticky>
          </div>


        <div className='drinkInfo'>
        {drinkListInfo.ingredients.map((drinkListInfoMap,drinkListInfoIdx) => {
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
                            })}

        </div>


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