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
            <h1>{detailsMap.idDrink}</h1>
            <h3>{detailsMap.strDrink}</h3>
</div>
            )
          })} 

        </div> 
        :
        <p> loading .. </p>
    );
}

export default DrinkDetails