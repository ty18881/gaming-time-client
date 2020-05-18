import React, { Component } from 'react';

import './App.css';
import GameQuestion from './components/GameQuestion';
import GameComponent from './components/GameComponent';
import GameBoard  from './components/GameBoard';


class App extends Component {

  state = {
    initialUsers: [],
    value: ""
  }

  // retrieve known user names from the database

  fetchUserNames = new Promise((resolve, reject) => {
    console.log('Fetching user names from the database');
    console.log( `${process.env.REACT_APP_BASEURL}`)
    fetch(`${process.env.REACT_APP_BASEURL}/users`)
    .then((response) => response.json())
    .then((jData) => {
        resolve(jData);
    })
  
});

// make sure we wait for the fetch to complete before attempting to 
// put the values into state.

componentDidMount = async () => {
    let userList = await this.fetchUserNames;

    this.setState({
      initialUsers: userList
    })

    console.log("Users", userList);
}

handleChange = (event) => {
  this.setState({
      value: event.target.value
  })
}

handleSubmit = (event) => {
  console.log('do we recognize this user?');
  event.preventDefault();

  let userInput = this.state.value;
  console.log(`User typed ${this.state.value}`)

  let foundUser = this.state.initialUsers.find(user => user.name === userInput);
  console.log(`Found user ${foundUser}`)

  if (foundUser != null) {
      console.log("Welcome this user back to the game.")
  } else {
      console.log("display the rules")
  }

};

  render() {
  return (
    <div className="App">
      {/* We're going to solict user input here. */}

      <form onSubmit={this.handleSubmit}>
                 <label>
                     Your name:
                     <input type="text" value={this.state.value}  onChange={this.handleChange} />
                 </label>
                <input type="submit" value="Let's find your name!" />
      </form>

        <GameBoard 
          userList={this.state.initialUsers}
        />
        <GameComponent />
      

    </div>
  );
}
}

export default App;
