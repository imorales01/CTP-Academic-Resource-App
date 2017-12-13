import React, { Component } from 'react';
import FileInput from 'react-file-input';
import {Link, browserHistory} from 'react-router';
//here
export default class CreatePost extends Component {

	// @sessionStorage.getItem pass by react session when I login
	constructor(props) {
		super(props);
		this.state = {
			bookTitle: null,
			userName: sessionStorage.getItem('currentUser'),
			condition: null,
			format: null,
			department: null,
			course: null,
			price: null,
			img: null,
			description: null,
			UserId: null,
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	} 

	// componentDidMount() {
	// 	fetch('/api/:userName', (res, req) => {

	// 	})

	// }

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

	handleChange(target, e){
		let file = e.target.files ? e.target.files[0] : null;
		if(target === 'img' && file){
			this.setState({img: file});
			this.handleFile(file);
		}
	}

	handleSubmit(e){
		e.preventDefault();		
		let formData = new FormData();
		formData.append('post-img', this.state.img, this.state.img.name);
		// formData.append('caption', this.state.caption); 
		let imgPath = JSON.stringify(this.state.img.name);

		

		fetch('/api/post/6/picture', {
			method: 'put',
      body: formData,
		})
		.then((response) => {
      console.log('Response Upload: ',response)
      return response;
    })
    .then((data) => {
    	console.log('Request succeeded with JSON response in Upload', data);
    })
    .catch(function (error) {
      console.log('Request failed', error);
    })

		

	}

	handleClick(e){
		document.getElementsByClassName('image-chooser')[0].click()
	}

	render(){
		console.log('this.state:', this.state)
		console.log('sessionId in CreatePost', sessionStorage.getItem('currentUser'))
		let img = this.state.img
		return (
			<div>
				<center>
					<form onSubmit={this.handleSubmit}>
						<h1>UploadImageForBooks</h1>

						<FileInput  className="image-chooser hide" accept=".png,.gif,.jpg" onChange={this.handleChange.bind(this, 'img')}/>

						<p id="before-beg">Before we begin</p>
	      		<br/>
	      		<p id="Add-Prof">Add a profile photo so people can recognize you.</p>

						<div id="image-preview">
							{/*Image will be here className= post-img. the img is the one being upload it */}
						</div>


						<div>
							
							{
								(img) ?
								(<button id="uploadButton" type="submit" >Continue</button>) :
								(
									<div>
										<img src={require('../uploads/astronaut.png')}/>
										<br/>

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



