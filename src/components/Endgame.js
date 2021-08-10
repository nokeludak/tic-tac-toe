import React from "react";
import "../style/Endgame.css";



function Endgame({restartGame, restartGameO, winMsg, gameHistory}) {

  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  
 

  const history = gameHistory.map((gameHistory, index) => (
    <div key={index}>{`Date: ${gameHistory.day}.${gameHistory.month} Time: ${gameHistory.hour}:${gameHistory.minute} ${gameHistory.player1} VS ${gameHistory.player2} Winner:${gameHistory.result}`}</div>
  ))
      
   
    return ( 
      <div className="loginn">
            <div className="screen">
                
        <div className="endgame-wrapper" >
          <form>
          <h2>{winMsg}</h2>
         
          
      <button className="btn" onClick={restartGame}>CLEAR</button>
      &nbsp;&nbsp;
      <button className="btn" onClick={restartGameO}>RESTART</button>
      </form>
      
    </div>
    </div>
        
        
        
        </div>
      );
    

    };
export default Endgame;
