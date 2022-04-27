import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSingOut = () => {
        signOut(auth);
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to='/about'>About</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/shipment'>Shipment</Link>
                {
                    user ? <button onClick={handleSingOut}>Sing out</button> :
                        <Link to='/login'>Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;