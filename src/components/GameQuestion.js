/**
 * This component houses the specific game question that's being displayed 
 * on the user's screen.
 */

 import React, { useState } from 'react';


import Button from 'react-bootstrap/Button';
    
const GameQuestion = ({checkAnswer, question, getNextQuestion}) => {


        const [userInput, setUserInput] = useState('');
        const [repeatAnswerDisabled, setRepeatAnswerDisabled] = useState(false);

        // handleKey up used by the GameQuestion to detect when user presses enter instead of clicking a button.

        const handleKeyUp = (event, question, userInput) => {
         
            if (event.keyCode === 13) {
                console.log('Detected enter key was depressed')

                checkAnswer(question, userInput);
                setUserInput('');

            }

        }

        return (

            <>
                <div className='current-question'>
                    <h2>Question # {question.id}</h2>
                    <h3> {question.operand1} {question.operator} {question.operand2} = 
                    <input 
                        type="text" 
                        placeholder="" 
                        value={userInput} 
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyUp={(e) => { handleKeyUp(e,question, userInput)}}
                        size='3'
                    />
                    </h3>
                </div>

                <div className="next-question">
                    {/* <Button 
                        variant="primary"
                        size="sm"
                        type="input"
                        value="check-answer"
                        onClick={() => {checkAnswer(question, userInput); setRepeatAnswerDisabled(true); setUserInput('')}}
                        disabled={repeatAnswerDisabled}
                    >
                        Check Your Answer!
                    </Button> */}
                
                            <Button variant="primary" 
                                size="sm" 
                                className="next_question-btn" 
                                value="next_question" 
                                onClick={() => {getNextQuestion(); setRepeatAnswerDisabled(false)}}>
                                    Next Question
                            </Button>
                            
                </div>
            </>
           
        )
   
 }

 export default GameQuestion;