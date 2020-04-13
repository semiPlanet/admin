import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from './auth';
import axios from 'axios';
import soundFile from '../sound/alert.mp3';
import { environment } from '../const/environment';

export default function Login () {
    const audio = new Audio(soundFile);
    audio.type = 'audio/mp3';

    const token = localStorage.getItem('authorization') || null;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    function postLogin(e) {
        e.preventDefault()
        axios.post( environment.api + environment.login,{email,password})
            .then(result=>{
                if(result.status === 200) {
                    audio.play()
                    setAuthTokens(result);
                    setIsLoggedIn(true);
                    
                }
            }).catch(e => {
                setError(e.message)
                setIsError(true);
            })
    }

    if(token && token != null) {
        return <Redirect to="/" />
    }

    return (
        <div className="login-page">
            <div className="login-box">
                </div>  
                <div className="login-logo">
                    <Link to="/"><b>Ask</b>Tune</Link>
                </div>
                <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in</p>
                        {
                            isError?
                                <><span className="alert alert-danger">{isError?error:''}</span><br/><hr/></>
                            :''
                        }
                    <form>
                        <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Email"
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value)
                            }}/>


                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-envelope" />
                            </div>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="Password"
                                value={password}
                                onChange={e =>{
                                    setPassword(e.target.value)
                                }} />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-lock" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button onClick={postLogin} className="btn btn-primary btn-block">Sign In</button>
                            </div>
                        </div>
                    </form>
                   
                    </div>
            </div>
        </div>
    )
}
