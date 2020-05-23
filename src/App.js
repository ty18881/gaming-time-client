import React, { Component } from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';


import {QuestionProvider} from './providers/QuestionContext';
import GameStatusProvider from './providers/GameStatusContext';

import GameBoard from './components/GameBoard';

class App extends Component {


  // retrieve known user names from the database

  fetchUserNames = new Promise((resolve, reject) => {
    console.log('Fetching user names from the database');
    console.log( `${process.env.REACT_APP_BASEURL}/users`)
    fetch(`${process.env.REACT_APP_BASEURL}/users`)
    .then((response) => response.json())
    .then((jData) => {
        resolve(jData);
    })
  
});

// fetch game questions from the database

// fetchGameQuestions = new Promise((resolve, reject) => {
//   console.log('Fetching questions from the database');
//   fetch(`${process.env.REACT_APP_BASEURL}/questions`)
//   .then((response) => response.json())
//   .then((jData) => {
//       resolve(jData);
//   })
// });

// make sure we wait for the fetch to complete before attempting to 
// put the values into state.

componentDidMount = async () => {
    let userList = await this.fetchUserNames;
    // let questionList = await this.fetchGameQuestions;

    this.setState({
      initialUsers: userList,
      // currentQuestion: questionList.pop(),
      // initialQuestions: questionList,
      
    })

    // console.log("Loaded Users", userList);
    // console.log("Loaded Questions", questionList)
}




 
handleChange = (event) => {

  console.log('Form Change detected')
  console.log(`event = ${event.target.value}`)
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

  // the values here determine the conditional rendering that happens next.
  if (foundUser != null) {
      console.log("Welcome this user back to the game.");
      this.setState({
        currentUser: foundUser,
        isNewUser: false
      })
  } else {
    // the user is new to us.
    // display the rules
    // display a button asking if they want to play.
      console.log("display the rules")
  }

};


// our child component captures parent email address.
// this method enables the component to push that value back up to App.js

handleAddParentEmail = (event) => {
  console.log('Capturing Parent Email Address');
  event.preventDefault();
  console.log("Current Event", event.target.value);
  this.setState({
    parentEmail: event.target.value
  })

  console.log('Current state', this.state.parentEmail);
}


  render() {
  return (

    <QuestionProvider>
      <GameStatusProvider>
    <div className="App">
     <div className="container">
     
      <Header />
      <br/>

      <GameBoard/>    
     
     </div>
    </div>
    </GameStatusProvider>
    </QuestionProvider>
  );
}
}

export default App;
