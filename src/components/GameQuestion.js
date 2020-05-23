/**
 * This component houses the specific game question that's being displayed 
 * on the user's screen.
 */

 import React, { useState } from 'react';


import Button from 'react-bootstrap/Button';
    
const GameQuestion = ({checkAnswer, question, getNextQuestion}) => {


        const [userInput, setUserInput] = useState('');
        const [repeatAnswerDisabled, setRepeatAnswerDisabled] = useState(false);

        return (

            <>
                <h2>Question # {question.id}</h2>
                <h3> {question.operand1} {question.operator} {question.operand2} = </h3>
                <input 
                    type="text" placeholder="" value={userInput} onChange={(e) => setUserInput(e.target.value)}
                />
                <div> 
                    <Button 
                        variant="primary"
                        size="sm"
                        type="input"
                        value="check-answer"
                        onClick={() => {checkAnswer(question, userInput); setRepeatAnswerDisabled(true); setUserInput('')}}
                        disabled={repeatAnswerDisabled}
                    >
                        Check Your Answer!
                    </Button>
                </div>
                <div className="nextquestion">
                            <Button variant="primary" 
                                size="sm" 
                                className="next_question" 
                                value="next_question" 
                                onClick={() => {getNextQuestion(); setRepeatAnswerDisabled(false)}}>
                                    Get Next Question
                            </Button>
                            
                </div>
            </>
           
        )
   
 }

 export default GameQuestion;