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
                   <h1>
                        Total Questions: {totalQuestions}  
                    </h1> 
                </div>
                <div className="num_correct">
                        <h1>Number Correct: {numberCorrect}</h1>
                </div>
                <div className="num_wrong">
                        <h1>Number Incorrect: {numberWrong}</h1>
                </div>
                    
            </div>
           
            </>
        )
    }
 }

 export default GameStatus;