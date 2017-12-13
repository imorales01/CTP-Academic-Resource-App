import React, { Component } from 'react';

export default class EmailConfirmation extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo: ''
    }   
  }

  render() {
    return (
      <div className="container" style={{ width: '100%'}}>
      
        <img src={require('../../uploads/messageSuccessful.jpg')}/>

      </div>
    );
  }
}


