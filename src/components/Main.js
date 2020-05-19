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
  const { userList, questionList, updateGameState, totalQuestions, numberCorrect, numberWrong } = props 
    return (
      <main>
        <GameBoard 
            userList={userList} 
            questionList={questionList}
            updateGameState={updateGameState}
            totalQuestions={totalQuestions}
            numberCorrect={numberCorrect}
            numberWrong={numberWrong}
        />
      </main>
    )
}

export default Main