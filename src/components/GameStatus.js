import React, { Component, useState } from 'react';

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
                   <h1>
                        Total Questions: {totalQuestions}  
                    </h1> 
                </div>
                <div className="num_correct">
                        <h1>Correct: {numberCorrect}</h1>
                </div>
                <div className="num_wrong">
                        <h1>Incorrect: {numberWrong}</h1>
                </div>
                    
            </div>
           
            </>
        )

 }

 export default GameStatus;