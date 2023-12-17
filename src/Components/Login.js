import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log("Login Button Clicked with:", username, password);
        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
    
            const data = await response.json();
            if (response.status === 200) {
                console.log(data.message);
                navigate("/home");
            } else {
                console.log(data.message);
                // Handle login failure (show error message, etc.)
            }
        } catch (error) {
            console.error("Login failed", error);
            // Handle network or other errors
        }
    }

    function handleForgotPassword(){
        console.log("Forgot Password Button Clicked");
        navigate("/forgot-password");
    }

    return (
        <div id="loginBox" className = "loginBox">
            <h1>Login to Payroll App</h1>
            <div id="inputs" className="inputs">
                <input
                    placeholder="Username"
                    className="usernameInput"
                    type="text"
                    value={username} // Set the value to the state variable
                    onChange={(e) => setUsername(e.target.value)} // Update state on change
                />
                <input
                    placeholder="Password"
                    className="passwordInput"
                    type="password"
                    value={password} // Set the value to the state variable
                    onChange={(e) => setPassword(e.target.value)} // Update state on change
                />
            </div>
            <div className="buttons">
                <button type="button" className="login" onClick={handleLogin}>Login</button>
                <button className="forgotPassword" onClick={handleForgotPassword}>Forgot Password?</button>
            </div>
        </div>
    )   
}

export default Login;