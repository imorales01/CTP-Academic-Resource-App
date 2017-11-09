import React, { Component } from 'react';
import {browserHistory} from 'react-router'
import './../App.css';


class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      userInfo:''
    }
  this.loginAuthentication = this.loginAuthentication.bind(this); 
  }

  handleChange(inputField, e){
    this.setState({[inputField] : e.target.value})
  }

  loginAuthentication(e) {
    e.preventDefault()
    let email = this.state.email;
    let password = this.state.password;
    fetch('http://localhost:8000/api/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then((response) => {
      console.log('Response: ',response)
        return response.json();
    })
    .then((data) => {
      let result = data;
      console.log('Request succeeded with JSON response', result);
      this.setState({userInfo: result})

      // passing userName as prrops and redirect to profile/:userName 
      browserHistory.push(`/profile/${this.state.userInfo.user.userName}`);
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
  }

  render() {
    return (
      <div className="App">
        <h1 style={{color:'blue', fontSize: '30px'}}>
          LOGIN  
        </h1>

        <form className="form-inline justify-content-center">
          <div className="form-group">
            <label>Email</label><br/>
            <input type="email" onChange={this.handleChange.bind(this, 'email')}  className="form-control" placeholder=' Email Address' required="required"  autoFocus />
          </div><br/>

          <div className="form-group">
            <label>Password</label><br/>
            <input type="password" onChange={this.handleChange.bind(this, 'password')}  className="form-control" placeholder=' Password' />
          </div><br/><br/>

          <div className="form-group">
            <button type="submit" onClick={this.loginAuthentication} className="btn btn-success">Submit</button>
          </div>
        </form>

      </div>
    );
  }
}

export default Login;
