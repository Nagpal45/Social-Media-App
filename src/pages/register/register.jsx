import './register.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import React, { useRef } from 'react'

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useNavigate()

    const handleClick = async (e) =>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try{
            await axios.post("/auth/register",user);
            history("/login");
            }catch(err){
                console.log(err);
            }
        }
    }
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">
                    BeSocial
                </h3>
                <span className="loginDesc">Connect with friends and the word around you on Be Social.</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit = {handleClick}>
                    <input placeholder='Username' className="loginInput" ref={username} required/>
                    <input placeholder='Email' className="loginInput" ref= {email} required type="email"/>
                    <input placeholder='Password' className="loginInput" ref={password} required type='password' minLength={6}/>
                    <input placeholder='Confirm Password' className="loginInput" ref={passwordAgain} required type='password' />
                    <button className="loginButton" type="submit">Sign Up</button>
                    <button className="loginRegisterButton">Log In</button>
                </form>
            </div>
        </div>
    </div>
  )
}
