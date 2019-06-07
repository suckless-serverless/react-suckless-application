import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

export default class ReactApplication {
  start (root) {
    ReactDOM.render(<App />, document.getElementById(root))
  }
}
