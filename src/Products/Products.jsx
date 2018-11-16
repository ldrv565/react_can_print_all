import React from 'react'
import Aside from '../Aside/Aside.jsx'
import Card from '../Card/Card.jsx'

const Products = props => {

  return (
    <main>
        <div className="main --flex --light_grey">
            <Aside/>
            <div className="catalog">
                <div className="nav --grey2 catalog__nav">
                    <div className="nav__item bdhc hc c bdc">
                        POPULAR
                    </div>
                    <div className="nav__item bdhc hc">
                        BEST
                    </div>
                    <div className="nav__item bdhc hc">
                        NEW
                    </div>
                </div>
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
    </main>
  )
}


export default Products