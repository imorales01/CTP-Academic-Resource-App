
import React, { Component } from 'react';
import {browserHistory} from 'react-router'
import './../Chat.css';
import {connect} from 'react-redux';
import * as userActions from './reducers/userActions.js';

class Chat extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo:this.props.userState.user,
      fromUserName:'',
      toWhomUserId:'',
      message:'',
      userId:'',
      messagePosted:'',
      messageArray:'',
    }
  this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  handleChange(inputField, e){
    this.setState({[inputField] : e.target.value})
    this.setState({
      fromUserName:'Luis',
      toWhomUserId:'6',
      userId:'1'
    })
  }

  handleSendMessage(e) {
    e.preventDefault()
    console.log('this.state.message', this.state.message)

    let fromUserName = this.state.fromUserName;
    let toWhomUserId = this.state.toWhomUserId;
    let message = this.state.message;
    let userId = this.state.userId;

    fetch('http://localhost:8000/api/messages', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fromUserName: fromUserName,
        toWhomUserId: toWhomUserId,
        message: message,
        UserId: userId,
      })
    })
    .then((response) => {
      console.log('Response: ',response)
        return response.json();
    })
    .then((data) => {
      let result = data;
      console.log('Request succeeded with JSON response in Login', result);
      this.setState({messagePosted: result})

      // gets all messagePosted
      fetch('http://localhost:8000/api/messages', {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({messageArray: result})
      })

    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
    this.refs.form.reset()
  }

  render() {
    console.log('state in Chat:', this.state)
    console.log('this.props in Chat:', this.props.userState.user)
    return (

      <div className="chat-window col-xs-5 col-md-3">
        <div>
          <button onClick={ () => this.handleChatComponent() } className="sticky">Close Please  <i className="glyphicon glyphicon-remove" style={{color:"red", top:'3px', fontSize: 'larger', marginLeft:'10px'}} aria-hidden="true"></i></button>
        </div>
        <div className="chat-window col-xs-5 col-md-3">

          {
            (this.state.messageArray) ?
            (
              <div className="chat-window col-xs-5 col-md-3">
                {
                  this.state.messageArray.map((message, key) => {
                    return (
                      <div  className="list-group well well-lg" key={key} >
                        <li><strong>{message.fromUserName}</strong> {message.message}</li>
                      </div>
                    )
                  })
                }
              </div>
            ): 
            (<p></p>)
          }


          <form onSubmit={this.handleSendMessage} ref="form">

            <span>
            <input className='col-sm-10' type="text" onChange={this.handleChange.bind(this, 'message')} placeholder="Write you message here" required="required"  autoFocus/>

            <button type="submit" className="btn-info glyphicon glyphicon" style={{height:'24px'}}> Enter </button>
            </span>


          </form>



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
export default connect(mapStoreToProps, userActions)(Chat);


