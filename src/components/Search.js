import React from 'react'
import { Link } from 'react-router-dom'



const Search = (props) => {
  

return (
      <section className="container">

{props.spirit.map((search,searchIdx) => {

  return <Link to={`/drinks/${search.strIngredient1}`} key={searchIdx}> 
         <h4>{search.strIngredient1}</h4>
         <img width={150} src={`https://www.thecocktaildb.com/images/ingredients/${search.strIngredient1}.png`} ></img>
      </Link>
 })} 
      </section>
)
}
export default Search




