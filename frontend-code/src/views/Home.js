import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as userActions from './reducers/userActions.js';


class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo: ''
    }   
  }

  render() {
    console.log('this.props home:', this.props)
    return (
      <div className="container" style={{ width: '100%'}}>

        <p>
          YOU ARE IN HOME SCREEN 
        </p>

      </div>
    );
  }
}

//@mapStoreToProps: makes available the userState from our redux state
const mapStoreToProps = store => (
  {userState: store.userReducer}
)

export default connect(mapStoreToProps, userActions)(Home);

