import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [LoginError, setLoginError] = useState('');

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();
    let location = useLocation();
    // let from = location.state?.from?.pathname || "/";

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleCreateUser = event => {    
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        // if (user) {
        //     navigate(from, { replace: true });
        // }
    }
    return (
        <div className='form-container'>
            <div className='form'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" required />
                    <p style={{ textAlign: "center", color: "gray" }}>
                        Go to? <Link className='form-link' to="/signup">Sign up</Link>
                    </p>
                    <div style={{ display: "flex", paddingTop: "10px" }} className="">
                        <hr />
                        or
                        <hr />
                    </div>
                    <input style={{ background: "green" }} className='form-submit' type="With-Google" value="With-Google" required />
                </form>
            </div>
        </div>
    );
};

export default Login;