
import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import * as userActions from './reducers/userActions.js';


class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      colleges: '',
      firstName:'',
      lastName:'',
      userName:'',
      email:'',
      cunyId:'',
      collegeName:'',
      password:'',
      userInfo: '',
    }
    this.submitNewPerson = this.submitNewPerson.bind(this);
    this.selectDropDown = this.selectDropDown.bind(this);
  }

  handleChange(inputField, e){
    this.setState({[inputField] : e.target.value})
  }

  /******************************************************************************
  Function definitions
  ******************************************************************************/
  //@selectDropDown: Fetches Cuny colleges
  selectDropDown(e) {
    console.log('college selected:', e.target.value)
    this.setState({college: e.target.value})
  }

  //@componentWillMount: Fetches all colleges and renders them
  componentWillMount() {
    fetch('http://localhost:8000/api/colleges', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({colleges: data})
    })
  }




  submitNewPerson(e) {
    e.preventDefault()

    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let userName = this.state.userName;
    let email = this.state.email;
    let cunyId = this.state.cunyId;
    let college = this.state.college;
    let password = this.state.password;

    fetch('http://localhost:8000/api/sign-up', {
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
      let result = data;
      console.log('Request succeeded with JSON response', result);
      this.setState({userInfo: result})

      console.log(' sing up this.state.userInfo after setting result', this.state.userInfo) 
      this.props.login(this.state.userInfo)
      // passing userName as props and redirect to profile/:userName 
      browserHistory.push(`/upload-user-profile-image/${this.state.userInfo.userName}`);
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });

  
  }

  render() {
    console.log('this.state:', this.state)
    console.log('this.state:', this.state.userInfo.userName)
    return (

      <div className="container">

        <center>
          <form onSubmit={this.submitNewPerson} className="well form-horizontal">

            <h2>Registration Form</h2>

            
            <div className="form-group">
              <label className="col-md-4 control-label">First Name</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
              <input  onChange={this.handleChange.bind(this, 'firstName')} type="text" name="firstName"  placeholder="First Name" className="form-control" required="required"  autoFocus/>
                </div>
              </div>
            </div>


            <div className="form-group">
              <label className="col-md-4 control-label">Last Name</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
              <input  onChange={this.handleChange.bind(this, 'lastName')} type="text" name="lastName"  placeholder="Last Name" className="form-control"  required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">User Name</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-king"></i></span>
              <input  onChange={this.handleChange.bind(this, 'userName')} type="text" name="userName"  placeholder="User Name" className="form-control"  required />
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label className="col-md-4 control-label">Email</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
              <input  onChange={this.handleChange.bind(this, 'email')} type="email" name="email"  placeholder="Email" className="form-control"  required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">CUNY ID</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-education"></i></span>
              <input  onChange={this.handleChange.bind(this, 'cunyId')} type="text" name="cunyId"  placeholder="CUNY ID" className="form-control"  required />
                </div>
              </div>
            </div>


            
            {
              (this.state.colleges) ?
              (
                <div className="form-group">
                  <label className="col-md-4 control-label">College</label>  
                  <div className="col-md-4 inputGroupContainer">
                    <div className="input-group">
                     <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                      <select onChange={this.selectDropDown} name="tags" className="form-control selectpicker" required>
                      <option value="Please">College Name</option>
                      {this.state.colleges.map((college, key) => {
                        return (
                                <option key={key} value={college.name}>{college.name}</option>
                               )
                        })
                      }
                    </select>
                    </div>
                  </div>
                </div>
              ): 
              (<h1>Loading ...</h1>)
            }

            <div className="form-group">
              <label className="col-md-4 control-label">Password</label>  
              <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-text-width"></i></span>
              <input  onChange={this.handleChange.bind(this, 'password')} type="password" name="password"  placeholder="Password" className="form-control"  required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label"></label>  
              <div className="col-md-4">
                <center>
                  <button type="submit" className="btn btn-success" style={{height:'40px', width:'153px'}}> Submit <span className="glyphicon glyphicon-send"></span></button>
                </center>
              </div>
            </div>

          </form>
        </center>

      </div>
    );
  }
}

export default connect(null, userActions)(Signup);

