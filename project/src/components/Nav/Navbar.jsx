import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

import '../styles/Nav.css';

import { authConfig } from '../../auth/config';

const Nav = styled.nav`
    width: 100%;
    height: 65px;
    border-bottom: 2px solid #90ee90;
    padding: 5 20px;
    display: flex;
    justify-content: space-between;

    .logo {
        padding: 15px 0; 
        font-size: 40px;
    }
`;



const Navbar = () => {
    return (
        <Nav className="Nav">
            <div className="logo">
                Menu
            </div>
            
            <button onClick={() => authConfig.auth().signOut()} className="logoff">LOG OFF</button>
            <Burger />
            
        </Nav>
    )
}

export default Navbar;