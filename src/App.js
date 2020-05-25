import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';


import {QuestionProvider} from './providers/QuestionContext';
import GameStatusProvider from './providers/GameStatusContext';
import UserContextProvider from './providers/UserContext'

import GameBoard from './components/GameBoard';


class App extends Component {


  render() {
  return (

    <Router>
      <UserContextProvider>
          <QuestionProvider>
            <GameStatusProvider>
          <div className="App">
              <div className="container">
              
                <Header />

              <Switch>
                <Route path="/" exact component={GameBoard} />
                <Route path="/about" exact component={About} />
                <Route path="/welcome" component={Welcome} />
              </Switch>
  
              </div>
          </div>
          </GameStatusProvider>
          </QuestionProvider>
      </UserContextProvider>
    </Router>
  );
}
}


export default App;
