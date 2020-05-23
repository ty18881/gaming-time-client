/**
 * This component displays the progress towards extra time the player has earned
 * Perfect world, it would update after every game is completed.
 */
import React, {Components, useState } from 'react'

function ProgressBar(props) {

    const { pointsEarned } = props;
        
        return (
            <>
            
            <h1> Current Progress</h1>
            <h2> So far you have {pointsEarned} points Today!</h2>
            
            
            </>
        )
  
 }

export default ProgressBar;