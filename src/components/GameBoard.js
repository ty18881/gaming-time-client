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
      answerCorrect: false
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
            answerCorrect: true
        })

    } else {
        console.log('Sorry.  Try the next question')
        this.props.updateGameState(question, false);
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

    getQuestion = () => {
        console.log("Fetching next question from the collection");
        this.setState({
            currentQuestion: this.props.questionList.pop()
        })
        console.log('Question from the stack = ', this.state.currentQuestion)
    }

    

     render () { 

      
        const { userList, questionList, updateGameState, totalQuestions, numberCorrect, numberWrong, pointsEarned, endGame } = this.props;

         return (
             <>
{/*             
                <GameQuestion
                    question={this.state.currentQuestion}
                    updateGameState={updateGameState}
                    checkAnswer={this.checkAnswer}
                    /> */}
       
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
                <div className="progress_bar">

                    <ProgressBar 
                        pointsEarned={pointsEarned}
                    />
                </div>
             
             <div className="end_game">
                 <button type="submit" value="end_game" onClick={() => endGame()}>Stop Playing</button>
             </div>
             </>
         )
        }
 }

export default GameBoard;