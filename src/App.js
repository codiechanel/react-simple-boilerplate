import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  componentDidMount() {
    console.log('mount')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to cool React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
