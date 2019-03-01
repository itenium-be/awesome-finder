import React, { Component } from 'react';
import AwesomeList from '../components/AwesomeList';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Fancy Header
        </header>

        <div>
          <AwesomeList />
        </div>
      </div>
    );
  }
}
