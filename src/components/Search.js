import { render } from '@testing-library/react'
import React from 'react'
import Gin from './Gin'


const Search = (props) => {
  


       
  if (props.ginProp ) {
      return (
            <>
                  <div>
                  <Gin />
                  </div> 
            </>
            )

      }
}
export default Search




