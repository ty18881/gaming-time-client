import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';


import {QuestionProvider} from './providers/QuestionContext';
import GameStatusProvider from './providers/GameStatusContext';
import UserContextProvider from './providers/UserContext'

import GameBoard from './components/GameBoard';
import Welcome from './components/Welcome';
import About from './components/About';
import Footer from './components/Footer'

class App extends Component {


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

    <Router>
      <UserContextProvider>
          <QuestionProvider>
            <GameStatusProvider>
          <div className="App">
              <div className="container">
              
                <Header />
                <br/>

                <GameBoard/>    
              
              {/* <Footer /> */}
{/* 
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/welcome" component={Welcome} />
              </Switch> */}

              </div>
          </div>
          </GameStatusProvider>
          </QuestionProvider>
      </UserContextProvider>
    </Router>
  );
}
}

const Home = () => {
  return (
<div>
    <h1> Home Page</h1>
  </div>
  )
  
}
export default App;
