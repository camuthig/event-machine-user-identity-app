import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';

class User extends Component {
  state = {
    user: null
  };

  async componentDidMount() {
     fetch(process.env.REACT_APP_EVENT_MACHINE_URL + '/api/messagebox', {
       body: JSON.stringify({
         'message_name': 'User',
         'payload': {
           'userId': jwtDecode(this.props.token).sub
         }
       }),
       method: 'POST',
       headers: new Headers({
         Authorization: this.props.token,
         'Content-Type': 'application/json'
       })
     })
       .then((response) => response.json())
       .then((user) => this.setState({user}))
  }

  render() {
    let body = <p>Loading...</p>;

    if (this.state.user) {
      body = <p>Welcome, {this.state.user.name}!</p>;
    }
    return (
      <div>
        {body}
      </div>
    )
  }
}

export default User;
