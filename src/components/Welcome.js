/**
 * Renders for users.  I'd like to recognize existing users here.
 * By prompting for their username then looking it up in state.
 * Captures parent email address and passes back up to App.js
 * Explains the game rules
 */

 import React, { useState, useEffect, useContext } from 'react';
 import {UserContext} from '../providers/UserContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


 function Welcome() {

    // these will capture input from our form.
    // we're expecting four pieces of data
    // username and age, parent name and parent email
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');

    const [parentEmail, setParentEmail] = useState('');
    const [parentName, setParentName] = useState('');

    

    const [foundUser, setFoundUser] = useState(false);

    // use Context to get the username list.
    const {userNames} = useContext(UserContext);

    // userNames, setUserNames, newUser, addNewUser, currentUser, findUser
    const {findUser} = useContext(UserContext);

    const {currentUser} = useContext(UserContext);

      
    
      const handleSubmit = (event) => {
        console.log('do we recognize this user?');
        event.preventDefault();
      
       
      
        // the values here determine the conditional rendering that happens next.
        if (currentUser != null) {
            console.log("Welcome this user back to the game.");
            setFoundUser(true);
        } else {
          // the user is new to us.
          // display the rules
          // display a button asking if they want to play.
            console.log("display the rules")
        }
      
      };

        return(
            <>
{/* on click, hit the method in the UserContext to check if the user is known to us.
    if not, go ahead and add them and store the corresponding user object in state.
    else,  store the corresponding user object in state. */}
            
                <h2>GAME WELCOME PAGE</h2>
                {/* I'm going to have to style this div and position it properly on the screen.
                    I want it to appear below the 'Nav' links above and across one line. */}
            <form onSubmit={handleSubmit}>
                    <label htmlFor="username"/>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="what's your username?"
                        onChange={(e) => setUserName(e.target.value)}
                    />

                    
            </form>     
           
            </>
        )

 }

 export default Welcome;