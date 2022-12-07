import React from 'react'
import { Link } from 'react-router-dom'



const Home = (props) => {
  

return (
      <section className="ingredientContainer">
          <div className='homeContainer'>
      <img src='https://imgur.com/jFROHy1.jpg'/>
      <h1>WELCOME</h1>
        </div>

            <h1 className='ingredientHeader'>Choose Your Ingredient</h1>
            {props.spirit.map((search,searchIdx) => {
                  return (
                        <Link to={`/drinks/${search.strIngredient1}`} key={searchIdx} className='ingredientCard'>
                              <div>
                                    <img width={150} src={`https://www.thecocktaildb.com/images/ingredients/${search.strIngredient1}.png`} ></img>
                              </div>
                              <div>
                                    <h4>{search.strIngredient1}</h4>
                              </div>
                        </Link>
                        )
            })} 
      </section>
      )
}
export default Home




