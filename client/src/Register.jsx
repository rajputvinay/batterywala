import React, { useState } from "react"
import "./login.css"
import { useNavigate } from "react-router-dom"

export function UserRegister(props) {
    console.log(props);
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [name, setName] = useState("")
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email);

    }
    return (
        <div className="reg-page">

            <div className="regcard">
                <h2>SIGN UP</h2>
                <form className="reg-form" onSubmit={handleLogin} >

                    <label htmlFor="name">Full Name</label>
                    <input className=" " value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="full name" name="name" id="name" />

                    <label htmlFor="email">Email</label>
                    <input className="" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@gmail.com" name="email" id="email" />

                    <label htmlFor="password">Password</label>
                    <input className="" value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="password" id="password" />
                    <button className="form_button" type="submit">Sign up</button>
                </form>
                <div className="">

                    <button className="link_btn" onClick={(e) => {
                        navigate("/login")

                    }}>Already have an account?Login Here.</button>

                </div>
            </div>
        </div>
    )
}



