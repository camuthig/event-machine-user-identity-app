import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import User from './components/User';

class App extends Component {
  state = {
    token: null
  };

  render() {
    let body = <Login onSuccess={(token) => this.setState({token})}/>;

    if (this.state.token) {
      body = <User token={this.state.token} />
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Event Machine - User Identity</h1>
        </header>
        <div className="App-body">
        {body}
        </div>
      </div>
    );
  }
}

export default App;
