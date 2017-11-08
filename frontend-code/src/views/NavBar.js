import React, { Component } from 'react';
import {Link} from 'react-router';


class NavBar extends Component {
  render(){
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
                 <li className="linetext"><Link to="/login">Login</Link></li>
                  <li className="linetext"><Link to="/sign-up">Sign up</Link></li>
                  <li className="linetext"><Link to="/sellers-book-detail">SellersBookDetail</Link></li>
                </ul>
              </div>
          </div>
        </nav>
    </div>
    )
  }
}

export default NavBar;