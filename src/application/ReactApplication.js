import React from 'react'
import ReactDOM from 'react-dom'
import 'arrive'
import { App } from './App'

export default class ReactApplication {
  start (root) {
    return new Promise((resolve, reject) => {
      // is this a container
      document.arrive('#container', function () {
        // 'this' refers to the newly created element
        document.unbindArrive('#container')
        resolve('container')
        console.log('#contained was rendered')
      })
      ReactDOM.render(<App />, document.getElementById(root))
    })
  }
}
