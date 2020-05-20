import React from 'react'
import GameBoard from './GameBoard.js'

function Main(props) {


   /**
    * User wants to end the current game.
    * let's save their progress to the database
    * 1. step one - create/update the progress report
    * 2. step two - save the current game in the database.
    * let's send progress report to their adult if applicable.
    * GAMES: 
    * date
    * num_correct
    * num_wrong
    * status
    * progressreport_id
    */
  

    const endGame = (numberCorrect, numberWrong) => {
        console.log('Game over!  Thanks for playing!')
        let timeEarned = Math.round(pointsEarned / 15 ) * 15;
        let finishDate = new Date().toDateString();

        // format the date so our DB doesn't choke.

        // this object holds both the game and progress report elements so we hit the DB one time.
        let progressReport = {date: finishDate, time_earned: timeEarned, user_id: 1, num_correct: numberCorrect, num_wrong: numberWrong}

        saveProgressReport(progressReport);


    }

    
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


  const { userList, questionList, updateGameState, totalQuestions, numberCorrect, numberWrong, pointsEarned, currentQuestion, getNextQuestion } = props 
    return (
      <main>
        <GameBoard 
            userList={userList} 
            questionList={questionList}
            updateGameState={updateGameState}
            totalQuestions={totalQuestions}
            numberCorrect={numberCorrect}
            numberWrong={numberWrong}
            pointsEarned={pointsEarned}
            endGame={endGame}
            currentQuestion={currentQuestion}
            getNextQuestion={getNextQuestion}
        />
      </main>
    )
}

export default Main