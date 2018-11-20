import React from 'react'

const Modal = props => {
    this.closeModal = (event) => {
        if(event.target.className == "modal --opened"){
            event.target.classList.toggle("--opened")
            document.getElementsByClassName("--order")[0].classList.remove("--opened")
            document.getElementsByClassName("--orderDesign")[0].classList.remove("--opened")
            document.getElementsByClassName("--login")[0].classList.remove("--opened")
        }
    }
    return (
        <div className="modal" onClick={this.closeModal}>
            {props.children}
        </div>
    )
}


export default Modal