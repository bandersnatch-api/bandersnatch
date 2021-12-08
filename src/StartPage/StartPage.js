import './StartPage.css';
import React, { Component } from 'react';
import axios from 'axios';

export default class StartPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    const {name} = this.state;
    axios.post("https://safe-sea-12739.herokuapp.com/https://bandersnatch-api.herokuapp.com/users", {
      user: {
        questions_answered: 0,
        name: name
      }
    }, 
    { withCredentials: true }
    ).then(response => {
      console.log("ieuhieuh", response);
    })
    event.preventDefault();

  };

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Type your name here" 
            value={this.state.name} 
            onChange={this.handleChange} 
            required
          />

          <button type="submit">Start your game !</button>
        </form>
      </div>
    );
  }
};
