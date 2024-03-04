import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
        <div className='logo-container'>
            <img className='logo' src="https://static.vecteezy.com/system/resources/previews/004/986/463/non_2x/food-delivery-logo-design-vector.jpg"  />
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact me</li>
                <li>Cart</li>
            </ul>
        </div>
       </div>
    )
}



export default Header;