import React from 'react'

const Card = props => {

  return (
    <a className="card sh" onClick={props.changePage.bind(props.app, "product")}>
      <div className="image card__image">
          <img className="image__img" src="img/card.png" alt="card"/>
      </div>
      <div className="title card__title">
          POSTER
      </div>
      <div className="card__size">
          A6/A5/A4
      </div>
      <div className="card__cost c">
          $10 <span className="card__from">FROM</span>
      </div>
      <div className="card__more bgc">
          ADD TO CARD
      </div>
  </a>
  )
}


export default Card