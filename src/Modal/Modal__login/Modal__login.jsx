import React from 'react'

const Modal__login = props => {

  return (
        <div className="modal__window --login">
            <strong>Log in</strong>
            <input className="modal__input bdc" type="text" placeholder="Full name"/>
            <input className="modal__input bdc" type="text" placeholder="e-mail"/>
            <div className="button modal__button bgc s2">
                In
            </div>
        </div>
  )
}


export default Modal__login