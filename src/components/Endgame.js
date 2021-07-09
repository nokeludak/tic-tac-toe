import React, { useEffect } from "react";
import "../style/Endgame.css";



function Endgame({restartGame, restartGameO, winMsg, historyId}) {

  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  
 

  const history = historyId.map((historyId, index) => (
    <div key={index}>{`Date: ${historyId.day}.${historyId.month} Time: ${historyId.hour}:${historyId.minute} ${historyId.player1} VS ${historyId.player2} Winner:${historyId.result}`}</div>
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
