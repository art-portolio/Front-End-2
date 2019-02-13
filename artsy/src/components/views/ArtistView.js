import React, { Component, Fragment } from 'react';

import ArtistHeader from '../ArtistHeader';
import ArtistProfile from '../ArtistProfile';


class ArtistView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: 0,
            fullName: ""
        }
    }

    componentDidMount() {
        this.setState({
            userID: this.props.match.params.id
        })
    }

    logoutHandler = event => {
        localStorage.removeItem("jwt");
        this.props.history.push("/login");
    }

    render() {
        if(!localStorage.getItem("jwt")) return <h2>Log In to view your page!</h2>
        return (
            <Fragment>
                <ArtistHeader logoutHandler={this.logoutHandler} userID={this.state.userID}/>
                <ArtistProfile />
            </Fragment>
        );
    }
}

export default ArtistView;