import React, { Component } from 'react';
import '../Stylesheet/App.css';
import ToDo from './ToDo';

class App extends Component {
  constructor(props)  {
    super(props);
    //this.addItem = this.addItem.bind(this);

    this.state = {
      todo: [],
      val: '', 
    };
  }

  addStuff = (event) => {
    this.setState({val: event.target.value});
  }
  addItem = (event) => {
    event.preventDefault();
    this.setState({
      todo: this.state.todo.concat(this.state.val),
      val: '',
    });
  }

  render()  {
    // console.log(this.props);
      return (
        <div>
          <form >
            <input 
              type = 'text' 
              placeholder = "enter tasks" 
              onChange={this.addStuff} 
              value= {this.state.val}></input>
            <input type= "submit" value = "submit" onClick={this.addItem}/>
          </form>

          {this.state.todo.map((el) => {
            return <ToDo className="todo" text={el}/>
          })}
        </div>
      )}
}

export default App;
