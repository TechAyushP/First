import React, { Component } from 'react'
import CbcEx1 from './CbcEx1';

export default class ClassBasedIntro extends Component {
  constructor(){
    super()
  }
    render() {
    return (
      <div>
        <h1>hello</h1>
        <div>
            <CbcEx1/>
        </div>
      </div>
    )
  }
}
