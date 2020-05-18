/**
 * This component represents the game board.
 * 
 */

 import React, { Component } from 'react';

 class  GameBoard extends Component {

    state = {
        currentUser: "",
        value: ''
    }


     render () { 

         return (
             <>
             <h1>Greeting from Game Board Component</h1>
            
             
             </>
         )
        }
 }

export default GameBoard;