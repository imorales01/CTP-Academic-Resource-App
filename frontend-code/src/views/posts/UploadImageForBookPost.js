import React, { Component } from 'react';
import FileInput from 'react-file-input';
import {Link, browserHistory} from 'react-router';


export default class UploadImageForBookPost extends Component {

	// @sessionStorage.getItem: is passed it by react session set it when the the user logs in
	// @postId: is passed as props from CreatePost.js
	constructor(props) {
		super(props);
		this.state = {
			img: null,
			postId: this.props.params.postId,
			userName: sessionStorage.getItem('currentUser'),
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	} 

	// @handleFile: get the image and then it is appended it to the screen.  
	handleFile(file){
		let imageType = /^image\//;
		if (!imageType.test(file.type)) {
			console.log(file.type);
			return;
		}

		//attach image to screen in the div id=image-preview
		var preview = document.getElementById('image-preview');
		preview.innerHTML = '';
		var img = document.createElement("img");
		img.className = "post-img";
		img.file = file;

		preview.appendChild(img);
		let reader = new FileReader();
		reader.onload = function(e) {
			img.src = e.target.result;
		};

		reader.readAsDataURL(file);
	}

	// @handleChange: set image to state
	handleChange(target, e){
		let file = e.target.files ? e.target.files[0] : null;
		if(target === 'img' && file){
			this.setState({img: file});
			this.handleFile(file);
		}
	}

	// @handleSubmit: post the image to database
	// @formData: is how the image is passed it to the db using multer
	handleSubmit(e){
		e.preventDefault();	
		let formData = new FormData();
		formData.append('post-img', this.state.img, this.state.img.name);
		let imgPath = JSON.stringify(this.state.img.name);
		let postId = this.state.postId;

		fetch('/api/post/' + postId +'/picture', {
			method: 'put',
      body: formData,
		})
		.then((response) => {
      console.log('Response Upload: ',response)
      return response;
    })
    .then((data) => {
    	console.log('Request succeeded with JSON response in Upload', data);

    	browserHistory.push(`/single-post-details/${this.state.postId}`)
    })
    .catch(function (error) {
      console.log('Request failed', error);
    })

	}

	handleClick(e){
		document.getElementsByClassName('image-chooser')[0].click()
	}

	render(){
		let img = this.state.img
		return (
			<div>
				<center>
					<form onSubmit={this.handleSubmit}>
						<FileInput  className="image-chooser hide" accept=".png,.gif,.jpg" onChange={this.handleChange.bind(this, 'img')}/>

						<h3 id="before-beg">Add an image your to post</h3>
	      		
	      		<h4 id="Add-Prof">with our application it is easy and fast to sell more books..</h4><br/>

						<div id="image-preview">
							{/*Image will be here className= post-img. the img is the one being upload it */}
						</div>


						<div>
							{
								(img) ?
								(<button id="uploadButton" type="submit" >Continue</button>) :
								(
									<div>
										<img src={require('../../uploads/saleMore.jpg')}/>
										<br/><br/>

										<button id="uploadButton" type="button" onClick={this.handleClick}>Upload photo</button>
									</div>
								)
							}
							<Link to="/sellers-book-list"><p>Skip this step</p></Link>
						</div>
					</form>
				</center>
		  </div>
		)
	}
}



