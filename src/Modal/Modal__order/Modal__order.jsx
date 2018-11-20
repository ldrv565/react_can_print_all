import React from 'react'

const Modal__order = props => {

  return (
        <div className="modal__window --order">
            <strong>Order</strong>
            <input className="modal__input bdc" type="text" placeholder="Full name"/>
            <input className="modal__input bdc" type="text" placeholder="e-mail"/>
            <input className="modal__input bdc" type="text" placeholder="telephone"/>
            <input className="modal__input bdc" type="text" placeholder="delivery adress"/>
            <textarea className="modal__text bdc" placeholder="comment..."/>
            <div className="button modal__button bgc s2">
                To order
            </div>
        </div>
  )
}


export default Modal__order