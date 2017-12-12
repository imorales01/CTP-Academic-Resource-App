import React, { Component } from 'react';
import {browserHistory} from 'react-router'
import './../App.css';
import {connect} from 'react-redux';
import * as userActions from './reducers/userActions.js';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo:'',
      email:'',
      password:'',
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
      console.log('Request succeeded with JSON response in Login', result);
      this.setState({userInfo: result.user})
      this.props.login(this.state.userInfo)
      sessionStorage.setItem('currentUser', result.user.userName)


      // passing userName as prrops and redirect to profile/:userName 
      browserHistory.push(`/profile/${this.state.userInfo.userName}`);
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
  }
  

  render() {
    console.log('this:', this.state)
    console.log('sessionId in home', sessionStorage.getItem('currentUser'))
    return (
      <div className="container">
        <center>
          <form onSubmit={this.loginAuthentication} className="well form-horizontal">

            <h2>Sign in</h2>

            <img id="log" src="https://firebasestorage.googleapis.com/v0/b/interestesapp.appspot.com/o/jtnAkFHYrieKZ93N7Kf8OJdEx4Y2%2Flogin.png?alt=media&token=15aa9d1c-93b0-4001-91e1-2a21fd0298a2" /><br/><br/>

            <div className="form-group">
              <label className="col-md-4 control-label">Email</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
              <input  onChange={this.handleChange.bind(this, 'email')} type="email" name="email"  placeholder="Email" className="form-control" required="required"  autoFocus/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Password</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
              <input  onChange={this.handleChange.bind(this, 'password')} type="password" name="password"  placeholder="Password" className="form-control"  required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label"></label>  
              <div className="col-md-4">
                <center>
                  <button type="submit" className="btn btn-success" style={{height:'40px', width:'153px'}}> Login <span className="glyphicon glyphicon-send"></span></button>
                </center>
              </div>
            </div>

          </form>
        </center>
      </div>
    );
  }
}

// connects: mapStoreToProps is a global state in the props
export default connect(null, userActions)(Login);


