import React from 'react'
import Aside from '../Aside/Aside.jsx'
import Article_card from '../Article_card/Article_card.jsx'

const Articles = props => {

  return (
    <main>
        <div>
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
            <div className="main">
                <Aside/>
                <div className="catalog">
                    <Article_card app = {props.app} changePage={props.changePage}/>
                    <Article_card app = {props.app} changePage={props.changePage}/>
                    <Article_card app = {props.app} changePage={props.changePage}/>
                    <Article_card app = {props.app} changePage={props.changePage}/>
                    <Article_card app = {props.app} changePage={props.changePage}/>
                </div>
            </div>
        </div>
    </main>
  )
}


export default Articles