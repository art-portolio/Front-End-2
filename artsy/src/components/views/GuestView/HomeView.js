import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import GuestHeader from './GuestHeader';

/* Styled Componensts */
const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HomeText = styled.div`
    width: 100%;
    text-align: center;
    margin: 5% 0;

    h2 {
        text-decoration: underline #A32330;
    }

    p {
        margin: 2% 0;
        line-height: 1.5;
    }
`;

const HomeLinks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin-bottom: 1%;
        a {
            color: #A32330;
        }
    }
`;

const HomeView = props => {
    return (
        <div>
            <GuestHeader />
            <HomeContent>
                <HomeText>
                    <h2>Welcome to Artsy!</h2>
                    <p>
                        Artsy is an online platform for artists of all kinds to display their art. <br/>
                        Feel free to browse our member's awesome posts!
                    </p>
                </HomeText>
                <HomeLinks>
                    <p>
                        Register for a free account: <Link to="/signup"> Sign Up</Link>
                    </p>
                    <p>
                       Already an Artsy Artist? <Link to="/login">Log In</Link>
                    </p>
                </HomeLinks>
            </HomeContent>
        </div>
    );
}

export default HomeView;