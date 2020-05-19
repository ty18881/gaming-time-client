/**
 * This component represents the game board.
 * 
 */

 import React, { Component } from 'react';
 import GameQuestion from './GameQuestion';
 import GameStatus from './GameStatus';

 class  GameBoard extends Component {

  state = {
      totalQuestions: 0,
      numberCorrect: 0,
      numberWrong: 0,
      answerCorrect: false
  }

  checkAnswer = (userInput, question) => {
    console.log(`You submitted ${userInput}.  Let's see if that is correct`);
    console.log(`the correct answer is ${question.answer}`)

    // loose comparison because userInput is a string while question.answer is an integer
    if (userInput == question.answer) {
        console.log(`YOU DID IT!  ${userInput} is correct!`);

        // update the state of the game.

        this.props.updateGameState(question.id, true);
        this.setState({
            answerCorrect: true
        })

    } else {
        console.log('Sorry.  Try the next question')
        this.props.updateGameState(question.id, false);
        this.setState({
            answerCorrect: false
        })
    }
    
}

handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })

    }

     render () { 

        const { userList, questionList, updateGameState, totalQuestions, numberCorrect, numberWrong } = this.props;

         return (
             <>
      
              {questionList.map(question => 
                <GameQuestion 
                    key={question.id} 
                    question={question} 
                    updateGameState={updateGameState}
                    checkAnswer={this.checkAnswer}
                    />
                )}

{/* have to show appropriate message when answer is incorrect. */}
                {this.state.answerCorrect ?
                <div>Congrats!</div> :
                ""}

                
                <div className="game_status">
                    <GameStatus 
                        totalQuestions={totalQuestions} 
                        numberCorrect={numberCorrect}
                        numberWrong={numberWrong}
                        
                    />

                </div>
                
             
             </>
         )
        }
 }

export default GameBoard;