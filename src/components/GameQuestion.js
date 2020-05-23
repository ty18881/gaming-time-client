/**
 * This component houses the specific game question that's being displayed 
 * on the user's screen.
 */

 import React, { useContext, useState } from 'react';
//  import { QuestionContext } from '../providers/QuestionContext';
//  import { GameStatusContext } from '../providers/GameStatusContext';

import Button from 'react-bootstrap/Button';
    
const GameQuestion = ({checkAnswer, question, getNextQuestion}) => {


        // const { questions } = useContext(QuestionContext);
        // const { firstQuestion } = useContext(QuestionContext);
        const [userInput, setUserInput] = useState('');

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
                        onClick={() => {checkAnswer(question, userInput)}}
                    >
                        Check Your Answer!
                    </Button>
                </div>
                <div className="nextquestion">
                            <Button variant="primary" 
                                size="sm" 
                                className="next_question" 
                                value="next_question" 
                                onClick={() => getNextQuestion()}>
                                    Get Next Question
                            </Button>
                            
                </div>
            </>
           
        )
   
 }

 export default GameQuestion;