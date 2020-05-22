/**
 * This component houses the specific game question that's being displayed 
 * on the user's screen.
 */

 import React, { Component, useState } from 'react';

import Button from 'react-bootstrap/Button';

 function GameQuestion(props) {

    const { question, handleGameState, checkAnswer, answerCorrect, keyPressed } = props;

    const [userInput, setUserInput ] = useState();

        
        return (
            <>
            <h1> Question # {question.id}</h1>
            <h2> {question.operand1} {question.operator} {question.operand2} = 
            
                <input
                type="text" placeholder=""
                onChange={e => setUserInput(e.target.value)}
                onKeyUp={e => keyPressed(e, userInput, question)}
                />
               
            </h2>
            <div className="check_answer"><Button variant="primary" size="sm" type="input" value="check_answer" onClick={() => {checkAnswer(userInput, question)}}>Check Your Answer!</Button></div>

            {answerCorrect ?
                <div>Congrats!</div> :
                ""}
            </>
        )
  
 }

 export default GameQuestion;