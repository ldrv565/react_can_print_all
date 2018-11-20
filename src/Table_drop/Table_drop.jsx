import React from 'react'

const Table_drop = props => {
    this.toggleDropDown = (event) => {
        if(event.target.parentElement.childNodes[0].classList[0] == "dropDown_arrow"){
            event.target.classList.toggle("--rotate")
            event.target.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle("--opened")
        } else  {
            if(event.target.parentElement.classList[0] == "table__head"){
                event.target.parentElement.childNodes[7].childNodes[0].classList.toggle("--rotate")
                event.target.parentElement.parentElement.nextElementSibling.classList.toggle("--opened")
            }
        }
    }
    return (
        <table className="table --dropDown" onClick={this.toggleDropDown}>
            <thead>
                <tr className="table__head">
                    <th className="c">1</th>
                    <th>
                        <div className="image table__image --small"><img className="image__img" src="./img/order.png" alt="order"/></div>
                    </th>
                    <th className="name">Order 1</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th className="c table__cost">$300</th>
                    <th><div className="dropDown_arrow c">◢</div></th>
                    <th className="table__done">done</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="c">1</td>
                    <td>
                        <div className="image table__image --small"><img className="image__img" src="./img/material.jpg" alt="table"/></div>
                    </td>
                    <td>CANVAS design abstract wawes color 1</td>
                    <td>400 x 600mm</td>
                    <td className="c table__cost">$30</td>
                    <td>1</td>
                    <td className="c table__cost">$300</td>
                    <td></td>
                    <th className="table__done"></th>
                </tr>
                <tr>
                    <td className="c">1</td>
                    <td>
                        <div className="image table__image --small"><img className="image__img" src="./img/material.jpg" alt="table"/></div>
                    </td>
                    <td>CANVAS design abstract wawes color 1</td>
                    <td>400 x 600mm</td>
                    <td className="c table__cost">$30</td>
                    <td>1</td>
                    <td className="c table__cost">$300</td>
                    <td></td>
                    <th className="table__done"></th>
                </tr>
            </tbody>
        </table>
    )
}


export default Table_drop