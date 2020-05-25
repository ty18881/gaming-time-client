import React, { createContext, useState } from 'react';

// the function that provides context to any children

export const GameStatusContext = createContext();

// this provider is wrapped around any components that require access to the items in Context

export const GameStatusProvider =(props) => {
    

    const [numberCorrect, setNumberCorrect] = useState(0);
    const [numberWrong, setNumberWrong ] = useState(0);
    const [totalQuestions, setTotalQuestions ] = useState(0);
    const [pointsEarned, setPointsEarned ] = useState(0);
    const [answerCorrect, setAnswerCorrect] = useState(false);

    const [finishGame, setFinishGame] = useState(false);

    // function that can be used to modify the above data by consuming components

   
        // the value is the manner in which we provide the data to the components
        // wrapped by our Provider

    const resetGame = () => {
        console.log('Resetting the Game Board upon user request');
        setNumberCorrect(0);
        setNumberWrong(0);
        setTotalQuestions(0);
        setPointsEarned(0);
        setFinishGame(true);
    }
    return(
        <GameStatusContext.Provider value={{ 
        
            numberCorrect, numberWrong, totalQuestions, pointsEarned, answerCorrect, finishGame, setAnswerCorrect, setTotalQuestions, setNumberCorrect, setNumberWrong, setPointsEarned, setFinishGame, resetGame
        }}
        >
            {props.children}
        </GameStatusContext.Provider>
        )
    
}

export default GameStatusProvider;
