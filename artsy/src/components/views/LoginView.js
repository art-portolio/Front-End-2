import React from 'react';

import GuestHeader from '../GuestHeader';
import LogInForm from '../LogInForm';

const LoginView = props => {
    return (
        <div>
            <GuestHeader />
            <LogInForm />
        </div>
    );
}

export default LoginView;