import React from 'react';
import styled from 'styled-components';

/* Styled Components */
const FormWrapper = styled.div`
    width: 100%;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2%;
    border: 2px solid #A32330;
    border-radius: 3px;
`;

const FormTitle = styled.h2`
    font-size: 2.7rem;
    font-weight: bold;
    margin-bottom: 2%;
    border-bottom: 2px solid #A32330;
`;

const InputElement = styled.div`
    width: 60%;
    margin: 1% 0;
    display: flex;
    justify-content: space-between;
`;

const SubmitButton = styled.button`
    font-size: 1.4rem;
    width: 20%;
    text-align: center;
    margin-top: 2%;
    padding: 1%;
    border: 1px solid #A32330;
    border-radius: 3px;
    background-color: #A32330;
    color: #F9F9F9;
    &:hover {
        cursor: pointer;
        background-color: #F9F9F9;
        color: #A32330;
    }
`;

const SignUpForm = props => {
    return (
        <FormWrapper>
            <Form>
                <FormTitle>Member Sign Up Form</FormTitle>
                <InputElement>
                    <label for="fullName">Full Name:</label>
                    <input 
                        id="fullName"  
                        type="text" 
                        name="fullName" 
                        placeholder="ex. Johnny Appleseed"
                    />
                </InputElement>
                <InputElement>
                    <label for="email">Email:</label>
                    <input 
                        id="email"
                        type="text"
                        name="email"
                        placeholder="jappleseed@email.com"
                    />
                </InputElement>
                <InputElement>
                    <label for="user">Username:</label>
                    <input 
                        id="user"
                        type="text"
                        name="username"
                        placeholder="jappleseed"
                    />
                </InputElement>
                <InputElement>
                    <label for="pwd">Password:</label>
                    <input 
                        id="pwd"
                        type="password"
                        name="password"
                        placeholder="password..."
                    />
                </InputElement>
                <SubmitButton type="submit">Sign Up</SubmitButton>
            </Form>
        </FormWrapper>
    );
}

export default SignUpForm;