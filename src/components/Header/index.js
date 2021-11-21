import React from 'react';

import Nav from './nav';

import './Header.module.scss';
import Icon from '../Icon';
import { NavLink } from 'react-router-dom';
const Header = (props, children) => {
    return (
        <header>
            <NavLink to="/"><img name="Code Tag" src={'https://drive.google.com/uc?export=view&id=1W6tjSeFk53Mc1t1vbzm6pM4SZS5SG8yL'} height={30} alt={"logo"} /></NavLink>
            <Nav />
        </header>
    );
}

export default Header;