import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import ArtistView from './components/views/ArtistView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ ArtistView }/>
      </div>
    );
  }
}

export default App;
