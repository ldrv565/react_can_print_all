import React from 'react'

const Setting = props => {
  this.toggleDropDown = (event) => {
    let button
    if(event.target.parentElement.classList[1] == "--dropDown"||event.target.parentElement.parentElement.classList[1] == "--dropDown"){
      if(event.target.classList[0] == "setting__header"){
        button = event.target
        button.children[1].classList.toggle("--rotate")
        button.nextElementSibling.classList.toggle("--opened")
      }
      if(event.target.parentElement.classList[0] == "setting__header"){
        button = event.target.parentElement
        button.children[1].classList.toggle("--rotate")
        button.nextElementSibling.classList.toggle("--opened")
      }
    }
  }
  return (
    <div className={"setting " + props.className} onClick={this.toggleDropDown}>
        {props.children}
    </div>
  )
}


export default Setting