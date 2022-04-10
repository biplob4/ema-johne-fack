import React from 'react';
import logo from '../../images/Logo.svg'
import { signOut } from 'firebase/auth';
import  auth  from '../../firebase.init';
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='header-container'>
            <div className='header'>
                <img src={logo} alt="" srcset="" />
                <nav>
                    <Link to="/home">Home <small></small></Link>
                    <Link to="/shop">Shope <small></small></Link>
                    <Link to="/inventory">Inventory <small></small></Link>
                    <Link to="/order">Order <small></small></Link>
                    <Link to="contuct">Contuct <small></small></Link>
                   {!user? <Link to="login">Login <small></small> </Link> :
                    <button onClick={()=>signOut(auth)} style={{padding:"5px 7px",fontSize:"16px",background:"lightGreen"}}>logout</button>}
                </nav>
            </div>
        </div>
    );
};

export default Header;