import React from 'react'
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PeachVodka = () => {

    const [peachVodka , setPeachVodka] = useState(null)

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Peach Vodka";
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setPeachVodka(json)
        })
        .catch(console.error) 
      }, []);


      return ( peachVodka ?

        <div>
          {peachVodka.drinks.map((peachVodkaMap,idx) => {
            return (
    
            <Link to={`/drinks/${peachVodkaMap.idDrink}`} key={idx} className='componentCSS'>
        
                <div className="cardTitle">
                    {peachVodkaMap.strDrink} 
                </div>
                <div>       
                    <img width={100} src={peachVodkaMap.strDrinkThumb}></img>
                </div>
    
            </Link>
                   )
              })} 
        </div>
          :
        <p>  </p>
    )
    }
    
    export default PeachVodka
