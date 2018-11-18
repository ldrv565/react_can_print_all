import React from 'react'
import Setting_button from '../../../Setting/Setting__content/Setting_button/Setting_button.jsx'

const Setting_select = props => {
  this.toggleSelect = (event) => {
    if(event.target.closest(".--select")){
      if (event.target.parentElement.classList[0] == "select_list"){
        event.target.parentElement.parentElement.children[0].children[0].innerHTML = event.target.innerHTML
      }
      event.target.closest(".--select").classList.toggle("s")
      event.target.closest(".--select").children[0].classList.toggle("c")
      event.target.closest(".--select").children[1].classList.toggle("--opened")
    }
}
  return (
    <div className="setting__element --select sh" onClick={this.toggleSelect}>
      <div className="select_button">
        <div className="select_value">
          {props.children}
        </div>
        <div className="select_arrow c">
          ◢
        </div>
      </div>
      <div className="select_list">
        <Setting_button>
          1
        </Setting_button>
        <Setting_button>
          2
        </Setting_button>
        <Setting_button>
          3
        </Setting_button>
        <Setting_button>
          4
        </Setting_button>
        <Setting_button>
          5
        </Setting_button>
      </div>
    </div>
  )
}


export default Setting_select