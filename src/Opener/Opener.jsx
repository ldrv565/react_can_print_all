import React from 'react'

const Opener = props => {
    this.toggleMenu = (event) => {
        event.target.classList.toggle("c")
        event.target.nextElementSibling.classList.toggle("--opened")
    }
  return (
        <div className="opener" onClick={this.toggleMenu}>
            ☰
        </div>
  )
}


export default Opener