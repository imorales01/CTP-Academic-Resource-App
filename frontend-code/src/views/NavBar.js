import React, { Component } from 'react';
import {Link} from 'react-router';


export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }
  render(){
    let links = null;
    if(this.state.currentUser) {
      links = (
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="linetext">{this.state.currentUser.username}</li>
              <li className="linetext"><Link to="/logout">Log Out</Link></li>
            </ul>
          </div>
        </div>
      );
    } else {
      links = (
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="linetext"><Link to="/login">Login</Link></li>
              <li className="linetext"><Link to="/sign-up">Sign up</Link></li>
            </ul>
          </div>
        </div>
      );
    }


    return (
    <div>
      <nav >
        <div >
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
                </ul>
                {links}
              </div>

          </div>
          
        </nav>
    </div>
    )
  }
}
