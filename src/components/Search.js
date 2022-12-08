import React from 'react'
import { Link } from 'react-router-dom'
import Sticky from 'react-stickynode';
import "./css/Search.css"


const Search = (props) => {

      function scrollToList(){
            window.scrollTo({
                  top: 940,
                  behavior:"smooth"
            })
      }

      function Home(){
            return (
              <div className='homeContainer'>
                <img src='https://imgur.com/jFROHy1.jpg'/>
                <div className='homeText'>
                  <h1>WELCOME</h1>
                  <a onClick={scrollToList}><h2>SEE INGREDIENTS</h2></a>
                </div>
              </div>
            )
      }

      function Ingredients(){
            return (
                  <>
                  <div className=''>
                        <Sticky top={100}>
                              <h2 id='baseIngredients'>Base Ingredients</h2>
                        </Sticky>
                  </div>
                  <section className="ingredientsContainer">
                        {props.spirit.map((search,searchIdx) => {
                              return (
                                    <Link to={`/drinks/${search.strIngredient1}`} key={searchIdx} className='ingredientCard'>
                                          <div className='ingredientName'>
                                                <h4>{search.strIngredient1}</h4>
                                          </div>
                                          <div>
                                                <img width={150} src={`https://www.thecocktaildb.com/images/ingredients/${search.strIngredient1}.png`} ></img>
                                          </div>
                                    </Link>
                              )
                        })} 
                  </section>
                  </>
            )
      }

      return ( !props.visitProp ?
            <>
            <Home />
            <Ingredients />
            </>
      :
            <>
            <Ingredients />
            </>
      )
}
export default Search




