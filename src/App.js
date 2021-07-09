import './style/Login.css';
import './App.css';
import './style/Navbar.css';
import './style/Board.css'
import './style/Endgame.css'
import Login from "./components/Login";
import Board from './components/Board';

import React, {  useState } from "react";

function App() {
  const [visible, setVisible] = useState(true);
  const [toggle, setToggle] = useState(false);


  const toggleChecked = () => setToggle(toggle => !toggle);

  return (
    <div className="App">
     
     { visible && <Login visible={visible} setVisible={setVisible} toggleChecked={toggleChecked} /> }
     
     {toggle && <Board toggleChecked={toggleChecked} />}
    </div>
  );
}

export default App;
