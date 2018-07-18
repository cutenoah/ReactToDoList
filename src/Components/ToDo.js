import React, { Component } from 'react';
import '../Stylesheet/index.css';

class ToDo extends Component {
  render(){
    return(
      <div className="todo">
      <p>{this.props.text}</p>
      </div>
    )
  }
}

export default ToDo;