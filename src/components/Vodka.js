import React from 'react'
<<<<<<< HEAD

const Vodka = () => {
  const [vodka , setVodka] = useState(null)

    useEffect(() => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";
        fetch(url)// url string
        .then((response) => response.json())//wait for json response
        .then((json) => {// then take json and exec
          setSearch(json)
        })
        .catch(console.error) // Catch and log any errors to the console
      }, []);
  return (
    <div>Vodka</div>
  )
}

export default Vodka
=======
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
>>>>>>> 82ea0e21c83c5f54d13a031263d0bc0d367e44ac
