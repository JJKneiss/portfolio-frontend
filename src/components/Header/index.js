import React from 'react';

import Nav from './nav';

import './Header.module.scss';

const Header = (props, children) => {
    return (
        <header>
            <Nav />
        </header>
    );
}

export default Header;