import React from 'react'
import Index from '../Index/Index.jsx';
import Products from '../Products/Products.jsx';
import Product from '../Product/Product.jsx';
import Order from '../Order/Order.jsx';
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
        props.app.state.currentPage === "order"?
        <Order/>:
        <div></div>
    )
}


export default Main