import React, { Component } from 'react';
import axios from 'axios';

import GuestHeader from '../GuestView/GuestHeader';
import SignUpForm from './SignUpForm';

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

    submitHandler = e => {
        e.preventDefault();

        const newMember = {
            "username": this.state.username,
            "password": this.state.password,
            "fullName": this.state.fullName,
            "email": this.state.email
        }
        
        axios.post('https://backend-art.herokuapp.com/api/register', newMember)
        .then(
            response => {
                console.log(response);
                this.props.history.push('/login');
            }
        )
        .catch(
            error => console.log(error.errorMessage)
        );

        this.setState({
            fullName: "",
            email: "",
            password: "",
            username: ""
        });
    }

    render() {
        return (
            <div>
                <GuestHeader />
                <SignUpForm 
                    inputHandler={this.inputHandler} 
                    submitHandler={this.submitHandler}
                    currentState={this.state}
                />
            </div>
        );
    }
}

export default SignupView;