/**
 * This component houses the specific game question that's being displayed 
 * on the user's screen.
 */

 import React, { useContext, useState } from 'react';
 import { QuestionContext } from '../providers/QuestionContext';
 import { GameStatusContext } from '../providers/GameStatusContext';

import Button from 'react-bootstrap/Button';
    
const GameQuestion = ({checkAnswer}) => {


        const { questions } = useContext(QuestionContext);
        const { firstQuestion } = useContext(QuestionContext);
        const [userInput, setUserInput] = useState('');

        return (

            <>
                <h2>Question # {firstQuestion.id}</h2>
                <h3> {firstQuestion.operand1} {firstQuestion.operator} {firstQuestion.operand2} = </h3>
                <input 
                    type="text" placeholder="" value={userInput} onChange={(e) => setUserInput(e.target.value)}
                />
                <div> 
                    <Button 
                        variant="primary"
                        size="sm"
                        type="input"
                        value="check-answer"
                        onClick={() => {checkAnswer(firstQuestion, userInput)}}
                    >
                        Check Your Answer!
                    </Button>
                </div>
            </>
           
        )
   
 }

 export default GameQuestion;