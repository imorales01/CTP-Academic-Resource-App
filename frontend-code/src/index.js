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
import CreatePost from './views/posts/CreatePost';
import SinglePostDetails from './views/posts/SinglePostDetails';
import UploadImageForBookPost from './views/posts/UploadImageForBookPost';

import ListPostManager from './views/postsManager/ListPostManager';
import SinglePostManager from './views/postsManager/SinglePostManager';


import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import UploadImageForUser from './views/UploadImageForUser';

import SellersBookDetail from './views/books/SellersBookDetail';
import SellersBookList from './views/books/SellersBookList';
import SellerProfile from './views/SellerProfile';
import BooksByCollege from './views/books/BooksByCollege';
import SearchByPostTitle from './views/SearchByPostTitle';


import Chat from './views/Chat';


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
				<Route path="/search/:input" component={SearchByPostTitle} />
				<Route path="/create-post" component={CreatePost} />
				<Route path="/upload-post-image/:postId" component={UploadImageForBookPost} />
				<Route path="/single-post-details/:postId" component={SinglePostDetails} />
				<Route path="/posts-manager" component={ListPostManager} />
				
				<Route path="/post-manager/:id" component={SinglePostManager} />

				<Route path="/upload-user-profile-image/:postId" component={UploadImageForUser} />



				<Route path="/chat" component={Chat} />
			 </Route>
		</Router>
	</Provider>,
	document.getElementById('root')

);
registerServiceWorker();

