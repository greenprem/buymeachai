import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li>
                    </li>
                </ul>
                <div className="auth-buttons">
                    <a href="/login" className="login">Log in</a>
                    <a href="/join" className="signup">Sign up</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
