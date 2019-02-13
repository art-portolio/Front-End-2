import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomeView from './components/views/GuestView/HomeView';
import ArtistView from './components/views/ArtistView/ArtistView';
import LoginView from './components/views/LoginView/LoginView';
import SignupView from './components/views/SignupView/SignupView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ HomeView } />
        <Route exact path="/home/:id" component={ ArtistView }/>
        <Route exact path="/login" component={ LoginView } />
        <Route exapct path="/signup" component={ SignupView } />
      </div>
    );
  }
}

export default App;
