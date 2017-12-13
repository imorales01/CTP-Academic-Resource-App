
import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router'

export default class SinglePostDetails extends Component {
  // we are getting the props from login component
  constructor(props){
    super(props);
    this.state={
      postId: this.props.params.postId,
      postInfo: '',
    }
    this.handleManagePosts = this.handleManagePosts.bind(this)
    this.handleSinglePost = this.handleSinglePost.bind(this)
  }

  componentDidMount() {
    let postId = this.state.postId;
    fetch('/api/post/postInfo/' + postId, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      console.log('Response Single Post: ',response)
        return response.json();
    })
    .then((data) => {
      console.log('Request succeeded with JSON response', data);
      this.setState({postInfo: data})
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
  }


  handleManagePosts() {
    browserHistory.push(`sellers-book-list`);
  }


  handleSinglePost() {
    console.log('w', this.state.postId)
    let postId = this.state.postId;
    browserHistory.push(`/post-manager/${postId}`);
  }


  render() {
    console.log('this.state in SinglePostDetails\:', this.state)
    console.log('this.props in SinglePostDetails:', this.props)
    console.log('postId ', this.props.params.postId)
    let image = this.state.postInfo.image
    return (
      <div className="container">

        <h1 style={{color:'blue', fontSize: '30px'}}>
        Post details  
        </h1>
        <div className="card" style={{padding: '40px', width:'100%'}}>
              <div className="card-body" style={{width:'100%'}}>


                
                    <div className="row">

                      <div className="col-xs-6 col-sm-6 col-md-4" style={{padding:'10px'}}>
                        <img className="img-responsive" style={{display: 'block',marginLeft:'auto', marginRight: 'auto',height: '450px'}} src={"http://localhost:8000/" + image} alt="book cover"/>
                      </div>


                      <div className="col-xs-6 col-sm-6 col-md-8">

                        <p className="card-title border-success postDetailTitle">{this.state.postInfo.bookTitle} by  {this.state.postInfo.bookAuthor}</p>

                        <p className="postDetailParagraphs"><strong>Book Condition: </strong>   {this.state.postInfo.condition}  &nbsp;<i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i> <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i> <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i> <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i> <i className="glyphicon glyphicon-star" aria-hidden="true"></i></p>

                        <p className="postDetailParagraphs"><strong>Course's Book: </strong> {this.state.postInfo.course}</p>
                        <p className="postDetailParagraphs"><strong>Book Format: </strong>{this.state.postInfo.format}</p>
                        <p className="postDetailParagraphs"><strong>Price: </strong>$ {this.state.postInfo.price} &nbsp; &nbsp; | &nbsp; &nbsp; Seller: {this.state.postInfo.userName}</p> 

                        <p className="postDetailParagraphs"><strong>Post Id: </strong>{this.state.postInfo.id}</p>
                        <p className="postDetailParagraphs"><strong>Book Department: </strong> {this.state.postInfo.deparment}</p>

                        <p className="postDetailParagraphs"><strong>ISBN Number: </strong> {this.state.postInfo.isbn}</p>

                        <p className="postParagraphDescription"><strong>Book Description: </strong> {this.state.postInfo.description}</p>
                        <p className="postDetailParagraphs"><strong> Note: </strong> For supplemental materials please contact me.</p>
                      </div><br/>

                      <div className="col-sm-12"> 

                        
                        <p className="postDetailParagraphs"><i className="glyphicon glyphicon-check" style={{color:"#62033c"}} aria-hidden="true"></i> Get Rewarded for Ordering Your Textbooks! Enroll Now</p>

                        <p className="postDetailParagraphs"><i className="glyphicon glyphicon-shopping-cart" style={{color:"#62033c"}} aria-hidden="true"></i> Free Shipping On Orders Over $35!</p>

                        <p className="postDetailParagraphs"><i className="glyphicon glyphicon-pencil" style={{color:"#62033c"}} aria-hidden="true"></i> Reviews coming soon</p>
                        
                        <center>
                          <button onClick={this.handleSinglePost} value="" className="btn-info" style={{marginRight: '20px'}}>Edit this post</button>

                          <button type="submit" onClick={this.handleManagePosts} className="btn-success" value="{}">All Done</button>
                          </center>
                      </div> 

                    </div>

              </div>
            </div>
        

      </div>
    );
  }
}


