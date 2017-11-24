import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';



// import { BrowserRouter, Route, Link, Router,  } from 'react-router-dom';

// import { browserHistory, IndexRoute} from 'react-router';

import App from './App';
import NavBar from './views/NavBar';
import Profile from './views/Profile';
import Home from './views/Home';
import Signup from './views/Signup';



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();



ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Home}> 
			<Route path="/profile" component={Profile}/> 
			<Route path="/app" component={App} /> 
			<Route path="/sign-up" component={Signup} /> 
		 </Route>
	</Router>, 
	document.getElementById('root')

);
registerServiceWorker();


