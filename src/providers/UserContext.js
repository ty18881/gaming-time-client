/**
 * Purpose is to ensure current user information is available across
 * the application.
 */

import React, { createContext, useEffect, useState } from 'react';

// the function that provides context to any children

export const UserContext = createContext();

// this provider is wrapped around any components that require access to the items in Context

export const UserContextProvider =(props) => {
    
    
    // fetch the collection of known users from our database

    // fetchUserNames = new Promise((resolve, reject) => {
    //     console.log('Fetching user names from the database');
    //     console.log( `${process.env.REACT_APP_BASEURL}/users`)
    //     fetch(`${process.env.REACT_APP_BASEURL}/users`)
    //     .then((response) => response.json())
    //     .then((jData) => {
    //         resolve(jData);
    //     })
      
    // });

    // initializing the user name array to an empty array.
    const [userNames, setUserNames] = useState([]);

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

    return(
        <UserContext.Provider value={{ 
        
            userNames, setUserNames
        }}
        >
            {props.children}
        </UserContext.Provider>
        )
    
}

export default UserContextProvider;
