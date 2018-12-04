import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
