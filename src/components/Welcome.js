/**
 * Renders for users.  I'd like to recognize existing users here.
 * By prompting for their username then looking it up in state.
 * Captures parent email address and passes back up to App.js
 * Explains the game rules
 */

 import React, { useState, useContext } from 'react';
 import {UserContext} from '../providers/UserContext';

 import Button from 'react-bootstrap/Button';

 function Welcome() {

    // these will capture input from our form.
    // we're expecting four pieces of data
    // username and age, parent name and parent email
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');

    const [parentEmail, setParentEmail] = useState('');
    const [parentName, setParentName] = useState('');

    const [foundUser, setFoundUser] = useState(false);

    const {findUser} = useContext(UserContext);

    const {currentUser} = useContext(UserContext);

    const {addNewUser} = useContext(UserContext);

      
    
      const handleSubmit = (event) => {
       
        event.preventDefault();
        console.log('do we recognize this user?');
        // search the collection in state for the user name submitted in the form.
        // this method sets current user in state in UserContext.
       findUser(userName);
      
        // the values here determine the conditional rendering that happens next.
        if (currentUser.name === userName) {
            console.log(`Welcome this user back to the game. ${userName}`);
            setFoundUser(true);

        } else {
          
            console.log("Adding you to our database");

            // this call sets currentUser in state as well.
            addNewUser(userName, age, parentName, parentEmail);
            console.log('did we recognize you as current user?  Is this the name you typed?', currentUser.name);
        }
      
      };

        return(
            <>
{/* on click, hit the method in the UserContext to check if the user is known to us.
    if not, go ahead and add them and store the corresponding user object in state.
    else,  store the corresponding user object in state. */}
            
               
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
                    <label htmlFor="age"/>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        placeholder="how old are you"
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <label htmlFor="parentName"/>
                    <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        placeholder="what's your Adult's Name?"
                        onChange={(e) => setParentName(e.target.value)}
                    />
                    <input
                        type="text"
                        id="parentEmail"
                        name="parentEmail"
                        placeholder="what's their email address?"
                        onChange={(e) => setParentEmail(e.target.value)}
                    />
                    <Button variant="primary" 
                                size="sm" 
                                className="save-user" 
                                value="save-user" 
                                type="submit">
                                    Submit
                            </Button>
            </form>     
           
            </>
        )

 }

 export default Welcome;