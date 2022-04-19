import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = (props, children) => {
    return (
        <nav>
            <ul className="links">
                <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/portfolio">Portfolio</NavLink></li>
                {/* <li><NavLink activeClassName="active" to="/blog">Blog</NavLink></li> */}
                <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
            </ul>
        </nav >
    );
}

export default Nav;