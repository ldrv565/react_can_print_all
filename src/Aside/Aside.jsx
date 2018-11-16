import React from 'react'
import Opener from '../Opener/Opener.jsx'

const Aside = props => {
    this.toggleSubMenu = (event) => {
        event.target.classList.toggle("c")
        event.target.nextElementSibling.classList.toggle("--opened")
    }
  return (
    <aside className="aside">
        <div className="title aside__title">
            All products
        </div>
        <Opener/>
        <ul className="menu">
            <li><div className="menu__title hc" onClick={this.toggleSubMenu}>Booklets</div>
                <ul className="menu__subMenu">
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                </ul>
            </li>
            <li><div className="menu__title hc hc" onClick={this.toggleSubMenu}>Photobook</div>
                <ul className="menu__subMenu">
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                </ul>
            </li>
            <li><div className="menu__title hc hc" onClick={this.toggleSubMenu}>Brochures</div>
                <ul className="menu__subMenu">
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                </ul>
            </li>
            <li><div className="menu__title hc" onClick={this.toggleSubMenu}>Leaflets</div>
                <ul className="menu__subMenu">
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                </ul>
            </li>
            <li><div className="menu__title hc" onClick={this.toggleSubMenu}>Flyers</div>
                <ul className="menu__subMenu">
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                </ul>
            </li>
            <li><div className="menu__title hc" onClick={this.toggleSubMenu}>Journals</div>
                <ul className="menu__subMenu">
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                </ul>
            </li>
            <li><div className="menu__title hc" onClick={this.toggleSubMenu}>Calendars</div>
                <ul className="menu__subMenu">
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                </ul>
            </li>
            <li><div className="menu__title hc" onClick={this.toggleSubMenu}>Business cards</div>
                <ul className="menu__subMenu">
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                </ul>
            </li>
            <li><div className="menu__title hc" onClick={this.toggleSubMenu}>Souvernirs cards</div>
                <ul className="menu__subMenu">
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                </ul>
            </li>
            <li><div className="menu__title hc" onClick={this.toggleSubMenu}>Posters</div>
                <ul className="menu__subMenu">
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                </ul>
            </li>
            <li><div className="menu__title hc" onClick={this.toggleSubMenu}>Paintings</div>
                <ul className="menu__subMenu">
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                </ul>
            </li>
            <li><div className="menu__title hc" onClick={this.toggleSubMenu}>Envelopes</div>
                <ul className="menu__subMenu">
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                </ul>
            </li>
            <li><div className="menu__title hc" onClick={this.toggleSubMenu}>Stickers</div>
                <ul className="menu__subMenu">
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                    <li className ="hc">
                        <a href="index.html">A3 Letter</a>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
  )
}


export default Aside