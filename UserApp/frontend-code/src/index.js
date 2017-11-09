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
import SellersBookDetail from './views/SellersBookDetail';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo: '',
    }   
  }
  render() {
  	return(
		<div>
			<NavBar />
			{this.props.children}
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
			<Route path="/sellers-book-detail" component={SellersBookDetail} /> 
		 </Route>
	</Router>, 
	document.getElementById('root')

);
registerServiceWorker();

