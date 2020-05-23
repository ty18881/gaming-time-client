import React, { createContext, useEffect, useState } from 'react';

// the function that provides context to any children

export const GameStatusContext = createContext();

// this provider is wrapped around any components that require access to the items in Context

export const GameStatusProvider =(props) => {
    

    const [numberCorrect, setNumberCorrect] = useState(0);
    const [numberWrong, setNumberWrong ] = useState(0);
    const [totalQuestions, setTotalQuestions ] = useState(0);
    const [pointsEarned, setPointsEarned ] = useState(0);
    const [answerCorrect, setAnswerCorrect] = useState(false);

    // function that can be used to modify the above data by consuming components

   
        // the value is the manner in which we provide the data to the components
        // wrapped by our Provider
    return(
        <GameStatusContext.Provider value={{ 
        
            numberCorrect, numberWrong, totalQuestions, pointsEarned, answerCorrect, setAnswerCorrect, setTotalQuestions, setNumberCorrect, setNumberWrong, setPointsEarned
        }}
        >
            {props.children}
        </GameStatusContext.Provider>
        )
    
}

export default GameStatusProvider;
