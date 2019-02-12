import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import HomeView from './components/views/HomeView';
import ArtistView from './components/views/ArtistView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ HomeView } />
        <Route exact path="/home" component={ ArtistView }/>
      </div>
    );
  }
}

export default App;
