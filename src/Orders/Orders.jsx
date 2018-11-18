import React from 'react'
import Table_drop from '../Table_drop/Table_drop.jsx'
import Aside from '../Aside/Aside.jsx'

const Orders = props => {

  return (
    <main>
        <div className="main --table">
          <Aside/>
          <div className="tables">
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