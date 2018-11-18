import React from 'react'

const Card = props => {

  return (
    <a className="article_card sh" onClick={props.changePage.bind(props.app, "article")}>
        <div className="image article_card__image">
            <img className="image__img" src="img/article.jpg" alt="article"/>
        </div>
        <div className="article_card__box">
            <div className="title article_card__title">
                Poligraphy
            </div>
            <div className="text article_card__text --grey3">
                Rain or shine, make sure your message gets seen with durable, high-quality mesh banners. The water- and UV- resistant material makes them one of our most weatherproof products. Built-in grommets (included free of charge) make it easy to hang them wherever you want. And the mesh weave minimizes the effect of wind by letting it pass right through. It’s time to get noticed by more customers – no matter what’s in the forecast.
            </div>
            <div className="button article_card__button bgc s2">
                read
            </div>
        </div>
  </a>
  )
}


export default Card