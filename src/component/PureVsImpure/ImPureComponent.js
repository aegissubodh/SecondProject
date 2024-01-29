import React, { Component, PureComponent } from 'react'

export default class ImpureComponent extends Component {
  constructor(){
      super();
      this.state = {
          data: 10
      }
  }

  render() {
    console.log(this.state)
    return (
      <div>
          
          <h1>ImpureComponent</h1>
      <h2>{this.state.data}</h2>
      <button onClick={() => {this.setState({data: 11})}}>Update State</button>
      </div>
    )
  }
}