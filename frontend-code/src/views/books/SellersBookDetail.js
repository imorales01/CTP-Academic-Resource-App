
/******************************************************************************
Title           : profile.js
Author          : Academic Resources App
Description     : A layout for SellersBookDetail view
******************************************************************************/

/******************************************************************************
  Libraries
******************************************************************************/
import React, { Component } from 'react';
import {Link} from 'react-router';
import BookInfo from './BookInfo'


/******************************************************************************
    Component definitions
  ******************************************************************************/

  //@Title: SellersBookDetail
  //@Description: Gets props from SellerBookDetail classNam and returns jsx elements that SellerBookDetail renders
class SellersBookDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bookId: props.routeParams.id,
      bookInfo: '',
			postInfo: '',
		}
	}

  /******************************************************************************
    Function definitions
  ******************************************************************************/
  //@Title: componentWillMount
  //@Description: Fetches data for a book, then gets the book title and fetches all post that have the same title
  componentWillMount() {
		let bookId = this.state.bookId
		fetch('http://localhost:8000/api/books/' + bookId, {
		  method: 'get',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		})
		.then((response) => {
		  console.log('Response book: ',response)
		    return response.json();
		})
		.then((data) => {
		  let result = data;
		  console.log('bookInfo Request succeeded with JSON response', result);
		  this.setState({bookInfo: result})

		  fetch('http://localhost:8000/api/post/' + data.title, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		  })
		  .then((response) => {
		  	console.log('Response book: ',response)
			return response.json();
		  })
		  .then((data) => {
		  	let result = data;
		  	console.log('postInfo Request succeeded with JSON response', result);
		  	this.setState({postInfo: result})
		  })
		})
		.catch(function (error) {
		  console.log('Request failed', error);
		})
	}

	/******************************************************************************
      Render
    ******************************************************************************/
    //@Title: Render
    //@Description: Renders Book Information
    render() {
		return (
			<div className="container">
				<h1 style={{color:'blue', fontSize: '30px'}}>
		          Book Details  
		        </h1>

		        {
		        	(this.state) ? 
		            (<BookInfo bookInfo={this.state.bookInfo} postInfo={this.state.postInfo} />):
		            (<p>Loading...</p>)
		        }

		    </div>
		)
	}



}
export default SellersBookDetail;