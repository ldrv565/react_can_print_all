import React from 'react'

const Setting_button = props => {

  return (
    <div className={"setting__element " + props.className + " hc sh"} onClick={props.onClick}>
      {props.children}
    </div>
  )
}


export default Setting_button