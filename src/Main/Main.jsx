import React from 'react'
import Index from '../Index/Index.jsx';
import Products from '../Products/Products.jsx';
import Product from '../Product/Product.jsx';
import Order from '../Order/Order.jsx';
import Orders from '../Orders/Orders.jsx';
import Articles from '../Articles/Articles.jsx';
import Article from '../Article/Article.jsx';
import About from '../About/About.jsx';

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
        props.app.state.currentPage === "orders"?
        <Orders/>:
        props.app.state.currentPage === "articles"?
        <Articles
            app = {props.app}
            changePage={props.changePage}
        />:
        props.app.state.currentPage === "article"?
        <Article/>:
        props.app.state.currentPage === "about"?
        <About/>:
        <div></div>
    )
}


export default Main