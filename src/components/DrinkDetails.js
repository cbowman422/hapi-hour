import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const DrinkDetails = () => {

  let { id } = useParams();
  

  const [drinkDetail, setDrinkDetail] = useState(null)

  useEffect(() => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      fetch(url)
      .then((res) => res.json())
      .then((json) => {
          setDrinkDetail(json)
          console.log(url)
      })
      .catch(console.error)
  }, []);
  


  return ( drinkDetail ?
        <div className="details-container">

            {drinkDetail.drinks.map((detailsMap,idx) => {
            return (
          <div key={idx}>
            <h3>{detailsMap.strDrink}</h3>
            <img width={150} src={detailsMap.strDrinkThumb}></img>
            <h4>Glass Type:</h4> <p>{detailsMap.strGlass}</p>
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
            <h4>Mixing instructions:</h4>
            <p>{detailsMap.strInstructions}</p>
          </div>
            )
          })} 

        </div> 
        :
        <p> loading .. </p>
    );
}

export default DrinkDetails