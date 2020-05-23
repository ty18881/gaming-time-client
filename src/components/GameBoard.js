/**
 * This component represents the game board.
 * 
 */

 import React, { Component, useState, useContext, useEffect } from 'react';
 import GameQuestion from './GameQuestion';
 import GameStatus from './GameStatus';
 import ProgressBar from './ProgressBar';

 
 import {QuestionContext} from '../providers/QuestionContext';
 import {GameStatusContext} from '../providers/GameStatusContext';

 import Button from 'react-bootstrap/Button';

 const  GameBoard = (props) => {

    const { questions } = useContext(QuestionContext);
    // const {firstQuestion} = useContext(QuestionContext);
    const {nextQuestion} = useContext(QuestionContext);
    const {setNextQuestion} = useContext(QuestionContext);
    const {lastQuestion} = useContext(QuestionContext);
    const {setLastQuestion} = useContext(QuestionContext);

    const { totalQuestions } = useContext(GameStatusContext);
    const {setTotalQuestions} = useContext(GameStatusContext);
    const {numberCorrect} = useContext(GameStatusContext);
    const {setNumberCorrect} = useContext(GameStatusContext);
    const {numberWrong} = useContext(GameStatusContext);
    const { setNumberWrong} = useContext(GameStatusContext);
    const {pointsEarned} = useContext(GameStatusContext);
    const {setPointsEarned} = useContext(GameStatusContext);
    const {answerCorrect} = useContext(GameStatusContext);
    const {setAnswerCorrect} = useContext(GameStatusContext);

    



const getNextQuestion = () => {
    console.log("Fetching next question from the collection");
    // if we are out of questions, the screen needs to behave differently.
    questions.length > 0 ? setNextQuestion(questions.pop()) : setLastQuestion(true)   
    console.log(`Next Question is ${nextQuestion}`)
  }

  useEffect(() => {
      console.log('Trying effect to render next question');
      getNextQuestion();
  }, [questions])

    // set effect to keep the whole board from re-rendering every time we pull a question from the stack???

    const endGame = (numberCorrect, numberWrong ) => {
        console.log('Game is over - Gotta save results to the database');
    }


   const checkAnswer = (question, userInput) => {
        console.log(`You submitted ${userInput}.  Let's see if that is correct`);
        console.log(`the correct answer is ${question.answer}`)

        // user input captured as a string.  parsing to integer for the comparison step.
        if (parseInt(userInput) === question.answer) {
            console.log(`YOU DID IT!  ${userInput} is correct!`);

            setAnswerCorrect(true);
            setNumberCorrect(numberCorrect+1);
            setTotalQuestions(totalQuestions+1);
            setPointsEarned(pointsEarned+question.point_value);

        } else {
            console.log('Sorry.  Try the next question')
            setAnswerCorrect(false);
            setNumberWrong(numberWrong+1);
            setTotalQuestions(totalQuestions+1);
        }
    
    }
         return (
             <>
            <main>

                {!lastQuestion ?
                        <div className="game-question">
                                
                        <GameQuestion
                            question={nextQuestion}
                            checkAnswer={checkAnswer}
                            getNextQuestion={getNextQuestion}
                            /> 
                
                    </div> :
                    <div className="finish_game">
                        <Button variant="primary" 
                            size="sm" 
                            value="finish_game" 
                            onClick={() => endGame(numberCorrect, numberWrong)}>
                                
                            Finished!  Click to Save Your Results!
                        </Button>
                    </div>
                
                }
                       
            </main>


                {/* <aside>
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
             </footer> */}
             </>
         )
        
 }

export default GameBoard;