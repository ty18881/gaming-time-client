/**
 * This component represents the game board.
 * 
 */

 import React, { Component } from 'react';
 import GameQuestion from './GameQuestion';
 import GameStatus from './GameStatus';
 import ProgressBar from './ProgressBar';
 import Button from 'react-bootstrap/Button';

 class  GameBoard extends Component {

  state = {
      answerCorrect: false,
      
  }

  checkAnswer = (userInput, question) => {
    console.log(`You submitted ${userInput}.  Let's see if that is correct`);
    console.log(`the correct answer is ${question.answer}`)

    // user input captured as a string.  parsing to integer for the comparison step.
    if (parseInt(userInput) === question.answer) {
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

keyPressed = (event, userInput, question) => {
    if (event.key === 'Enter') {
        console.log('Detected Enter Key Pressed')
    }
console.log(`User input ${userInput}`)
console.log(`the answer = ${question.answer}`)
//    this.checkAnswer(userInput, question);
// this here messes up the GameState
  // not sure if this is bad form but doing it anyway.

}  

     render () { 

      
        const { userList, questionList, updateGameState, totalQuestions, numberCorrect, numberWrong, pointsEarned, endGame, currentQuestion, getNextQuestion, lastQuestion, finishGame, toggleShowNextQuestion } = this.props;

         return (
             <>
            <main>
            <div className="game_question">
               
                <GameQuestion
                    question={currentQuestion}
                    updateGameState={updateGameState}
                    checkAnswer={this.checkAnswer}
                    keyPressed={this.keyPressed}
                    /> 
        
            </div> 
                 

                    

{/* have to show appropriate message when answer is incorrect. */}
              

                
                    {!toggleShowNextQuestion && !lastQuestion ?
                        <div className="nextquestion"><Button variant="primary" size="sm" className="next_question" value="next_question" onClick={() => getNextQuestion()}>Get Next Question</Button></div> :
                        ""}

                </main>
                <aside>
                <div className="game_status">
                    
                    <GameStatus 
                        totalQuestions={totalQuestions} 
                        numberCorrect={numberCorrect}
                        numberWrong={numberWrong}
                        
                    />


                    
                {lastQuestion && !toggleShowNextQuestion ? 
                <div className="finish_game"><Button variant="primary" size="sm" className="finish_game" value="finish_game" onClick={() => endGame(numberCorrect, numberWrong)}>Finished!  Click to Save Your Results!</Button></div> :
                ""}
                </div>
                </aside>
                <nav>
                <div className="progress_bar">
                   
                    <ProgressBar 
                        pointsEarned={pointsEarned}
                    />
                    
                </div>
                </nav>
            <footer>
             <div className="end_game">
                 <Button variant="primary" size="lg" type="submit" value="end_game" onClick={() => endGame(numberCorrect, numberWrong)} block>Stop Playing</Button>
             </div>
             </footer>
             </>
         )
        }
 }

export default GameBoard;