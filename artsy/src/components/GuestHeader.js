import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

/* Styled Components */
const Header = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 10%;
    background-color: #020202;
    color: #F9F9F9;
    -webkit-box-shadow: 0 3px 2px #777;
	-moz-box-shadow: 0 3px 2px #777;
	box-shadow: 0 3px 2px #777;
`;

const LinksWrapper = styled.nav`
    width: 30%;
    display: flex;
    justify-content: space-around;
    a {
        color: inherit;
        text-decoration: none;
        &:hover {
            color: #A32330
        }
    }
    .active {
        text-decoration: underline;
    }
`;

const GuestHeader = () => {
    return (
        <Header>
            <h1>Artsy</h1>
            <LinksWrapper>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/login">Log In</NavLink>
                <NavLink exact to="/signup">Sign Up</NavLink>
            </LinksWrapper>
        </Header>
    );
}

export default GuestHeader;