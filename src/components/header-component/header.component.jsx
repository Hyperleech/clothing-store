import React from 'react';
import { Link  } from 'react-router-dom';
import { ReactComponent as Logo }from '../../assets/original.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
            <Link className='option' to='/menu'>Menu</Link>
        </div>
    </div>
)

export default Header;