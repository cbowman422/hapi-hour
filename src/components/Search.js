import { render } from '@testing-library/react'
import React from 'react'
import Filters from './Filters'
import Vodka from './Vodka'

const Search = (props) => {
  


  
 if (props.ginProp && !props.vodkaProp) {
      return (
            <>
                  <div>
                  <Filters/>
                  </div> 
            </>
            )
  }
  if (props.vodkaProp && !props.ginProp){
      return (
            <>
                  <div>
                  <Vodka />
                  </div> 
            </>
            )
  }
  if (props.ginProp && props.vodkaProp){
      return (
            <>
                  <div>
                  <Filters />
                  <Vodka />
                  </div> 
            </>
            )
  }
}

export default Search




