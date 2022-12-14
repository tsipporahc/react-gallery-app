import React from 'react';
import { NavLink } from 'react-router-dom';

// Nav.js is a component that renders the three navigation buttons and sets the nav link (a link that knows it is active)
const Nav = ({ data }) => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to="/pandas" onClick={() => data('pandas')}>
                        Pandas
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/elephants" onClick={() => data('elephant')}>
                        Elephants
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/birds" onClick={() => data('bird')}>
                        Birds
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
