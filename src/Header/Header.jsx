import React from 'react'
import Opener from '../Opener/Opener.jsx'

const Header = props => {
    this.openLogin = () => {
        document.getElementsByClassName("modal")[0].classList.toggle("--opened")
        document.getElementsByClassName("--login")[0].classList.toggle("--opened")
      }
    return (
    <header>
        <div className="header">
            <div className="header__section">
                    <Opener/>
                    <nav className="nav --grey2 header__nav">
                        <a className="nav__item" href="index.html">
                            Your city
                        </a>
                        <a className="nav__item" href="index.html">
                            Delivery
                        </a>
                        <a className="nav__item" href="index.html">
                            Contact
                        </a>
                        <a className="nav__item" onClick={props.changePage.bind(props.app, "about")}>
                            About us
                        </a>
                        <div className="nav__item" onClick={props.changePage.bind(props.app, "articles")}>
                            Blog
                        </div>
                    </nav>
            </div>
            <div className="header__section">
                <a className="header__registration_link" href="registration.html">
                    Registration
                </a>
                <div className="header__log_in bgc" onClick={this.openLogin}>
                    In
                </div>
                <div className="header__user_photo" onClick={props.changePage.bind(props.app, "orders")}>
                    <img src="img/user_photo.png" alt="user"/>
                </div>
            </div>
        </div>
        <div className="header header--height--2 bdc s">
            <div className="header__section">
                <div className="logo" onClick={props.changePage.bind(props.app, "index")}>
                    <img src="img/logo.png" alt="logo"/>
                </div>
                <Opener/>
                <div className="nav header__nav">
                    <a className="nav__item bdhc" href="index.html">
                        <strong>All <br/> Products</strong>
                    </a>
                    <a className="nav__item bdhc" href="index.html">
                        <strong>All <br/> Poligraphy</strong>
                    </a>
                    <div className={(props.app.state.currentPage === "products"?"nav__item bdhc bdc":"nav__item bdhc") + " header__sub_nav_open"}>
                        <strong>Signs <br/> & Posters</strong>
                        <div className="header_sub_nav bdc">
                            <div className="header_sub_nav__item">
                                <strong>Banners</strong>
                                <ul>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                </ul>
                            </div>
                            <div className="header_sub_nav__item">
                                <strong>Banners</strong>
                                <ul>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Car Window Decals</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Car Window Decals</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Car Window Decals</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Car Window Decals</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Car Window Decals</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Car Window Decals</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Car Window Decals</li>
                                </ul>
                            </div>
                            <div className="header_sub_nav__item">
                                <strong>Banners</strong>
                                <ul>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>NEW Bulk Posters</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>NEW Bulk Posters</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>NEW Bulk Posters</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>NEW Bulk Posters</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>NEW Bulk Posters</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>NEW Bulk Posters</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>NEW Bulk Posters</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>NEW Bulk Posters</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>NEW Bulk Posters</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>NEW Bulk Posters</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>NEW Bulk Posters</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>NEW Bulk Posters</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>NEW Bulk Posters</li>
                                </ul>
                            </div>
                            <div className="header_sub_nav__item">
                                <strong>Banners</strong>
                                <ul>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                </ul>
                            </div>
                            <div className="header_sub_nav__item">
                                <strong>Banners</strong>
                                <ul>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                </ul>
                            </div>
                            <div className="header_sub_nav__item">
                                <strong>Banners</strong>
                                <ul>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                    <li className="hc" onClick={props.changePage.bind(props.app, "products")}>Vinyl Banners</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a className="nav__item bdhc" href="index.html">
                        <strong>Wedding <br/> Banners</strong>
                    </a>
                    <a className="nav__item bdhc" href="index.html">
                        <strong>Design <br/> Services</strong>
                    </a>
                </div>
            </div>
            <div className="header__section">
                <div className="search">
                    <input className="search__input s" type="text" defaultValue="search"/>
                    <div className="search__button bgc">SEARCH</div>
                </div>
                <div className="bug" href="index.html" onClick={props.changePage.bind(props.app, "order")}>
                    <img src="img/bug.png" alt="bug"/>
                    <div className="bug__count bgc">
                        1
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}


export default Header