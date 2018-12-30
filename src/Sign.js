import React, { Component } from 'react'
import './sign.css';


export default class Sign extends Component {
  render() {
    return (
      <div className='logo'>
        <div id="container">
            <div className="sign-three">
            <div className="dark">Dark</div>
            <div className = "rose" > Rose </div>
            <div className = "club"> ~ Club ~</div>
            </div>
        </div>
        <small>Coming Soon...</small>
      </div>
    )
  }
}
