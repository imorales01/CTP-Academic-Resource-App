
import React, { Component } from 'react';
import {browserHistory} from 'react-router'
import './../App.css';
import {connect} from 'react-redux';
import * as userActions from './reducers/userActions.js';

class ContactSeller extends Component {
  constructor(props){
    super(props);
    this.state={
      subject:'',
      email:'',
      message:'',
      toggleEmailConfirmationComponent: false,
    }
  // this.sendMessage = this.sendMessage.bind(this);
  }

  handleChange(inputField, e){
    this.setState({[inputField] : e.target.value})
  }
  

  // sendMessage(e) {
  //   e.preventDefault()
  //   console.log('yes')
  //   this.setState({toggleEmailConfirmationComponent: true})
  // }

  render() {
    console.log('this:', this.state)
    console.log('this.props in ContactSeller:', this.props.userState.user)
    return (
      <div className="container">
        <div className="row" style={{marginLeft: '12px'}}>

          <div className="col-xs-12 col-md-5"> 
            <h1 style={{color:'blue', fontSize: '30px'}}>
            Contact Seller</h1>

              <form>

                <div className="form-group">
                  <label>Email</label><br/>
                  <input type="email" onChange={this.handleChange.bind(this, 'email')}  className="form-control" placeholder='email' required="required"  autoFocus />
                </div>

                <div className="form-group">
                  <label>Subject</label><br/>
                  <input type="text" onChange={this.handleChange.bind(this, 'subject')}  className="form-control" placeholder=' subject ' />
                </div>


                <div className="form-group">
                  <label>Message</label><br/>
                  <textarea onChange={this.handleChange.bind(this, 'message')} className="form-control" type="string" id="message" placeholder="Enter your message" maxLength="250" rows="4"></textarea>                    
                </div>

                <div className="col-md-12 form-group">
                  <button onClick={this.props.triggerEmail} className="btn btn-info"> Send message »</button>
                </div>
              </form>

          </div>

        </div>

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


