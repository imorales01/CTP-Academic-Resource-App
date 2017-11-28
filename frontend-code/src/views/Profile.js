
import React, { Component } from 'react';

export default class Profile extends Component {
  // we are getting the props from login component
  constructor(props){
    super(props);
    this.state={
      id: props.routeParams.id,
      userInfo: '',
    }
    
  }

  componentWillMount() {
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

  render() {
    console.log('this.state in Profile\:', this.state)
    return (
      <div className="container">

        <h1 style={{color:'blue', fontSize: '30px'}}>
          PROFILE  
        </h1>
        {(this.state.userInfo) ? (<p style={{color:'brown', fontSize: '20px'}}> 
          Full name: {this.state.userInfo.firstName}  {this.state.userInfo.lastName}<br/> 
          UserName: {this.state.userInfo.userName}<br/>
          Email: {this.state.userInfo.email}<br/> 
          College: {this.state.userInfo.college}<br/>  
          Cuny Id: {this.state.userInfo.cunyId}<br/>   </p>):(<p>No userInfo</p>)}

      </div>
    );
  }
}

