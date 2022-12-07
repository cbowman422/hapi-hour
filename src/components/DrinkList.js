import React from 'react'
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const DrinkList = () => {

    const [drinkList , setDrinkList] = useState(null)

    let { idz } = useParams();
  

    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${idz}`;
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setDrinkList(json)
          console.log(url)
        })
        .catch(console.error) 
      }, []);


  return ( drinkList ?

    <div>
      {DrinkList.drinks.map((drinkListMap,idx) => {
        return (

          <Link to={`/drinks/${drinkListMap.idDrink}`} key={idx} className='componentCSS'>
    
            <div>        
              <img width={150} src={drinkListMap.strDrinkThumb}></img>
            </div>
            <div className="cardTitle">
              {drinkListMap.strDrink}
            </div>

          </Link>
               )
          })} 
    </div>
      :
    <p> loading .. </p>
)
}

export default DrinkList