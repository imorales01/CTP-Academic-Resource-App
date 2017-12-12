import React, { Component } from 'react';
import FileInput from 'react-file-input';
import {Link, browserHistory} from 'react-router';
import UploadImageForBookPost from './UploadImageForBookPost'

export default class CreatePost extends Component {

	// @sessionStorage.getItem pass by react session when I login
	constructor(props) {
		super(props);
		this.state = {
			userInfo: null,
			bookTitle: null,
			bookAuthor: null,
			userName: sessionStorage.getItem('currentUser'),
			condition: null,
			isbn: null,
			format: null,
			deparment: null,
			course: null,
			price: null,
			img: null,
			description: null,
			UserId: null,
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.selectDropDown = this.selectDropDown.bind(this);
	} 

	// @componentDidMount: fetch and set userInfo. We need UserInfo to create a new post
	componentDidMount() {
		let userName = this.state.userName; 
		fetch('/api/users/' + userName, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		})
		.then((response) => {
			console.log('Response: ', response)
			return response.json();
		})
		.then((data) => {
			console.log('Request succeeded with JSON response ', data)
			this.setState({
				userInfo: data,
				UserId: data.id
			})
		})
		.catch(function(error) {
			console.log('Request failed', error)
		})
	}


	// @handleChange: get and set user input to state
	handleChange(inputField, e){
		this.setState({[inputField]: e.target.value})
	}

	// @selectDropDown: get and set book condition to state
	selectDropDown(e) {
    this.setState({condition: e.target.value})
  }


	// @handleSubmit: post to database and redirect to UploadImageForBookPost.js
	handleSubmit(e){
		e.preventDefault();

		fetch('/api/post/new-post', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				bookTitle: this.state.bookTitle,
				bookAuthor: this.state.bookAuthor,
				userName: this.state.userName,
				condition: this.state.condition,
				isbn: this.state.isbn,
				format: this.state.format,
				deparment: this.state.deparment, 
				course: this.state.course,
				price: this.state.price,
				img: this.state.img,
				description: this.state.description,
				UserId: this.state.UserId,
			})
		})
		.then((response) => {
      console.log('Response: ',response)
      return response.json()
    })
    .then((data) => {
    	console.log('Request succeeded with JSON response in create Post', data);
    	this.setState({postId: data.id})
    	browserHistory.push(`/upload-post-image/${this.state.postId}`)
    })
    .catch(function (error) {
      console.log('Request failed', error);
    })
	}


	// @render: display create post form
	render(){
		return (
			<div className="container">
				<center>
					
					<form onSubmit={this.handleSubmit} className="well form-horizontal">
						
						<h2>Create A Post</h2>

						<div className="form-group">
							<label className="col-md-4 control-label">Book title</label>
							<div className="col-md-4 inputGroupContainer">
								<div className="input-group">
									<span className="input-group-addon"><i className="glyphicon glyphicon-book"></i></span>
		              <input  onChange={this.handleChange.bind(this, 'bookTitle')} type="text" name="bookTitle"  placeholder="Book Title" className="form-control" required="required"  autoFocus/>
		            </div>
              </div>
						</div>

						<div className="form-group">
							<label className="col-md-4 control-label">Book author</label>
							<div className="col-md-4 inputGroupContainer">
								<div className="input-group">
									<span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
		              <input  onChange={this.handleChange.bind(this, 'bookAuthor')} type="text" name="bookAuthor"  placeholder="Book author" className="form-control" required="required"/>
		            </div>
              </div>
						</div>

						<div className="form-group">
              <label className="col-md-4 control-label">Book condition</label>  
              <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                 <span className="input-group-addon"><i className="glyphicon glyphicon-tags"></i></span>
                  <select onChange={this.selectDropDown} name="tags" className="form-control selectpicker" required>
                  	<option >Select Book condition</option>
                  	<option  value="Brand New">Brand New</option>
                  	<option  value="As New">As New</option>
                  	<option  value="Good">Good</option>
                  	<option  value="Fair">Fair</option>
                  	<option  value="Poor">Poor</option>
                  	<option  value="Binding Copy">Binding Copy</option>
                </select>
                </div>
              </div>
            </div>

            <div className="form-group">
							<label className="col-md-4 control-label">ISBN number</label>
							<div className="col-md-4 inputGroupContainer">
								<div className="input-group">
									<span className="input-group-addon"><i className="glyphicon glyphicon-barcode"></i></span>
		              <input  onChange={this.handleChange.bind(this, 'isbn')} type="text" name="isbn"  placeholder="ISBN number" className="form-control" required="required"/>
		            </div>
              </div>
						</div>


						<div className="form-group">
							<label className="col-md-4 control-label">Book format</label>
							<div className="col-md-4 inputGroupContainer">
								<div className="input-group">
									<span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
		              <input  onChange={this.handleChange.bind(this, 'format')} type="text" name="format"  placeholder="Format" className="form-control" required="required"/>
		            </div>
              </div>
						</div>


						<div className="form-group">
							<label className="col-md-4 control-label">Book department</label>
							<div className="col-md-4 inputGroupContainer">
								<div className="input-group">
									<span className="input-group-addon"><i className="glyphicon glyphicon-education"></i></span>
		              <input  onChange={this.handleChange.bind(this, 'deparment')} type="text" name="deparment"  placeholder="Book deparment" className="form-control" required="required"/>
		            </div>
              </div>
						</div>

						<div className="form-group">
							<label className="col-md-4 control-label">Book course name</label>
							<div className="col-md-4 inputGroupContainer">
								<div className="input-group">
									<span className="input-group-addon"><i className="glyphicon glyphicon-check"></i></span>
		              <input  onChange={this.handleChange.bind(this, 'course')} type="text" name="course"  placeholder="Course name" className="form-control" required="required"/>
		            </div>
              </div>
						</div>


						<div className="form-group">
							<label className="col-md-4 control-label">Price</label>
							<div className="col-md-4 inputGroupContainer">
								<div className="input-group">
									<span className="input-group-addon"><i className="glyphicon glyphicon-credit-card"></i></span>
		              <input  onChange={this.handleChange.bind(this, 'price')} type="text" name="price"  placeholder="Book Price" className="form-control" required="required"/>
		            </div>
              </div>
						</div>


						<div className="form-group">
							<label className="col-md-4 control-label">Book description</label>
							<div className="col-md-4 inputGroupContainer">
								<div className="input-group">
									<span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
		              <textarea  onChange={this.handleChange.bind(this, 'description')} type="text" name="description"  placeholder="Description" className="form-control" required="required"/>
		            </div>
              </div>
						</div>


						<div className="form-group">
              <label className="col-md-4 control-label"></label>  
              <div className="col-md-4">
                <center>
                  <button type="submit" className="btn btn-success" style={{height:'40px', width:'153px'}}> Submit <span className="glyphicon glyphicon-send"></span></button>
                </center>
              </div>
            </div>
					</form>

				</center>
			</div>
		)
	}

}



