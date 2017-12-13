
import React, { Component } from 'react';

export default class SellerProfile extends Component {
  // we are getting the props from Book sellers list in BooksByCollege.js component 
  constructor(props){
    super(props);
    this.state={
      id: props.routeParams.id,
      userInfo: '',
    }
    
  }

  // componentWillMount() {
  //   let userId = this.state.id;
  //   fetch('http://localhost:8000/api/users/' + userId, {
  //     method: 'get',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   .then((response) => {
  //     console.log('Response Profile: ',response)
  //       return response.json();
  //   })
  //   .then((data) => {
  //     let result = data;
  //     console.log('Request succeeded with JSON response', result);
  //     this.setState({userInfo: result})
  //   })
  //   .catch(function (error) {
  //     console.log('Request failed', error);
  //   });
  // }


  render() {
    console.log('this.state in seller Profile:', this.state)
    return (
      <div className="container">

        <h1 style={{color:'blue', fontSize: '30px'}}>
          Seller Profile  
        </h1>


      </div>
    );
  }
}

