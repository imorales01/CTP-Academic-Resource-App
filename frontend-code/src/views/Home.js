import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as userActions from './reducers/userActions.js';


class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo: ''
    }  
    this.updateEmailConfirmation = this.updateEmailConfirmation.bind(this); 
  }

  updateEmailConfirmation(e) {
    e.preventDefault()
    console.log('toggleEmailConfirmationComponent: HOME ,:')
    // this.setState({
    //   toggleEmailConfirmationComponent: true,
    //   togglePaymentsComponent: false,
    //   toggleContactSellerComponent: false,
    //   toggleBookDetailsComponent:false,
    // })
  }

  render() {
    console.log('this.props home:', this.props)
    console.log('sessionId', sessionStorage.getItem('currentUser'))
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

