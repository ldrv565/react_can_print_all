import React from 'react'

const Table = props => {

  return (
      <table className="table">
            <thead>
                <tr className="table__head">
                    <th className="c">#</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="c">1</td>
                    <td>
                        <div className="image table__image"><img className="image__img" src="./img/material.jpg" alt="table"/></div>
                    </td>
                    <td>CANVAS design abstract wawes color 1</td>
                    <td>400 x 600mm</td>
                    <td className="c table__cost">$30</td>
                    <td>
                        <div className="counter">
                            <div className="counter__button counter__button--dec bgc">-</div>
                            <input className="counter__value bdhc" type="text" defaultValue="1"/>
                            <div className="counter__button counter__button--inc bgc">+</div>
                        </div>
                    </td>
                    <td className="c table__cost">$300</td>
                    <td className="hc">╳</td>
                </tr>
                <tr>
                    <td className="c">1</td>
                    <td>
                        <div className="image table__image"><img className="image__img" src="./img/material.jpg" alt="table"/></div>
                    </td>
                    <td>CANVAS design abstract wawes color 1</td>
                    <td>400 x 600mm</td>
                    <td className="c table__cost">$30</td>
                    <td>
                        <div className="counter">
                            <div className="counter__button counter__button--dec bgc">-</div>
                            <input className="counter__value bdhc" type="text" defaultValue="1"/>
                            <div className="counter__button counter__button--inc bgc">+</div>
                        </div>
                    </td>
                    <td className="c table__cost">$300</td>
                    <td className="hc">╳</td>
                </tr>
                <tr>
                    <td className="c">1</td>
                    <td>
                        <div className="image table__image"><img className="image__img" src="./img/material.jpg" alt="table"/></div>
                    </td>
                    <td>CANVAS design abstract wawes color 1</td>
                    <td>400 x 600mm</td>
                    <td className="c table__cost">$30</td>
                    <td>
                        <div className="counter">
                            <div className="counter__button counter__button--dec bgc">-</div>
                            <input className="counter__value bdhc" type="text" defaultValue="1"/>
                            <div className="counter__button counter__button--inc bgc">+</div>
                        </div>
                    </td>
                    <td className="c table__cost">$300</td>
                    <td className="hc">╳</td>
                </tr>
            </tbody>
      </table>
  )
}


export default Table