/**
 * Button renders when it's time to ask user to initiate a new game
 */

 import React, { Component } from React;

 class PlayNewGameButton extends Component {
     // define method to fetch questions from the database.

     fetchGameQuestions = new Promise((resolve, reject) => {
        console.log('Fetching questions from the database');
        console.log( `${this.props.baseURL}`)
        fetch(`${this.props.baseURL}/questions`)
        .then((response) => response.json())
        .then((jData) => {
            resolve(jData);
        })
      
    });

    componentDidMount = async () => {
        let questionList = await this.fetchGameQuestions;
    
        this.setState({
          gameQuestions: questionList
        })
    
        console.log("Current questions", questionList);
    }

     // store the questions in my parent's state (App.js)=> will need a method to do this.

     // render component to display the question on the screen??? or trigger App.js to render the component???



 }

 export default PlayNewGameButton