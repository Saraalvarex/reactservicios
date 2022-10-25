import React, { Component } from 'react'
import img from '../../assets/images/404.jpg'

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <img style={{width: "600px"}} src={img}/>
        </div>
    )
  }
}
