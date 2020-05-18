import React from 'react';

const GamesContext = React.createContext();

// the reducer recognizes the action and adjusts the state as required

// these are the actions we recognize

const ANSWER_QUESTION = "ANSWER_QUESTION";
const COMPLETE_GAME = "COMPLETE_GAME";
const FETCH_QUESTION = "FETCH_QUESTION";

let initialUsers;

const gamesReducer = (state, action) => {
    switch (action.type) {
        case ANSWER_QUESTION: {
            // update the answer field in the current question.
            console.log('You answered a question');
            console.log('Now what do we alter in state?');
            return;
        }
        case COMPLETE_GAME: {
            // end the game and trigger all the 'game over' activities
            console.log('SWEET game is over!');
            console.log('What do we change in state?');
            return;
        }
        case FETCH_QUESTION: {
            console.log('Getting the next question into state');
            return;
        }
        default:
            throw new Error(`Unrecognized action ${action.type}`);
    }
}

/**
 * now we load up state that needs to be made available across the application
 * how about loading up the users?
 */

 fetchUserNames = new Promise((resolve, reject) => {
    console.log('Fetching user names from the database');
    console.log( `${process.env.REACT_APP_BASEURL}`)
    fetch(`${process.env.REACT_APP_BASEURL}/users`)
    .then((response) => response.json())
    .then((jData) => {
        resolve(jData);
    })
  
});

componentDidMount = async () => {
    initialUsers = await this.fetchUserNames;
}

const baseURL = process.env.REACT_APP_BASEURL;

 const initialState = {
     users: initialUsers,
 };

 export const GamesProvider = props => {
     const [state, dispatch] = React.useReducer(gamesReducer, initialState);

     const value = React.useMemo(() => ({state, dispatch}), [state]);
     return <GamesContext.Provider value={value} {...props} />
 };


 export const useGamesContext = () => {
     const context = React.useContext(GamesContext);

     if (!context) {
         throw new Error('useGamesContext must be used inside of GamesProvider');
     }

     const {state, dispatch} = context;
     const { questions } = state;
     // something like get next question?

     const getNextQuestion = question => {
         dispatch({ type: FETCH_QUESTION, payload: question})
     }

 };





