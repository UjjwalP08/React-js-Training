import React from 'react'

const Wrapper = (props)=> {
    console.log("Wrapper File");
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Wrapper
