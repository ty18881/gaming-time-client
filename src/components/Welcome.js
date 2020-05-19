/**
 * Renders for new users.
 * Captures parent email address and passes back up to App.js
 * Explains the game rules
 */

 import React, { Component } from 'react';

 class Welcome extends Component {

    state = {
        enteredData: ""
    }

     render() {

        const { userName, handleAddParentEmail, handleChange, parentEmail } = this.props;

        return(
            <>
            <h2>Welcome to our game {userName}!</h2>
            <h3> Please give me your adult's email so we can share your progress!</h3>

            
            <form onSubmit={handleAddParentEmail}>
                 <label htmlFor="parent_email">Parent's email address:</label>
                     
                     <input type="text" value={this.state.parentEmail} onChange={handleChange} />
                
                <input type="submit" value="Save the email address" />
            </form>
            <h3>Here's how to play - blah, blah,blah</h3>
            </>
        )
     }
 }

 export default Welcome;