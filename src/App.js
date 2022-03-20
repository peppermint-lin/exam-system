
import React, { Component } from 'react'
import Frame from './components/Frame'
import { BrowserRouter } from 'react-router-dom'
import './App.less'
export default class App extends Component {
  render() {
    // console.log(calHeight, document.documentElement.clientHeight)

    return (
      <div className="App">
        <BrowserRouter>
          <Frame />
        </BrowserRouter>
      </div>
    )
  }
}