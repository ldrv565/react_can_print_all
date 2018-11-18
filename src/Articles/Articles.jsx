import React from 'react'
import Aside from '../Aside/Aside.jsx'
import Article_card from '../Article_card/Article_card.jsx'

const Articles = props => {

  return (
    <main>
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
    </main>
  )
}


export default Articles