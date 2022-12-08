import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import "./css/DrinkDetails.css"


const DrinkDetails = ({drinkName, isSearch}) => {

  let { id } = useParams();
  
  const [drinkDetail, setDrinkDetail] = useState(null)
  const ingredientUrl = `lookup.php?i=${id}`
  const drinkNameUrl = `search.php?s=${drinkName}`

  const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'
  const specUrl = isSearch ? drinkNameUrl : ingredientUrl

  const url = baseUrl + specUrl;

  useEffect(() => {
      fetch(url)
      .then((res) => res.json())
      .then((json) => {
          setDrinkDetail(json)
      })
      .catch(console.error)
  }, [isSearch] );
  

  return ( drinkDetail ?

     
            <>
            {drinkDetail.drinks.map((detailsMap,idx) => {
            return (
              <>
              <h2 className='detailsBack'>
                <a href={`/drinks/${detailsMap.strIngredient1}`}><i className="backLink"></i>{detailsMap.strIngredient1}</a>
              </h2>
              <div className="details-container" key={idx}>
                <img width={150} src={detailsMap.strDrinkThumb}></img>
                <div className='drinkGlass'>
                  <h3 className='drinkTitle'>{detailsMap.strDrink}</h3>
                  <h4>Preferred Glass:</h4><p>{detailsMap.strGlass}</p>
                </div>
                <div className='ingredientList'>
                  <h4>Ingredients:</h4>
                  <ul>
                    <li className="detailList">{detailsMap.strIngredient1}</li>
                    <li className="detailList">{detailsMap.strIngredient2}</li>
                    <li className="detailList">{detailsMap.strIngredient3}</li>
                    <li className="detailList">{detailsMap.strIngredient4}</li>
                    <li className="detailList">{detailsMap.strIngredient5}</li>
                    <li className="detailList">{detailsMap.strIngredient6}</li>
                    <li className="detailList">{detailsMap.strIngredient7}</li>
                    <li className="detailList">{detailsMap.strIngredient8}</li>
                    <li className="detailList">{detailsMap.strIngredient9}</li>
                    <li className="detailList">{detailsMap.strIngredient10}</li>
                    <li className="detailList">{detailsMap.strIngredient11}</li>
                    <li className="detailList">{detailsMap.strIngredient12}</li>
                    <li className="detailList">{detailsMap.strIngredient13}</li>
                    <li className="detailList">{detailsMap.strIngredient14}</li>
                    <li className="detailList">{detailsMap.strIngredient15}</li>
                  </ul>
                </div>
                <div className='mixingInstructions'>
                  <h4>Mixing instructions:</h4>
                  <p>{detailsMap.strInstructions}</p>
                </div>
              </div>
              </>
            )
          })} 

        </> 


        :
        <p> loading ..  </p>
    );
}
export default DrinkDetails