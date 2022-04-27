import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, error, loading] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
            <form onSubmit={handleUserSignIn}>
                <div>
                    <h2 className='form-title'>Login</h2>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type='email' name='email' id='' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordBlur} type='password' name='password' id='' required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <input className='form-submit' type='submit' value='Login' />
                </div>
                <p>New to Ema-Jhon? <Link className='form-link' to='/signup'> Create An Account</Link> </p>
            </form>
        </div>
    );
};

export default Login;