import React from 'react'
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LemonVodka = () => {

    const [lemonVodka , setLemonVodka] = useState(null)

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Lemon Vodka";
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setLemonVodka(json)
        })
        .catch(console.error) 
      }, []);


      return ( lemonVodka ?

        <div>
          {lemonVodka.drinks.map((lemonVodkaMap,idx) => {
            return (
    
            <Link to={`/drinks/${lemonVodkaMap.idDrink}`} key={idx} className='componentCSS'>
        
                <div className="cardTitle">
                    {lemonVodkaMap.strDrink} 
                </div>
                <div>       
                    <img width={100} src={lemonVodkaMap.strDrinkThumb}></img>
                </div>
    
            </Link>
                   )
              })} 
        </div>
          :
        <p>  </p>
    )
    }
    
    export default LemonVodka
