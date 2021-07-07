import './style/Login.css';
import './App.css';
import './style/Navbar.css';
import './style/Board.css'
import Login from "./components/Login";
import Board from './components/Board';
import Endgame from './components/Endgame';
import Game from './components/Game';
import Navbar from './components/Navbar';
import React, {  useState } from "react";

function App() {
  const [visible, setVisible] = useState(true);
  
  return (
    <div className="App">
     
     { visible && <Login visible={visible} setVisible={setVisible} /> }
     
     <Board />
    </div>
  );
}

export default App;
