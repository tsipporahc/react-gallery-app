import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Results from './Results';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to="cats" end>
                        Cats
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="dogs"
                        end
                        className={({ isActive }) =>
                            isActive ? 'custom-class-name' : undefined
                        }
                    >
                        Dogs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="hedgehogs" end>
                        Hedgehogs
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/cats" element={<Results />} />
                <Route path="/dogs" element={<Results />} />
                <Route path="/hedgehogs" element={<Results />} />
            </Routes>
        </nav>
    );
};

export default Nav;
