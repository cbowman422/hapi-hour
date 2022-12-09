import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import "./css/DrinkDetails.css"

// Componenent function.
const DrinkDetails = ({drinkName, isSearch}) => 
{

// Id variable from URL.
  let { id } = useParams();

// State variables.
  const [drinkDetail, setDrinkDetail] = useState(null)

// Conditional variables for drink details by name search vs drink details by link click.
  const ingredientUrl = `lookup.php?i=${id}`
  const drinkNameUrl = `search.php?s=${drinkName}`
  const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'
  const specUrl = isSearch ? drinkNameUrl : ingredientUrl
  const url = baseUrl + specUrl;

// Fetches API and stores it as json in state everytime isSearch returns true.
  useEffect(() => 
  {
      fetch(url)
      .then((res) => res.json())
      .then((json) => 
      {
          setDrinkDetail(json.drinks)
      })
      .catch(console.error)
  }, [isSearch] );
  
// Conditional return
  return ( drinkDetail ?   
    <>
      {drinkDetail.map((detailsMap,idx) => 
        {
          return ( 
            <div key={idx}>
              <h2 className='detailsBack'>
                <a href={`/drinks/${detailsMap.strIngredient1}`}><i className="backLink"></i>{detailsMap.strIngredient1}</a>
              </h2>
              <div className="details-container">
                <img width={150} src={detailsMap.strDrinkThumb}></img>
                  <div className='drinkGlass'>
                    <h3 className='drinkTitle'>{detailsMap.strDrink}</h3>
                    <h4>Preferred Glass:</h4><p>{detailsMap.strGlass}</p>
                  </div>
                  <div className='ingredientList'>
                    <h4>Ingredients:</h4>
                    <ul>
                      <li className="detailList">{detailsMap.strMeasure1}{detailsMap.strIngredient1}</li>
                      <li className="detailList">{detailsMap.strMeasure2}{detailsMap.strIngredient2}</li>
                      <li className="detailList">{detailsMap.strMeasure3}{detailsMap.strIngredient3}</li>
                      <li className="detailList">{detailsMap.strMeasure4}{detailsMap.strIngredient4}</li>
                      <li className="detailList">{detailsMap.strMeasure5}{detailsMap.strIngredient5}</li>
                      <li className="detailList">{detailsMap.strMeasure6}{detailsMap.strIngredient6}</li>
                      <li className="detailList">{detailsMap.strMeasure7}{detailsMap.strIngredient7}</li>
                      <li className="detailList">{detailsMap.strMeasure8}{detailsMap.strIngredient8}</li>
                      <li className="detailList">{detailsMap.strMeasure9}{detailsMap.strIngredient9}</li>
                      <li className="detailList">{detailsMap.strMeasure10}{detailsMap.strIngredient10}</li>
                      <li className="detailList">{detailsMap.strMeasure11}{detailsMap.strIngredient11}</li>
                      <li className="detailList">{detailsMap.strMeasure12}{detailsMap.strIngredient12}</li>
                      <li className="detailList">{detailsMap.strMeasure13}{detailsMap.strIngredient13}</li>
                      <li className="detailList">{detailsMap.strMeasure14}{detailsMap.strIngredient14}</li>
                      <li className="detailList">{detailsMap.strMeasure15}{detailsMap.strIngredient15}</li>
                    </ul>
                  </div>
                  <div className='mixingInstructions'>
                    <h4>Mixing instructions:</h4>
                    <p>{detailsMap.strInstructions}</p>
                  </div>
              </div>
            </div>
              )
        })
      } 
    </> 
  :
    <p> Cocktail does not match. Try a new one!  </p>
         );
}

export default DrinkDetails