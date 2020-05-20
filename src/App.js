import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Main from './components/Main'

class App extends Component {

  state = {
    initialUsers: [],
    value: "",
    currentUser: "",
    isNewUser: true,
    parentEmail: "",
    initialQuestions: [],
    numberCorrect: 0,
    numberWrong: 0,
    totalQuestions: 0,
    pointsEarned: 0,
    currentQuestion: {}
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

// fetch game questions from the database

fetchGameQuestions = new Promise((resolve, reject) => {
  console.log('Fetching questions from the database');
  fetch(`${process.env.REACT_APP_BASEURL}/questions`)
  .then((response) => response.json())
  .then((jData) => {
      resolve(jData);
  })
});

// make sure we wait for the fetch to complete before attempting to 
// put the values into state.

componentDidMount = async () => {
    let userList = await this.fetchUserNames;
    let questionList = await this.fetchGameQuestions;

    this.setState({
      initialUsers: userList,
      currentQuestion: questionList.pop(),
      initialQuestions: questionList,
      
    })

    console.log("Loaded Users", userList);
    console.log("Loaded Questions", questionList)
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


/**
 * This method captures when player answers questions 
 * Used to capture the state of the game.
 */

updateGameState = (question, answeredCorrectly) => {
  console.log('Congrats! You are updating the game status');
  console.log(`user answered ${question.id} and their answer was ${answeredCorrectly}`);

  let total = this.state.totalQuestions;
  let correct = this.state.numberCorrect;
  let wrong = this.state.numberWrong;
  let pointTotal = this.state.pointsEarned + parseInt(question.point_value);

  
  // increment the number correct or incorrect, depending upon if the answer was true or false.

  if (answeredCorrectly) {
    console.log(`Correct Answer - updating totals in state.  Point Total = ${pointTotal}`)

    this.setState({
      numberCorrect: correct+=1,
      totalQuestions: total+=1,
      pointsEarned: pointTotal
    })
    console.log(`updating Game state point total = ${this.state.pointsEarned} by ${pointTotal} points`);
    
  } else {
      this.setState({
        totalQuestions: total+=1,
        numberWrong: wrong+=1,
        pointsEarned: this.state.pointsEarned
      })
  }
  
 
}


/**
 * Return next question from the collection stored in state.
 */
getNextQuestion = () => {
  console.log("Fetching next question from the collection");
  let tempArray = this.state.initialQuestions;
  if (tempArray.length > 0) {
    this.setState({
      currentQuestion: tempArray.pop()
  })
  console.log('Question from the stack = ', this.state.currentQuestion)
  } else {
    console.log("no more questions")
  }
  
}

  render() {
  return (
    <div className="App">
      <Header />
      <Main 
        userList={this.state.initialUsers}
        questionList={this.state.initialQuestions}
        updateGameState={this.updateGameState}
        totalQuestions={this.state.totalQuestions}
        numberCorrect={this.state.numberCorrect}
        numberWrong={this.state.numberWrong}
        pointsEarned={this.state.pointsEarned}
        currentQuestion={this.state.currentQuestion}
        getNextQuestion={this.getNextQuestion}
      />    
      

    </div>
  );
}
}

export default App;
