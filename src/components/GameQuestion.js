/**
 * This component houses the specific game question that's being displayed 
 * on the user's screen.
 */

 import React, { Component, useState } from 'react';

 function GameQuestion(props) {

    const { question, handleGameState, checkAnswer} = props;

    const [userInput, setUserInput ] = useState();
    
        
        return (
            <>
            <h1> Question # {question.id}</h1>
            <h2> {question.operand1} {question.operator} {question.operand2} = <input
                type="text"
                onChange={e => setUserInput(e.target.value)}
                />
            </h2>
            <button type="input" value="check_answer" onClick={() => {checkAnswer(userInput, question)}}>Check Your Answer!</button>

            
            </>
        )
  
 }

 export default GameQuestion;