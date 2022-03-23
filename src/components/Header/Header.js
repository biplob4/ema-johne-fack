import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" srcset="" />
            <nav>
                <a href="/Home">Home <small></small></a>
                <a href="/Shope">Shope <small></small></a>
                <a href="/Card">Card <small></small></a>
                <a href="/Product">Product <small></small></a>
                <a href="Contuct">Contuct <small></small></a>
            </nav>
        </div>
    );
};

export default Header;