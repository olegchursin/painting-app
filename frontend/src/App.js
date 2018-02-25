import React, { Component } from 'react';
import './css/App.css';
import PaintingsContainer from './PaintingsContainer';

class App extends Component {
  render() {
    return (
      <div className="App ">
        <PaintingsContainer />
      </div>
    );
  }
}

export default App;
