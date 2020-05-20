/**
 * This component represents the game board.
 * 
 */

 import React, { Component } from 'react';
 import GameQuestion from './GameQuestion';
 import GameStatus from './GameStatus';
 import ProgressBar from './ProgressBar';

 class  GameBoard extends Component {

  state = {
      answerCorrect: false,
      toggleShowNextQuestion: false
  }

  checkAnswer = (userInput, question) => {
    console.log(`You submitted ${userInput}.  Let's see if that is correct`);
    console.log(`the correct answer is ${question.answer}`)

    // loose comparison because userInput is a string while question.answer is an integer
    if (userInput == question.answer) {
        console.log(`YOU DID IT!  ${userInput} is correct!`);

        // update the state of the game.

        this.props.updateGameState(question, true);
        this.setState({
            answerCorrect: true,
            toggleShowNextQuestion: true
        })

    } else {
        console.log('Sorry.  Try the next question')
        this.props.updateGameState(question, false);
        this.setState({
            answerCorrect: false,
            toggleShowNextQuestion: true
        })
    }
    
}

handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })

    }

    

     render () { 

      
        const { userList, questionList, updateGameState, totalQuestions, numberCorrect, numberWrong, pointsEarned, endGame, currentQuestion, getNextQuestion } = this.props;

         return (
             <>
     
                <GameQuestion
                    question={currentQuestion}
                    updateGameState={updateGameState}
                    checkAnswer={this.checkAnswer}
                    /> 

                    

{/* have to show appropriate message when answer is incorrect. */}
              

                
                    {this.state.toggleShowNextQuestion ?
                        <div><button className="next_question" value="next_question" onClick={() => getNextQuestion()}>Get Next Question</button></div> :
                        ""}
                <div className="game_status">
                    <GameStatus 
                        totalQuestions={totalQuestions} 
                        numberCorrect={numberCorrect}
                        numberWrong={numberWrong}
                        
                    />

                </div>
                <div className="progress_bar">

                    <ProgressBar 
                        pointsEarned={pointsEarned}
                    />
                </div>
             
             <div className="end_game">
                 <button type="submit" value="end_game" onClick={() => endGame(numberCorrect, numberWrong)}>Stop Playing</button>
             </div>
             </>
         )
        }
 }

export default GameBoard;