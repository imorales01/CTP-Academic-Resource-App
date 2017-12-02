import React, { Component } from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as userActions from './reducers/userActions.js';


 class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }

  // handleLogout: logouts the current user
  // @logout: action from userActions
  handleLogout(e){

    //action from userActions didn't work so for now use window command to refresh page
    (()=>{
    this.props.logout() 
    })

    window.location.reload(false)
  }

  render(){
    console.log('this.props NavBar:', this.props)
    return (
    <div>
      <nav className="navbar main">
        <div className="logo col-xs-3">
          <a href="/" className="logoWidth">
           <img  src="http://www.freeindex.co.uk/aspjpeg/showimage.asp?img=logo.jpg&folder=listingpics/692/506/&maxW=230&maxH=80" alt="logo"/>
          </a>
        </div>
      </nav>

      <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="linetext"><Link to="/">Home</Link></li>
                  <li className="linetext"><Link to="/profile">Profile</Link></li>
                  <li className="linetext"><Link to="/sellers-book-list">All Books</Link></li>
                  <li className="linetext"><Link to="/by-college">Books By College</Link></li>

                  { /* if props exist then show logout otherwise show Login */}
                  {this.props.userState.user ?
                  (<li className="linetext" onClick={this.handleLogout}><Link to="/">Log Out</Link></li>):
                  <li className="linetext"><Link to="/login">Login</Link></li>
                  }

                  { /* if props doesn't exist show sign up otherwise show null */}
                  {this.props.userState.user ?
                  (null):
                  <li className="linetext"><Link to="/sign-up">Sign up</Link></li>
                  }

                  { /* if props doesn't exist show sign up otherwise show null */}
                  {this.props.userState.user ?
                  (<li className="loggedUser">Logged as {this.props.userState.user.firstName}</li>):
                  (null)
                  }

                  <li className="linetext"><Link to="/search">Search</Link></li>



                </ul>
              </div>

          </div>
          
        </nav>
    </div>
    )
  }
}

//@mapStoreToProps: makes available the userState from our redux state
const mapStoreToProps = store => (
  {userState: store.userReducer}
)

export default connect(mapStoreToProps, userActions)(NavBar);
