import React, {useState, useEffect, createContext} from 'react';


// the function that provides context to any children

export const QuestionContext = createContext();

// this provider is wrapped around any components that require access to the items in Context

export const QuestionProvider = (props) => {
    
    // the below code leads to the question array being empty when the GameBoard renders.
    // const [questions, setQuestions] = useState([]);

    // const URL = `${process.env.REACT_APP_BASEURL}/questions`;
    // console.log(`We're hitting ${URL} for our query`);

    // const fetchGameQuestions = async () => {

    //     console.log()
    //     try {

    //         await fetch(`${URL}`)
    //         .then((response) => response.json())
    //         .then((jData) => setQuestions(jData));
            
    //     } catch (e) {
    //         if (e) {
    //             console.log(e);
    //         }
    //     }
    // }

    // useEffect(() => {
    //     fetchGameQuestions()
    // }, []);
  
    // console.log('questions', questions);
    
    
    

    const [questions, setQuestions] = useState([
        { id: 1, operator: 'x', operand1: 4, operand2: 1, answer: 4 , point_value: 2},
        { id: 2, operator: 'x', operand1: 4, operand2: 2, answer: 8 , point_value: 2},
        { id: 3, operator: 'x', operand1: 4, operand2: 3, answer: 12 , point_value: 2},
        { id: 4, operator: 'x', operand1: 4, operand2: 4, answer: 16 , point_value: 2},
        { id: 5, operator: 'x', operand1: 4, operand2: 5, answer: 20 , point_value: 2},
        { id: 6, operator: 'x', operand1: 4, operand2: 6, answer: 24 , point_value: 2},
        { id: 7, operator: 'x', operand1: 4, operand2: 7, answer: 28 , point_value: 2},
        { id: 8, operator: 'x', operand1: 4, operand2: 8, answer: 32 , point_value: 2},
        { id: 9, operator: 'x', operand1: 4, operand2: 9, answer: 36 , point_value: 2},
        { id: 10, operator: 'x', operand1: 4, operand2: 10, answer: 40 , point_value: 2},
        { id: 11, operator: 'x', operand1: 4, operand2: 11, answer: 44 , point_value: 2},
        { id: 12, operator: 'x', operand1: 4, operand2: 12, answer: 48 , point_value: 2},
        { id: 13, operator: 'x', operand1: 4, operand2: 13, answer: 52 , point_value: 2},
        { id: 14, operator: 'x', operand1: 4, operand2: 14, answer: 56 , point_value: 2},
        { id: 15, operator: 'x', operand1: 4, operand2: 15, answer: 60 , point_value: 2}
    ])

    const [answerCorrect, setAnswerCorrect] = useState(false);
    const [showNextQuestion, setShowNextQuestion ] = useState(false);
    const [firstQuestion, setFirstQuestion] = useState(questions[0]);
    const [nextQuestion, setNextQuestion] = useState({})

    const [lastQuestion, setLastQuestion] = useState(false);

    // think we only have to export the non-setter functions???
    return(
        <QuestionContext.Provider 
            value={{
                firstQuestion, questions,  answerCorrect, setAnswerCorrect, showNextQuestion, setShowNextQuestion, nextQuestion, setNextQuestion, lastQuestion, setLastQuestion
            }}
           
            >
            {props.children}
        </QuestionContext.Provider>
    )
}



