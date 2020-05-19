/**
 * Purpose of this button is to trigger saving game state to the database.
 */

 import React, {Component} from 'react'

 class EndGameButton extends Component {

    render() {
        const { endGame } = this.props;
        return (
            <>
            <h1>this is supposed to be a button</h1>
            <button name="endgame" value="endgame" type="button" onClick={()=> endGame()}>End current Game</button>
            </>
        )
    }

 }

 export default EndGameButton;