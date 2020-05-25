import React from 'react';

/**
 * this component holds status of the current game
 * Total questions answered
 * Number Correct
 * Number Incorrect
 */

 const GameStatus = ({ totalQuestions, numberCorrect, numberWrong}) => {
      
        return(
            <>
            
           
            <div className="game_status">
                <div className="total"> 
                </div>
                <div className="num-correct rounded-lg">
                        <h1>Correct: {numberCorrect}</h1>
                </div>
                <div className="num-wrong rounded-lg">
                        <h1>Incorrect: {numberWrong}</h1>
                </div>
                    
            </div>
           
            </>
        )

 }

 export default GameStatus;