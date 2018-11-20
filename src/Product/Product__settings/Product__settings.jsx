import React from 'react'
import Setting from './Setting/Setting.jsx'
import Setting__header from './Setting/Setting__header/Setting__header.jsx'
import Setting__content from './Setting/Setting__content/Setting__content.jsx'
import Setting_button from './Setting/Setting__content/Setting_button/Setting_button.jsx'
import Setting_select from './Setting/Setting__content/Setting_select/Setting_select.jsx'
import Text from '../../Core/Text.jsx'

const Product__settings = props => {
  this.openOrder = () => {
    document.getElementsByClassName("modal")[0].classList.toggle("--opened")
    document.getElementsByClassName("--order")[0].classList.toggle("--opened")
  }
  this.openOrderDesign = () => {
    document.getElementsByClassName("modal")[0].classList.toggle("--opened")
    document.getElementsByClassName("--orderDesign")[0].classList.toggle("--opened")
  }
  return (
    <div className="product__settings">
      <div className="title">
        MESH BANNERS
        <div className="text --bold">
          <p>A1 / A2 / A4</p>
        </div>
      </div>
      <Setting>
        <Setting__header>
          <Text className="--bold --uppercase">
            Stand out to customers. Stand up to the elements.
          </Text>
        </Setting__header>
        <Setting__content>
          <Text>
            Mesh weave lets air through, minimizing wind effects
            <ul>
              <li>Built-in grommets (included free) make hanging easy</li>
              <li>Reinforced edges (also included) to increase durability</li>
              <li>Water- and UV-resistantquis nostrud exercitation ullamco</li>
            </ul>
          </Text>
        </Setting__content>
      </Setting>
      <Setting>
        <Setting__header>
          <Text className="--bold --uppercase">
            Orientation
          </Text>
        </Setting__header>
        <Setting__content>
          <Setting_button className="--orientation">
            Horizontal
          </Setting_button>
          <Setting_button className="--orientation">
            Vertical
          </Setting_button>
        </Setting__content>
      </Setting>
      <Setting>
        <Setting__header>
          <Text className="--bold --uppercase">
            Size
          </Text>
        </Setting__header>
        <Setting__content>
          <Setting_button>
            1.7' x 3'
          </Setting_button>
          <Setting_button>
            1.7' x 3'
          </Setting_button>
          <Setting_button>
            1.7' x 3'
          </Setting_button>
          <Setting_button>
            1.7' x 3'
          </Setting_button>
          <Setting_button>
            1.7' x 3'
          </Setting_button>
          <Setting_button>
            1.7' x 3'
          </Setting_button>
          <Setting_button>
            1.7' x 3'
          </Setting_button>
          <Setting_button>
            1.7' x 3'
          </Setting_button>
        </Setting__content>
      </Setting>
      <Setting>
        <Setting__header>
          <Text className="--bold --uppercase">
            Quantity
          </Text>
        </Setting__header>
        <Setting__content>
          <Setting_select>
            3
          </Setting_select>
        </Setting__content>
      </Setting>
      <Setting className="--dropDown">
        <Setting__header>
          <Text className="--bold --uppercase hc">
            Add accessories
          </Text>
          <div className="dropDown_arrow c">
            ◢
          </div>
        </Setting__header>
        <Setting__content>
          <Text className="--uppercase">White Nylon Ropes - 50</Text>
          <Setting_select>
            1
          </Setting_select>
          <Text className="--uppercase">Zip Ties - Packs of 50</Text>
          <Setting_select>
            1
          </Setting_select>
        </Setting__content>
      </Setting>
      <Setting className="--border0">
        <Setting__header>
          <Text className="--bold --uppercase">
            Materials
          </Text>
        </Setting__header>
        <Setting__content>
          <div className="image setting__image s3">
            <img className="image__img" src="img/material.jpg" alt="material"/>
          </div>
          <div className="image setting__image sh3">
            <img className="image__img" src="img/material.jpg" alt="material"/>
          </div>
          <div className="image setting__image sh3">
            <img className="image__img" src="img/material.jpg" alt="material"/>
          </div>
          <div className="image setting__image sh3">
            <img className="image__img" src="img/material.jpg" alt="material"/>
          </div>
          <div className="image setting__image sh3">
            <img className="image__img" src="img/material.jpg" alt="material"/>
          </div>
          <div className="image setting__image sh3">
            <img className="image__img" src="img/material.jpg" alt="material"/>
          </div>
          <div className="image setting__image sh3">
            <img className="image__img" src="img/material.jpg" alt="material"/>
          </div>
          <div className="image setting__image sh3">
            <img className="image__img" src="img/material.jpg" alt="material"/>
          </div>
        </Setting__content>
      </Setting>
      <Setting className="--border0">
        <Setting__content>
          <div className="totalprice">
            TOTAL PRICE: <span className="totalprice__cost c">$120</span>
          </div>
          <Setting_button className="--orientation" onClick={this.openOrderDesign}>
            Order design
          </Setting_button>
          <Setting_button className="--orientation">
            Add your design
          </Setting_button>
          <div className="button bgc s2" onClick={this.openOrder}>
              ADD TO BUSKET
          </div>
        </Setting__content>
      </Setting>
    </div>
  )
}


export default Product__settings