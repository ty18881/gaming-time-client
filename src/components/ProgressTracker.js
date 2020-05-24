/**
 * This component displays the progress towards extra time the player has earned
 * Perfect world, it would update after every game is completed.
 */
import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressTracker(props) {

    const { pointsEarned } = props;
        
        return (
            <>
            
            <h2>30 points = 15 minutes of extra time.</h2>
            <div className='progressbar'>
                <ProgressBar
                    variant='success'
                    now={pointsEarned}
                    label={pointsEarned}
                    max={30}
                />
            </div>
           
            { pointsEarned === 30 ? 
            <div className="congrats-message"> Congrats on earning extra time! Sending an email to your parents now!</div> :
            ""}
            
            </>
        )
  
 }

export default ProgressTracker;