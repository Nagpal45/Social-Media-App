import './login.css'
import { loginCall } from '../../apiCalls'
import React, { useContext, useRef } from 'react'
import { AuthContext } from '../../context/AuthContext';
import {CircularProgress} from "@material-ui/core"

export default function Login() {
    const email = useRef();
    const password = useRef();
    const {user,isFetching,error,dispatch} = useContext(AuthContext);
    const handleClick = (e) =>{
        e.preventDefault();
        loginCall({email:email.current.value , password: password.current.value},dispatch)
    }
    console.log(user);
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
                <form className="loginBox" onSubmit={handleClick}>
                    <input type="email" placeholder='Email' className="loginInput" ref ={email} required/>
                    <input type="password" placeholder='Password' ref={password} minLength={6} required className="loginInput" />
                    <button type="submit" disabled= {isFetching}className="loginButton">{isFetching ? <CircularProgress color = "white" size= "20px"/> : "Log In"}</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">{isFetching ? <CircularProgress color = "white" size= "20px"/> : "Create a new account"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}
