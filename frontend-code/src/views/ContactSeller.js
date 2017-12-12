
import React, { Component } from 'react';
import {browserHistory} from 'react-router'
import './../App.css';
import {connect} from 'react-redux';
import * as userActions from './reducers/userActions.js';

class ContactSeller extends Component {
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


      // passing userName as prrops and redirect to profile/:userName 
      browserHistory.push(`/profile/${this.state.userInfo.userName}`);
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
  }

  render() {
    console.log('this:', this.state)
    console.log('this.props in ContactSeller:', this.props.userState.user)
    return (
      <div className="App">
        <h1 style={{color:'blue', fontSize: '30px'}}>
          Contact Seller  
        </h1> 

        <form className="form-inline justify-content-center">

          <div className="form-group">
            <label>Subject</label><br/>
            <input type="email" onChange={this.handleChange.bind(this, 'email')}  className="form-control" placeholder='Subject' required="required"  autoFocus />
          </div><br/>

          <div className="form-group">
            <label>Message</label><br/>
            <input type="password" onChange={this.handleChange.bind(this, 'password')}  className="form-control" placeholder=' Enter your message' />
          </div><br/><br/>

          <div className="form-group">
            <button type="submit" onClick={this.loginAuthentication} className="btn btn-success">Submit</button>
          </div>
        </form>

      </div>
    );
  }
}

//@mapStoreToProps: makes available the userState from our redux state
const mapStoreToProps = store => (
  {userState: store.userReducer}
)

// connects: mapStoreToProps is a global state in the props
export default connect(mapStoreToProps, userActions)(ContactSeller);


