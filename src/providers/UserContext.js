/**
 * Purpose is to ensure current user information is available across
 * the application.
 */

import React, { createContext, useEffect, useState } from 'react';

// the function that provides context to any children

export const UserContext = createContext();

// this provider is wrapped around any components that require access to the items in Context

export const UserContextProvider =(props) => {
    

    // initializing the user name array to an empty array.
    const [userNames, setUserNames] = useState([]);
    const [newUser, setNewUser] = useState({});
    const [currentUser, setCurrentUser] = useState({});

    const URL = `${process.env.REACT_APP_BASEURL}/users`;
    console.log(`We're hitting ${URL} for our query`);

    const fetchUserNames = async () => {

        console.log()
        try {

            await fetch(`${URL}`)
            .then((response) => response.json())
            .then((jData) => setUserNames(jData));
            
        } catch (e) {
            if (e) {
                console.log(e);
            }
        }
    }

    useEffect(() => {
        fetchUserNames()
    }, []);
  
    console.log('User Names', userNames);

    const saveNewUser = async (username, age, parentName, parentEmail) => {

        console.log(`Saving new user: ${username}, ${age}, ${parentName}, ${parentEmail}`);
        fetch(`${URL}`, {
            method: 'POST',
            body: JSON.stringify({
                name: username,
                age: age,
                parentName: parentName,
                parentEmail: parentEmail
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resJson => {
            console.log('User Saved to the DB')
            
            setUserNames([...userNames, resJson]);
            setCurrentUser(resJson);
            console.log(resJson)
        })
        .catch(error => console.error({Error: error}));
    };

    const addNewUser = (username, age, parentName, parentEmail) => {

        console.log(`Saving new player ${username} to our database`);
        // user to our database, add corresponding parent record to our database.

        // once the DB portions are complete, need to save the new user to our collection in state
        saveNewUser(username, age, parentName, parentEmail);
        // add the new user to state.
        // setUserNames([...userNames, currentUser]);
    }

    //review userNames collection and find this user. 
    // we'll need to set this object in state so if the attempt to save data, we have their id.
    const findUser = (userName) => {
        console.log('hit the function. Congrats.', userName)
        
        console.log(userNames.find(element => element.name === userName))
// this line here doesn't seem to be working as expected.  Current user remains the default, an empty object.
        setCurrentUser(userNames.find(element => element.name === userName));
        console.log(`Found the user ${currentUser.name}`);

    }

    return(
        <UserContext.Provider value={{ 
        
            userNames, setUserNames, newUser, addNewUser, currentUser, findUser
        }}
        >
            {props.children}
        </UserContext.Provider>
        )
    
}

export default UserContextProvider;
