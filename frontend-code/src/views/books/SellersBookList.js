
import React, { Component } from 'react';
import {Link} from 'react-router';

export default class SellersBookList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInfo: '',
			booksInfo: '',
		}
	}

	componentWillMount() {
		fetch('http://localhost:8000/api/books', {
		  method: 'get',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		})
		.then((response) => {
		  console.log('Response books: ',response)
		    return response.json();
		})
		.then((data) => {
		  let result = data;
		  console.log('Request succeeded with JSON response', result);
		  this.setState({booksInfo: result})
		})
		.catch(function (error) {
		  console.log('Request failed', error);
		});
	}


	render() {
		console.log('booksInfo: ', this.state.booksInfo)
		console.log('sessionId in booksInfo', sessionStorage.getItem('currentUser'))
		return (
			
			<div className="App">

				<h1 style={{color:'blue', fontSize: '30px'}}>
		          Book List  
		        </h1>

		        { (this.state.booksInfo) ? 
                  (this.state.booksInfo.map((book, key) => {
                    return(
                      <li key={key}>
                          <img src={"http://localhost:8000/" + book.image} alt="book cover of the universe"/><br/>

                          {/*<img src={'https://images-na.ssl-images-amazon.com/images/I/51OPx5KCYqL._SX332_BO1,204,203,200_.jpg'} alt="book cover of the universe"/>*/}

                      {/*// passing book.id as props and redirect to /sellers-book-detail/:id */}
                          <h1><Link to={'/sellers-book-detail/'+ book.id}>Title: {book.title}</Link></h1>

                          <h1>Author: {book.author}</h1>
                          <h1>Edition: {book.edition}</h1>
                          <h1>Format: {book.format}</h1>
                          <h1>Year: {book.year}</h1>
                          <hr/>
                      </li>
                    ) 
                  })) : <h1>Loading ...</h1>
                }

		    </div>
		)
	}
}
