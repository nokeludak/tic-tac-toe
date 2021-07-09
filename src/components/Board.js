import React, { useState, useEffect } from "react";
import { Game } from "./Game";
import Endgame from "./Endgame";
import Navbar from "./Navbar";



function Board() {
  const [player, setPlayer] = useState("O");
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const [winMsg, setWinMsg] = useState("");
  const player1 = localStorage.getItem("Player1");
  const [isti, setIsti] = useState(false);
  const player2 = localStorage.getItem("Player2");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  const [showEndGame, setShowEndGame] = useState(false);
  const [player1Count, setPlayer1Count] = useState(0);
  const [player2Count, setPlayer2Count] = useState(0);
  const [tieCount, setTieCount] = useState(0);
  const [historyId, setHistoryId] = useState([]);
  const [toggle, setToggle] = useState(false);
  
  const toggleChecked = () => setToggle(toggle => !toggle);

  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player === "X" && isti === false) {
      setPlayer("O");
      
      setMessage(`${player2}`);
    } else if (player === "O" && isti === false) {
      
      setPlayer("X");
      setMessage(`${player1}`);
    }
  }, [board]);

  const onClick = (square) => {
    
    setBoard(
      board.map((value, idx) => {
        if (idx === square && value === "") {
          
          setIsti(false);
          return player;
        }
        if (idx === square && value !== "") {
          setIsti(true);
          alert("Choose unoccupied field!!")
          
        }
       
        return value;
        
      })
      
    );
  };

  const checkWin = () => {
    Game.forEach((currGame) => {
      const firstPlayer = board[currGame[0]];
      if (firstPlayer == "") return;
      let foundWinningGame = true;
      currGame.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningGame = false;
        }
      });
      if (foundWinningGame) {
        setToggle(true);
        setResult({
          winner: player1 === player1 ? player2 : player1,
          state: "won",
          
        });
        
        setPlayer("X");
        if (player === "O") {
          setPlayer2Count(player2Count + 1);
          setHistoryId([...historyId, {day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            player1: player1,
            player2: player2,
            result: player2}])
        } else if (player === "X") {
          setPlayer1Count(player1Count + 1);
          setHistoryId([...historyId, {day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            player1: player1,
            player2: player2,
            result: player1}])
        }
       
      }
    });
  };
  console.log(historyId);
  localStorage.setItem("historyId", JSON.stringify(historyId));

  useEffect(() => {
    if (result.state !== "none" && player === "X") {
      setWinMsg(`Winner: ${player2} `);
      setShowEndGame(true);
      toggleChecked()
    } else if (result.state !== "none" && player === "O") {
      setWinMsg(`Winner: ${player1}`);
      setShowEndGame(true);
    }
    if (result.state === "Tie") {
      setWinMsg(`DRAW`);
      setShowEndGame(true);
      setHistoryId([...historyId, {day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        player1: player1,
        player2: player2,
        result: "DRAW"}])
      
    
    }
  }, [result]);

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
        setShowEndGame(false);
      }
    });
    if (filled && !Game) {
      setResult({ winner: "draw", state: "Tie" });
      setShowEndGame(true);
      setTieCount(tieCount + 1);
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
    setShowEndGame(false);
    setWinMsg("");
    setToggle(false);
    
  };

  const restartGameO = () => {
    window.location.reload();
    localStorage.clear();
  };

  useEffect(() => {
    history.push(<p key={Math.random()}>{historyId}</p>);
  }, []);

  const history = historyId.map((historyId, index) => (
    <div key={index}>{`Date:${historyId.day}.${historyId.month} Time:${historyId.hour}:${historyId.minute} ${historyId.player1} VS ${historyId.player2} Winner:${historyId.result}`}</div>
  ))

  return (
    <div className="size"> 
      
      <Navbar
        player1Count={player1Count}
        player2Count={player2Count}
        tieCount={tieCount}
      />
      
      <div className="center">
        {!toggle &&<div>It's {message} turn</div>}
        {toggle && <p className="pelement">{history}</p>}
        <div className="container" id="main">
          {showEndGame && (
            <Endgame
              winMsg={winMsg}
              restartGame={restartGame}
              restartGameO={restartGameO}
              historyId={historyId}
              
            />
            
          )}
          
          {!toggle && <div
            className="box"
            onClick={() => {
              onClick(0);
            }}
            
          >
            {board[0]}
          </div>}
          {!toggle &&<div
            className="box"
            onClick={() => {
              onClick(1);
            }}
           
          >
            {board[1]}
          </div>}
          {!toggle &&<div
            className="box"
            onClick={() => {
              onClick(2);
            }}
           
          >
            {board[2]}
          </div>}
          {!toggle &&<div
            className="box"
            onClick={() => {
              onClick(3);
            }}
            
          >
            {board[3]}
          </div>}
          {!toggle &&<div
            className="box"
            onClick={() => {
              onClick(4);
            }}
          >
            {board[4]}
          </div>}
          {!toggle &&<div
            className="box"
            onClick={() => {
              onClick(5);
            }}
          >
            {board[5]}
          </div>}
          {!toggle &&<div
            className="box"
            onClick={() => {
              onClick(6);
            }}
          >
            {board[6]}
          </div>}
         {!toggle &&<div
            className="box"
            onClick={() => {
              onClick(7);
            }}
          >
            {board[7]}
          </div>}
          {!toggle &&<div
            className="box"
            onClick={() => {
              onClick(8);
            }}
          >
            {board[8]}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Board;
