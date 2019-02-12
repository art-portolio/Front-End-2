import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="App-header">
            <h1 className="app-title">Artsy</h1>
            <div className="links">
                <NavLink to="/" className="app-link">Home</NavLink>
                <NavLink to="/" className="app-link">Artists</NavLink>
                <NavLink to="/" className="app-link">Log Out</NavLink>
            </div>
        </header>
    );
}

export default AppHeader;