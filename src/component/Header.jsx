import React from 'react';
import './header.css';
import { LOGO_URL } from '../utils/constants';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const[btnName,setBtnName]=useState('Login');

    return (
        <div className='header'>
        <div className='logo-container'>
            <img className='logo' src={LOGO_URL}  />
        </div>
        <div className='nav-items'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link></li>
                <li>
                    <Link to="/contact">Contact me</Link></li>
                <li>
                    <Link to="/cart">Cart</Link></li>
                <button className='login'
                //styling using inline css
                style={{backgroundColor:btnName==='Login'?'#f0f0f0':'pink',
                    margin:'10px',
                    padding:'10px',cursor:'pointer'}}
                //onclick to change login to logout
                onClick={()=>{
                    btnName==='Login'
                    ?setBtnName('Logout')
                    :setBtnName('Login');
                }}
                > {btnName}</button>
            </ul>
        </div>
       </div>
    )
}



export default Header;