import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo: ''
    }   
  }

  render() {
    return (
      <div className="App">

        <p className="App-intro">
          YOU ARE IN HOME SCREEN 
        </p>

      </div>
    );
  }
}

export default Home;
