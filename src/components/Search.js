import { render } from '@testing-library/react'
import React from 'react'
import DrinkList from './DrinkList'


const Search = (props) => {
  


       
  if (props.ginProp ) {
      return (
            <>
                  <div>
                  <DrinkList />
                  </div> 
            </>
            )

      }
}
export default Search




