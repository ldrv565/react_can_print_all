import React from 'react'
import Aside from '../Aside/Aside.jsx'
import Product__description from './Product__description/Product__description.jsx'
import Product__settings from './Product__settings/Product__settings.jsx'

const Product = props => {

  return (
    <main>
        <div className="main --flex">
            <Aside/>
            <Product__description/>
            <Product__settings/>
        </div>
    </main>
  )
}


export default Product