import React from 'react'
import GameBoard from './GameBoard.js'

function Main(props) {
  // below is the object desctructuring approach.
  // don't need this.props construct when we use this.
  // pulls the keys out and makes equivalent variables.
  /**
   * userList={this.state.initialUsers}
        questionList={this.state.questionList}
        updateGameState={this.updateGameState}
   */

  // User wants to end the current game.
    // let's save their progress to the database
    // let's send progress report to their adult if applicable.

    const endGame = () => {
        console.log('Game over!  Thanks for playing!')
        let timeEarned = Math.round(pointsEarned / 15 ) * 15;
        let finishDate = new Date().toDateString();

        // format the date so our DB doesn't choke.


        let gameProgress = {date: finishDate, time_earned: timeEarned, user_id: 1}

        saveGameProgress(gameProgress);

    }

    
    /**
     * save progress to the database.
     * Progressreport model expects the following
     * Date
     * Amount of time earned
     * User Id to identify the user who earned the time.
     * 
     *  */ 
    
   const saveGameProgress = (gameProgress) => {
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


  const { userList, questionList, updateGameState, totalQuestions, numberCorrect, numberWrong, pointsEarned } = props 
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
        />
      </main>
    )
}

export default Main