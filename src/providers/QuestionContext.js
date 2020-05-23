import React, {useState, useEffect, createContext} from 'react';


// the function that provides context to any children

export const QuestionContext = createContext();

// this provider is wrapped around any components that require access to the items in Context

export const QuestionProvider = (props) => {
    
    // empty array we're going to load from the database.
    let questionList = [];

    // need to fetch the list of questions into an array that will be passed via useState;
    // const fetchGameQuestions = new Promise((resolve, reject) => {
    //     console.log('Fetching questions from the database');
    //     fetch(`${process.env.REACT_APP_BASEURL}/questions`)
    //     .then((response) => response.json())
    //     .then((jData) => {
    //         resolve(jData);
    //     })
    //     console.log('Questions Fetched');
        
    //   });

    //    const fetchGameQuestions = async() => {
    //     console.log('Fetching questions from the database');
    //     try {
    //         const questionData = await fetch(`${process.env.REACT_APP_BASEURL}/questions`);
           
    //         questionList = await questionData.json();
    //         console.log('Json Data returned: ', questionList);
    //     } catch (error) {
    //         console.log(error)
    //     }
    //     console.log('Questions Fetched');
        
    //   };

    // useEffect(() => {
    //     console.log("fetching the questions");
    //     fetchGameQuestions()
    // }, []);

    // const componentDidMount = async () => {
    
    //     console.log('Executing Component did mount');
    //     questionList = await fetchGameQuestions;
    //     console.log("Loaded Questions", questionList)
    // }

    // 2020.05.22 - FETCH ISN'T WORKING SO revert to hard coding the questions for now.
    // need to continue testing the context work.
    // const [questions, setQuestions] = useState(questionList);

    const [questions, setQuestions] = useState([
        { id: 1, operator: 'x', operand1: 4, operand2: 2, answer: 8 , point_value: 2},
        { id: 2, operator: 'x', operand1: 4, operand2: 3, answer: 8 , point_value: 12},
        { id: 3, operator: 'x', operand1: 4, operand2: 4, answer: 8 , point_value: 16},
        { id: 4, operator: 'x', operand1: 4, operand2: 5, answer: 8 , point_value: 20},
        { id: 5, operator: 'x', operand1: 4, operand2: 6, answer: 8 , point_value: 24},
        { id: 6, operator: 'x', operand1: 4, operand2: 7, answer: 8 , point_value: 28},
        { id: 7, operator: 'x', operand1: 4, operand2: 8, answer: 8 , point_value: 32},
        { id: 8, operator: 'x', operand1: 4, operand2: 9, answer: 8 , point_value: 36},
        { id: 9, operator: 'x', operand1: 4, operand2: 10, answer: 8 , point_value: 40},
        { id: 10, operator: 'x', operand1: 4, operand2: 11, answer: 8 , point_value: 44},
        { id: 11, operator: 'x', operand1: 4, operand2: 12, answer: 8 , point_value: 48}
    ])

    const [answerCorrect, setAnswerCorrect] = useState(false);
    const [showNextQuestion, setShowNextQuestion ] = useState(false);
    const [firstQuestion, setFirstQuestion] = useState(questions[0]);

    // think we only have to export the non-setter functions???
    return(
        <QuestionContext.Provider 
            value={{
                firstQuestion, questions,  answerCorrect, setAnswerCorrect, showNextQuestion, setShowNextQuestion
            }}
           
            >
            {props.children}
        </QuestionContext.Provider>
    )
}



