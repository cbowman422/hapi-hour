import { render } from '@testing-library/react'
import React from 'react'
import DrinkList from './DrinkList'
import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Search = (props) => {
  

console.log(props.spirit)


return (
      <section className="container">

{props.spirit.map((search,searchIdx) => {

  return <Link to={`/drinks/${search.strIngredient1}`} key={searchIdx}> 
         <h4 className='ingredients'>{search.strIngredient1}</h4>
      </Link>
 })} 
      </section>
)
}
export default Search




