import React from 'react'
import { Link } from 'react-router-dom'
import Sticky from 'react-stickynode';
import "../css/IngredientOneList.css"

// Componenent function.
const IngredientOneList = (props) => 
{

// Function to scroll down in Home screen from click.
	function scrollToList()
	{
		window.scrollTo(
		{
			top: 940,
			behavior:"smooth"
		})
	}

// Function to display when at / path.
	function Home()
	{
		return (
			<div className='homeContainer'>
				<img src='https://imgur.com/jFROHy1.jpg'/>
				<div className='homeText'>
					<h1>WELCOME</h1>
					<a onClick={scrollToList}><h2>MENU</h2></a>
				</div>
			</div>
		)
	}

// Function to display when at /search path.
	function Ingredients()
	{
		return (
					<>
						<div className=''>
							<Sticky top={50}>
										<h2 id='baseIngredients'>Base Ingredient</h2>
							</Sticky>
						</div>
						<section className="ingredientsContainer">
							{props.spirit.map((search,searchIdx) => 
								{
									return (
										<Link to={`/drinks/${search.strIngredient1}`} key={searchIdx} className='ingredientCard'>
											<div>
												<img width={150} src={`https://www.thecocktaildb.com/images/ingredients/${search.strIngredient1}.png`} ></img>
											</div>
											<div className='ingredientName'>
												<h4>{search.strIngredient1}</h4>
											</div>
										</Link>
												)
								})
							} 
						</section>
					</>
					)
	}

// Conditional return.
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

export default IngredientOneList




