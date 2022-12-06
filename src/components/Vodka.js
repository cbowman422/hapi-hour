import React from 'react'
import {useState, useEffect } from 'react'

const Vodka = () => {

    const [vodka , setVodka] = useState(null)

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setVodka(json)
        })
        .catch(console.error) 
      }, []);


      return ( vodka ?

        <div>
          {vodka.drinks.map((vodkaMap,idx) => {
            return (
    
          <div key={idx} className='componentCSS'>
        
                <div className="cardTitle">
                    {vodkaMap.strDrink} 
                </div>
                <div>       
                    <img width={100} src={vodkaMap.strDrinkThumb}></img>
                </div>
    
          </div>
                   )
              })} 
        </div>
          :
        <p> loading .. </p>
    )
    }
    
    export default Vodka
