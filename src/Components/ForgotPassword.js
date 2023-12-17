import React from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
    const navigate = useNavigate();

    function handleSendResetLink() {
        // Implement logic to send the password reset link
        console.log("Password reset link sent.");
    }

    return (
        <div id="forgotPasswordBox" className="loginBox">
            <h1>Forgot Password</h1>
            <form>
                <div className="inputs">
                    <label htmlFor="emailInput">Enter Your Email:</label>
                    <input
                        id="emailInput"
                        placeholder="Email"
                        className="usernameInput"
                        type="email"
                    />
                </div>
                <div className="buttons">
                    <button
                        className="sendResetLink"
                        onClick={handleSendResetLink}
                    >
                        Send Reset Link
                    </button>
                    <button
                        className="backToLogin"
                        onClick={() => navigate("/")}
                    >
                        Back to Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
