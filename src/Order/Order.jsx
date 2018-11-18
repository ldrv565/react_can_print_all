import React from 'react'
import Table from '../Table/Table.jsx'

const Products = props => {

  return (
    <main>
        <div className="main --table">
            <Table>

            </Table>
            <div className="buttons_box">
              <div className="buttons_box__coupon">
                Coupon: 
                <input className="buttons_box__input bdc" type="text"/>
              </div>
              <div className="totalprice">
                TOTAL PRICE: <span className="totalprice__cost c">$120</span>
              </div>
            </div>
            <div className="buttons_box">
              <div className="button bgc s2">
                NEXT ➔
              </div>
            </div>
        </div>
    </main>
  )
}


export default Products