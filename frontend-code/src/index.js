import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// IMPORT COMPONENTS
import './App.css';
import NavBar from './views/NavBar';
import Profile from './views/Profile';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import SellersBookDetail from './views/books/SellersBookDetail';
import SellersBookList from './views/books/SellersBookList';
import BooksByCollege from './views/books/BooksByCollege';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo: props.routeParams,
    }   
  }

  getCurrUser() {
  	return this.state.userInfo;
  }

  // loginUser(username, pass) {
  // 	// logic to login
  // 	this.setState({userInfo: ..});
  // 	return user;
  // }

  render() {
  	console.log('state:', this.state.userInfo)
  	return(
		<div>
			<NavBar getUser={this.getCurrUser}/>
			{this.props.children}
			
			{(this.props.routeParams.id) ? <Profile /> : ('I need to pass userInfo as props') 
			}
			
		</div>
	)
  }
}
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}> 
			<IndexRoute component={Home} />
			<Route path="/profile/:id" component={Profile}/> 
			<Route path="/login" component={Login} /> 
			<Route path="/sign-up" component={Signup} /> 
			<Route path="/sellers-book-list" component={SellersBookList} /> 
			<Route path="/sellers-book-detail/:id" component={SellersBookDetail} /> 
			<Route path="/by-college" component={BooksByCollege} />
		 </Route>
	</Router>, 
	document.getElementById('root')

);
registerServiceWorker();

