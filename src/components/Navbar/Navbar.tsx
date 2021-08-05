import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Message</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;