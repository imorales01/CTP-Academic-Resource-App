import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './views/reducers'

// IMPORT COMPONENTS
import './App.css';
import NavBar from './views/NavBar';
import Profile from './views/Profile';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import SellersBookDetail from './views/books/SellersBookDetail';
import SellersBookList from './views/books/SellersBookList';
import SellerProfile from './views/SellerProfile';
import BooksByCollege from './views/books/BooksByCollege';
import SearchByPostTitle from './views/SearchByPostTitle';


const store = createStore(reducers)

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo: '',
    }   
  }

  render() {
  	console.log('this.props in index.js:', this.props)
  	return(
		<div>
			<NavBar />
			{this.props.children}			
		</div>
	)
  }
}
ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}> 
				<IndexRoute component={Home} />
				<Route path="/profile/:id" component={Profile}/> 
				<Route path="/login" component={Login} /> 
				<Route path="/sign-up" component={Signup} /> 
				<Route path="/sellers-book-list" component={SellersBookList} /> 
				<Route path="/sellers-profile/:id" component={SellerProfile} /> 
				<Route path="/sellers-book-detail/:id" component={SellersBookDetail} /> 
				<Route path="/by-college" component={BooksByCollege} />
				<Route path="/search" component={SearchByPostTitle} />
			 </Route>
		</Router>
	</Provider>,
	document.getElementById('root')

);
registerServiceWorker();

