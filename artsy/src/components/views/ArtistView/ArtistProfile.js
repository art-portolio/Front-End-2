import React from 'react';
import styled from 'styled-components';

/* Styled Components */
const Welcome = styled.h2`
    margin: 2% 0;
`;

const ArtistProfile = props => {
    return(
        <div>
            <Welcome>Welcome, {props.fullName}!</Welcome>
            <h3>Your Posts:</h3>
        </div>
    );
}

export default ArtistProfile;