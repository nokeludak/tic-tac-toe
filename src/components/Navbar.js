import React from "react";
import '../style/Navbar.css';
import "../components/Board";



const Navbar = ({player1Count, player2Count, tieCount}) => {
    const player1 = localStorage.getItem("Player1");
    const player2 = localStorage.getItem("Player2");
    
    return (
        <div className="navbar">
            Tic Tac Toe
        <div className="title">
       
        <div className="right">
            {player1}:{player1Count}
            &nbsp;&nbsp;
            {player2}:{player2Count}
            &nbsp;&nbsp;
            Ties:{tieCount}
        </div>
        
        </div>
        
        </div>
    )
}



export default Navbar;