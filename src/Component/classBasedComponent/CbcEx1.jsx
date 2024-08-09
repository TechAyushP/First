import React, { Component } from 'react'

export default class CbcEx1 extends Component {
  constructor(){
    super()
    this.state={
        count:0
    }
    this.handleInc=()=>{
        this.setState({count: this.state.count + 1})
    }

  }
    render() {
    return (
    <div>
      <div>
        count :{this.state.count}
      </div>
      <button onClick={this.handleInc}>increment</button>
    </div>

      
    )
  }
}
