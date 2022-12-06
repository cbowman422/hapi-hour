import { render } from '@testing-library/react'
import React from 'react'
import Gin from './Gin'
import Vodka from './Vodka'

const Search = (props) => {
  

      return (props.ginProp) ? <Gin />
      : (props.vodkaProp) ? <Vodka />
      : ("")
       
//   if (props.ginProp && !props.vodkaProp) {
//       return (
//             <>
//                   <div>
//                   <Gin />
//                   </div> 
//             </>
//             )
//   }
//   if (props.vodkaProp && !props.ginProp){
//       return (
//             <>
//                   <div>
//                   <Vodka />
//                   </div> 
//             </>
//             )
//   }
//   if (props.ginProp && props.vodkaProp){
//       return (
//             <>
//                   <div>
//                   <Gin />
//                   <Vodka />
//                   </div> 
//             </>
//             )
//   }
}

export default Search




