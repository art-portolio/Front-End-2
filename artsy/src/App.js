import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomeView from './components/views/HomeView';
import ArtistView from './components/views/ArtistView';
import LoginView from './components/views/LoginView';
import SignupView from './components/views/SignupView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ HomeView } />
        <Route exact path="/home" component={ ArtistView }/>
        <Route exact path="/login" component={ LoginView } />
        <Route exapct path="/signup" component={ SignupView } />
      </div>
    );
  }
}

export default App;
