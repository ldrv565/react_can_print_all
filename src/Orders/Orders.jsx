import React from 'react'
import Table_drop from '../Table_drop/Table_drop.jsx'
import AsideHeader from '../AsideHeader/AsideHeader.jsx'

const Orders = props => {

  return (
    <main>
        <div className="main --table">
          <AsideHeader>
            <div className="button bgc s2 asideHeader__button">
              Change personal data
            </div>
          </AsideHeader>
          <div className="tables --margin">
            <div className="title --main">My orders</div>
            <Table_drop/>
            <Table_drop/>
            <Table_drop/>
            <Table_drop/>
            <Table_drop/>
          </div>
        </div>
    </main>
  )
}


export default Orders