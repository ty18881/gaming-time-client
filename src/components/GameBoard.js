/**
 * This component represents the game board.
 * 
 */

 import React, { useContext, useEffect } from 'react';
 import GameQuestion from './GameQuestion';
 import GameStatus from './GameStatus';
 import ProgressTracker from './ProgressTracker';
 import GameOver from './GameOver';



 
 import {QuestionContext} from '../providers/QuestionContext';
 import {GameStatusContext} from '../providers/GameStatusContext';
 import {UserContext} from '../providers/UserContext';

 import Button from 'react-bootstrap/Button';
//  import ProgressBar from 'react-bootstrap/ProgressBar';


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

    const {finishGame} = useContext(GameStatusContext);
    const {resetGame} = useContext(GameStatusContext);

    
    const {currentUser} = useContext(UserContext);


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

    const endGame = (numberCorrect, numberWrong) => {
        console.log('Game over!  Thanks for playing!')
        let timeEarned = Math.round(pointsEarned / 15 ) * 15;
        let finishDate = new Date().toDateString();

        
        // format the date so our DB doesn't choke.

        // this object holds both the game and progress report elements so we hit the DB one time.
        let progressReport = {date: finishDate, time_earned: timeEarned, user_id: 1, num_correct: numberCorrect, num_wrong: numberWrong}
        console.log(`Progress Report = ${progressReport}`)
        saveProgressReport(progressReport);
        resetGame();
        
    }

    // I actually want this to happen in the game status context instead but we'll get there.
    /**
     * save progress to the database.
     * Progressreport model expects the following
     * Date
     * Amount of time earned
     * User Id to identify the user who earned the time.
     * 
     *  */ 
    
   const saveProgressReport = (gameProgress) => {
       fetch('http://localhost:3000/progressreports', {
           body: JSON.stringify(gameProgress),
           method: 'POST',
           headers: {
               'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json'
           }
       })
       .then(createdReport => createdReport.json())
       .then(jsonedReport => console.log('New Report Created', jsonedReport))
       .catch(error => console.log(error));
        
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
             {/* There's a better way to do this.  Basically, want to display a default screen when user ends the game.
                  ELSE, display the regular game board. */}

        { finishGame ?
           <main> <GameOver /> </main>
            :
            <main>
                    {/* Main is where the each game question renders.
                        When we are out of questions, a button appears to end the game gracefully */}
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
        }
                {/* Aside is where the status of the current game is displayed
                    This is updated after each question is answered by the player */}

                <aside>
                <div className="game_status">
                    
                    <GameStatus 
                        totalQuestions={totalQuestions} 
                        numberCorrect={numberCorrect}
                        numberWrong={numberWrong}
                        
                    />
                </div>
                </aside>

{/* Nav is where the Progress Bar lives
    This tells the player how close they are to the next 
    level of extra time. */}

                
                <nav>
                <div className="progress_bar">
                    <ProgressTracker 
                        pointsEarned={pointsEarned}
                    />
                    
                </div>
                </nav>
               
               
            
                <footer>
                <div className="end-game">
                    <Button variant="primary" size="lg" type="submit" value="end_game" onClick={() => endGame(numberCorrect, numberWrong)} block>Stop Playing</Button>
                </div>
                </footer>
            )
        }
             </>
        )
         
        
 }

export default GameBoard;