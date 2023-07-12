import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./login.css"
export function UserLogin(props) {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email);

    }
    return (
        <div className="login-page ">

            <div className="logincard">
                <h2>Login</h2>
                <form className="log-form" onSubmit={handleLogin} >
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@gmail.com" name="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="password" id="password" />
                    <button className="form_button" type="submit">Log In</button>
                </form>
                <Link to="/register">
                    Dont have an account?Register Here.
                </Link>

            </div>
        </div>
    )
}



