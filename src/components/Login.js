import React, { Component } from 'react';
import SocialButton from './SocialButton';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSocialLogin = this.handleSocialLogin.bind(this);
  }

  handleSocialLogin (user) {
    fetch(process.env.REACT_APP_EVENT_MACHINE_URL + '/login/social', {
      body: JSON.stringify({
        'provider': user.provider,
        'token': user._token.accessToken
      }),
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then((response) => response.json())
      .then((json) => this.props.onSuccess(json.token));
  }

  handleSocialLoginFailure (err) {
    console.error(err)
  }

  render() {
    return (
      <div className="Login">
        <SocialButton className="Login-google"
          provider='google'
          appId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onLoginSuccess={this.handleSocialLogin}
          onLoginFailure={this.handleSocialLoginFailure}
        >
          Login with Google
        </SocialButton>
      </div>
    );
  }
}

export default Login;
