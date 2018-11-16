import React from 'react'
import Index from '../Index/Index.jsx';
import Products from '../Products/Products.jsx';
import Product from '../Product/Product.jsx';
const Main = props => {
    return (
        props.app.state.currentPage === "index"?
        <Index
            app = {props.app}
            changePage={props.changePage}
        />:
        props.app.state.currentPage === "products"?
        <Products
            app = {props.app}
            changePage={props.changePage}
        />:
        props.app.state.currentPage === "product"?
        <Product/>:
        <div></div>
    )
}


export default Main