import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Header';
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
                <br/>

              
              
              {/* <Footer /> */}

              <Switch>
                <Route path="/" exact component={GameBoard} />
                <Route path="/about" exact component={About} />
                <Route path="/welcome" component={Welcome} />
              </Switch>

              <GameBoard/>   
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
    
  </div>
  )
  
}
export default App;
