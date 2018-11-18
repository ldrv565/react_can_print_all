import React from 'react'
import Card from '../Card/Card.jsx'

const Index = props => {

  return (
    <main>
        <div className="main --promo">
            <img className="main__img" src="img/bg.jpg" alt="bg"/>
            <div className="promo">
                <div className="promo__popular">
                    Popular
                </div>
                <div className="promo__box">
                    <div className="title">
                        CANVAS POSTERS
                    </div>
                    <div className="subtitle c">
                        CANVAS DESIGN AND PRINT FOR YOU REALLY SMALL PRICE
                    </div>
                    <div className="buttons_section">
                        <div className="button bgc s2">
                            SHOP NOW ➔
                        </div>
                        <a href="index.html">
                            <span className="link">
                                see details
                            </span>
                        </a>
                    </div>
                </div>
                <div className="slider">
                    <div className="slider__arrow c slider__arrow--left">
                        ›
                    </div>
                    <div className="slider__circle bgc s3">
                    </div>
                    <div className="slider__circle sh3">
                    </div>
                    <div className="slider__circle sh3">
                    </div>
                    <div className="slider__circle sh3">
                    </div>
                    <div className="slider__circle sh3">
                    </div>
                    <div className="slider__arrow c">
                        ›
                    </div>
                </div>
            </div>
        </div>
        <div className="main --center --index">
            <div className="title">
                FEATUERED PRODUCTS
            </div>
            <div className="subtitle c">
                CATEGORY
            </div>
            <div className="catalog --index">
            <Card app = {props.app} changePage={props.changePage}/>
            <Card app = {props.app} changePage={props.changePage}/>
            <Card app = {props.app} changePage={props.changePage}/>
            <Card app = {props.app} changePage={props.changePage}/>
            <Card app = {props.app} changePage={props.changePage}/>
            <Card app = {props.app} changePage={props.changePage}/>
            <Card app = {props.app} changePage={props.changePage}/>
            <Card app = {props.app} changePage={props.changePage}/>
            </div>
        </div>
        <div className="main --center --white --index">
            <div className="title">
                ADVANTAGES
            </div>
            <div className="subtitle c">
                ABOUT US
            </div>
            <div className="catalog --index">
                <div className="card_advantage">
                    <div className="image card_advantage__image">
                        <img className="image__img" src="img/diamond.png" alt="card"/>
                    </div>
                    <div className="card_advantage__box">
                        <div className="title card_advantage__title c">
                            Quality
                        </div>
                        <div className="card_advantage__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="button bgc card_advantage__button s2">
                        MORE INFO ➔
                    </div>
                </div>
                <div className="card_advantage">
                    <div className="image card_advantage__image">
                        <img className="image__img" src="img/diamond.png" alt="card"/>
                    </div>
                    <div className="card_advantage__box">
                        <div className="title card_advantage__title c">
                            Speed
                        </div>
                        <div className="card_advantage__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="button bgc card_advantage__button s2">
                        MORE INFO ➔
                    </div>
                </div>
                <div className="card_advantage">
                    <div className="image card_advantage__image">
                        <img className="image__img" src="img/diamond.png" alt="card"/>
                    </div>
                    <div className="card_advantage__box">
                        <div className="title card_advantage__title c">
                            Design
                        </div>
                        <div className="card_advantage__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="button bgc card_advantage__button s2">
                        MORE INFO ➔
                    </div>
                </div>
                <div className="card_advantage">
                    <div className="image card_advantage__image">
                        <img className="image__img" src="img/diamond.png" alt="card"/>
                    </div>
                    <div className="card_advantage__box">
                        <div className="title card_advantage__title c">
                            Best
                        </div>
                        <div className="card_advantage__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="button bgc card_advantage__button s2">
                        MORE INFO ➔
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}


export default Index