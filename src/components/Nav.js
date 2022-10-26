import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Results from './Results';

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
