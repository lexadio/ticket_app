import React from 'react';
import logo from '../assets/img/Logo.png';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="header-logo">
                    <img lassName="header-img" width="60" src={logo} alt="Avia logo" />
                </div>
            </div>
        </header>
    )
}

export default Header;