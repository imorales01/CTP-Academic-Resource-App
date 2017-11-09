// NOTES: 
// - PREFIX EVERYTHING WITH API
// - FOR REACT / WILL REDIRECT U TO /  


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// IMPORT COMPONENTS
// import NavBar from './views/NavBar';
// import Login from './views/Login';

// THIS IS signup IS ALREADY WORKING

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      userName:'',
      email:'',
      cunyId:'',
      college:'',
      password:'',
      userInfo: ''
    }

    fetch('/test')
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      console.log(body)
      return body;
    })

    this.submitNewPerson = this.submitNewPerson.bind(this);
    
  }

  handleChange(inputField, e){
    console.log('e.target.value:', e.target.value)
    this.setState({[inputField] : e.target.value})
  }

  submitNewPerson(e) {
    e.preventDefault()
    console.log('this.state: ', this.state)

    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let userName = this.state.userName;
    let email = this.state.email;
    let cunyId = this.state.cunyId;
    let college = this.state.college;
    let password = this.state.password;

    fetch('http://localhost:8000/sign-up', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        cunyId: cunyId,
        college: college,
        password:password
      })
    })
    .then((response) => {
      console.log('Response: ',response)
        return response.json();
    })
    .then((data) => {
      let  a = data;
      console.log('Request succeeded with JSON response', data);
      this.setState({userInfo: a})
      console.log('a : **', a );
      console.log('userInfo: **', this.state.userInfo.firstName);
      console.log('userInfo: **', this.state.userInfo.college);

    })
    .catch(function (error) {
      console.log('Request failed', error);
    });


    // browserHistory.push('/people');
    // browserHistory.push('/people');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      

        <p className="App-intro">
          SIGNUP 
        </p>


        {(this.state.userInfo) ? (<p style={{color:'red', fontSize: '20px'}}> Hi  {this.state.userInfo.firstName}</p>):(<p></p>)}



        <form className="form-inline justify-content-center">

          <div className="form-group">
            <label>First Name</label><br/>
            <input type="firstName" onChange={this.handleChange.bind(this, 'firstName')}  className="form-control" placeholder=' First Name' required="required"  autofocus=""/>
          </div><br/>

          <div className="form-group">
            <label>Last Name</label><br/>
            <input type="lastName" onChange={this.handleChange.bind(this, 'lastName')}  className="form-control" placeholder=' Last Name' required="required" />
          </div><br/>

          <div className="form-group">
            <label>User Name</label><br/>
            <input type="userName" onChange={this.handleChange.bind(this, 'userName')}  className="form-control" placeholder=' User Name' required="required" />
          </div><br/>

          <div className="form-group">
            <label>Email</label><br/>
            <input type="email" onChange={this.handleChange.bind(this, 'email')}  className="form-control" placeholder=' Email Address' required="required" />
          </div><br/>

          <div className="form-group">
            <label>CUNY ID</label><br/>
            <input type="cunyId" onChange={this.handleChange.bind(this, 'cunyId')}  className="form-control" placeholder=' CUNY ID' required="required" />
          </div><br/>

          <div className="form-group">
            <label>College</label><br/>
            <input type="college" onChange={this.handleChange.bind(this, 'college')}  className="form-control" placeholder=' College' required="required" />
          </div><br/>




          <div className="form-group">
            <label>Password</label><br/>
            <input type="password" onChange={this.handleChange.bind(this, 'password')}  className="form-control" placeholder=' Password' />
          </div><br/><br/>

          <div className="form-group">
            <button type="submit" onClick={this.submitNewPerson} className="btn btn-success">Submit</button>
          </div>
        </form>

      </div>
    );
  }
}

export default App;
