import React from 'react'

const Text = props => {

  return (
    <div className={"text " + props.className}>
        {props.children}
    </div>
  )
}


export default Text
