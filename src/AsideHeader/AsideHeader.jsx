import React from 'react'

const AsideHeader = props => {
  return (
    <aside className="asideHeader">
        <div className="title asideHeader__title">
            Personal Area
        </div>
        {props.children}
    </aside>
  )
}

export default AsideHeader