import React, { Component } from 'react'
import './App.sass'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {

  state = {
    currentPage: "articles"
  }

  changePageHandler = (currentPage) => {
    this.setState({currentPage})
  }

  render() {
    return (
      <div className="karkas">
        <Header
          app = {this}
          changePage={this.changePageHandler}
        />
        <Main
          app = {this}
          changePage={this.changePageHandler}
        />
        <Footer/>
      </div>
    )
  }
}

export default App;
