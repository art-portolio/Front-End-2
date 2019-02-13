import React, { Component } from 'react';

import GuestHeader from '../GuestHeader';
import SignUpForm from '../SignUpForm';

class SignupView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            password: "",
            username: ""
        }
    }

    inputHandler = event => {
        this.setState( 
            {
                [event.target.name]: event.target.value
            }
        );
    }

    render() {
        return (
            <div>
                <GuestHeader />
                <SignUpForm />
            </div>
        );
    }
}

export default SignupView;