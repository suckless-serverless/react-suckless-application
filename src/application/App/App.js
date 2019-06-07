import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.click = this.click.bind(this)
    this.state = {
      number: 0
    }
  }
  click () {
    let { number } = this.state
    number++
    this.setState({ number })
  }
  render () {
    return <div onClick={this.click}>
    Hello World
      { this.state.number }
    </div>
  }
}

export default App
