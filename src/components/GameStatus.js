import React, { Component, useState } from 'react';

/**
 * this component holds status of the current game
 * Total questions answered
 * Number Correct
 * Number Incorrect
 */

 class GameStatus extends Component {

    render() {
        const { totalQuestions, numberCorrect, numberWrong } = this.props;
        

        return(
            <>

            <div className="game_status">
               <div className="total"> 
                   Total Questions: {totalQuestions}
               </div>
               <div className="num_correct">
                    Number Correct: {numberCorrect}
               </div>
               <div className="num_wrong">
                    Number Incorrect: {numberWrong}
               </div>
                  
            </div>
            
            </>
        )
    }
 }

 export default GameStatus;