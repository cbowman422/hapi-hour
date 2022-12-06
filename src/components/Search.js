import { render } from '@testing-library/react'
import React from 'react'
import Gin from './Gin'
import SloeGin from './SloeGin'
import Vodka from './Vodka'
import PeachVodka from './PeachVodka'
import LemonVodka from './LemonVodka'
import Whiskey from './Whiskey'

const Search = (props) => {
  


       
  if (props.ginProp && !props.vodkaProp && !props.whiskeyProp) {
      return (
            <>
                  <div>
                  <Gin />
                  <SloeGin />
                  </div> 
            </>
            )
  }
  if (props.vodkaProp && !props.ginProp && !props.whiskeyProp){
      return (
            <>
                  <div>
                  <Vodka />
                  <PeachVodka />
                  <LemonVodka />
                  </div> 
            </>
            )
  }
  if (props.whiskeyProp && !props.vodkaProp && !props.ginProp){
      return (
            <>
                  <div>
                  <Whiskey />
                  </div> 
            </>
            )
  }
  if (props.ginProp && props.vodkaProp && props.whiskeyProp){
      return (
            <>
                  <div>
                  <Gin />
                  <SloeGin />
                  <Vodka />
                  <PeachVodka />
                  <LemonVodka />
                  <Whiskey />
                  </div> 
            </>
            )
  }
}

export default Search




