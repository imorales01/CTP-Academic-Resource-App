
import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';
import './../Login.css';
export default class Profile extends Component {
  // we are getting the props from login component
  constructor(props){
    super(props);
    this.state={
      id: props.routeParams.id,
      userInfo: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    let userId = this.state.id;
    fetch('http://localhost:8000/api/users/' + userId, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      console.log('Response Profile: ',response)
        return response.json();
    })
    .then((data) => {
      let result = data;
      console.log('Request succeeded with JSON response', result);
      this.setState({userInfo: result})
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
  }
  handleClick() {
    console.log('w', this.state.userInfo.userName)
    let userName = this.state.userInfo.userName;
    browserHistory.push(`/upload-user-profile-image/${userName}`);
  }

  render() {
    console.log('this.stateid', this.stateid)
    console.log('this.state.userInfo', this.state.userInfo.userName)
    let imageProfile = <img src={"http://localhost:8000/" + this.state.userInfo.image} />

    let guestImage = <div>
              <img src={require('../uploads/astronaut.png')}/>
              <br/><br/>

              <button id="uploadButton" type="button" onClick={this.handleClick}>Update image</button>
            </div>

    return (
      <div className="container">

          <div className="row">

            <div className="col-sm-12" style={{paddingLeft:'100px',paddingRight:'100px'}}>
              <div className="card hovercard">

                <div className="cardheader">
                </div>

                <div className="avatar">
                  {
                    (this.state.userInfo.image) ?
                    (imageProfile) :
                    (guestImage)
                  }
                </div>
          
                {
                  (this.state.userInfo) ? 
                  (
                    <div className="info">
                      <div className="title">

                        <p className="userName">{this.state.userInfo.firstName}  {this.state.userInfo.lastName} </p>

                        <div className="desc">UserName: {this.state.userInfo.userName}</div>

                        <div className="desc">Email: {this.state.userInfo.email}</div>

                        <div className="desc">College: {this.state.userInfo.college}</div>

                        <div className="desc">Cuny Id: {this.state.userInfo.cunyId}</div>
   
                      </div>
                    </div>
                  ):
                  (<p>Loading ...</p>)
                }


                <div className="bottom">
                  <a className="btnProfile btn-primary btn-twitter btn-sm" href="https://twitter.com" target="_blank">
                      <i className="fa fa-twitter"></i>
                  </a>
                  <a className="btnProfile btn-danger btn-sm" rel="publisher" href="https://plus.google.com/" target="_blank">
                      <i className="fa fa-google-plus"></i>
                  </a>
                  <a className="btnProfile btn-primary btn-sm" rel="publisher" href="https://www.facebook.com/" target="_blank">
                      <i className="fa fa-facebook"></i>
                  </a>
                  <a className="btnProfile btn-warning btn-sm" rel="publisher" href="https://plus.google.com/" target="_blank">
                      <i className="fa fa-behance"></i>
                  </a>
                </div>

              </div>
            </div>

          </div>
        
      </div>
    );
  }
}

// style={{color:'brown', fontSize: '20px'}}
