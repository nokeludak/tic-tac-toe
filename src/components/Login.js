import React, { useState } from "react";

const Login = ({visible, setVisible, toggleChecked}) => {
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    
    const playerOne =(e) => {
        
        setPlayer1(e.target.value)
        
    }
    const playerTwo = (e) => {
        setPlayer2(e.target.value)
       
    }
    const submit =() => {
       
        if (document.getElementById("player1").value === 
        document.getElementById("player2").value) {
            alert("Please fill out this fields")
            setVisible(true);
            toggleChecked(true);
        } else {
        localStorage.setItem("Player1", player1);
        localStorage.setItem("Player2", player2);
        toggleChecked(true);
        setVisible(false); 
        
        }
    }
    
    
    return(
        <div className="login">
            <div className="screen">
                <form>
                    <div className="form-group">
                        <label>Player1&nbsp;</label>
                        <input
                        type="name"
                        id="player1"
                        className="form-control"
                        onChange={playerOne}
                        
                        />
                        <br></br>
                        <br></br>
                        

                        <label>Player2&nbsp;</label>
                        <input 
                        type="name"
                        id="player2"
                        className="form-control"
                        onChange={playerTwo}
                        
                        />
                        
                    </div>
                    <br></br>
                    <button onClick={submit}  className="btn">Login</button>
                    &nbsp;
                    
                </form>
            </div>
        
        
        
        </div>
        
    )
}



export default Login;