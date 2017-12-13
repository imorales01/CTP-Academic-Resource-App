 import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router'
import {connect} from 'react-redux';

export default class SinglePostManager extends Component {
  constructor(props){
    super(props);
    this.state={
      postInfo: null,
      postId: this.props.params.id,
    }   
  }


  componentDidMount() {
    let postId = this.state.postId
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


  render() {
    console.log('this.state in SinglePostDetails\:', this.state)

    return (
      <div className="container">

        <h1 style={{color:'blue', fontSize: '30px'}}>
        Edit This Post   
        </h1>
        {
          (this.state.postInfo) ?
          (<PostInfo postInfo={this.state.postInfo}/>):
          (<h3>Loading ...</h3>)
        }
      </div>
    );
  }


}


function PostInfo(props) {
  return(
    <div>

      {
        (props.postInfo) ? 
        (
          <div className="card" style={{padding: '40px', width:'100%'}}>
              <div className="card-body" style={{width:'100%'}}>


                
                    <div className="row">

                      <div className="col-xs-6 col-sm-6 col-md-4" style={{padding:'10px'}}>
                        <img className="img-responsive" style={{display: 'block',marginLeft:'auto', marginRight: 'auto'}} src={"http://localhost:8000/" + props.postInfo.image} alt="book cover"/>
                      </div>


                      <div className="col-xs-6 col-sm-6 col-md-8">

                        <p className="card-title border-success postDetailTitle">{props.postInfo.bookTitle} by  {props.postInfo.bookAuthor}</p>

                        <p className="postDetailParagraphs"><strong>Book Condition: </strong>   {props.postInfo.condition}  &nbsp;<i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i> <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i> <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i> <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i> <i className="glyphicon glyphicon-star" aria-hidden="true"></i></p>

                        <p className="postDetailParagraphs"><strong>Course's Book: </strong> {props.postInfo.course}</p>
                        <p className="postDetailParagraphs"><strong>Book Format: </strong>{props.postInfo.format}</p>
                        <p className="postDetailParagraphs"><strong>Price: </strong>$ {props.postInfo.price} &nbsp; &nbsp; | &nbsp; &nbsp; Seller: {props.postInfo.userName}</p> 

                        <p className="postDetailParagraphs"><strong>Post Id: </strong>{props.postInfo.id}</p>
                        <p className="postDetailParagraphs"><strong>Book Department: </strong> {props.postInfo.deparment}</p>

                        <p className="postDetailParagraphs"><strong>ISBN Number: </strong> {props.postInfo.isbn}</p>

                        <p className="postParagraphDescription"><strong>Book Description: </strong> {props.postInfo.description}</p>
                        <p className="postDetailParagraphs"><strong> Note: </strong> For supplemental materials please contact me.</p>
                      </div><br/>

                      <div className="col-sm-12"> 

                        
                        <p className="postDetailParagraphs"><i className="glyphicon glyphicon-check" style={{color:"#62033c"}} aria-hidden="true"></i> Get Rewarded for Ordering Your Textbooks! Enroll Now</p>

                        <p className="postDetailParagraphs"><i className="glyphicon glyphicon-shopping-cart" style={{color:"#62033c"}} aria-hidden="true"></i> Free Shipping On Orders Over $35!</p>
                        
                        <p className="postDetailParagraphs"><i className="glyphicon glyphicon-pencil" style={{color:"#62033c"}} aria-hidden="true"></i> Reviews coming soon</p>
                        
                        <center>
                          <button  value="" className="btn-info" style={{marginRight: '20px'}}>Contact Seller</button>

                          <button type="submit"  className="btn-success" value="{}">Buy Now</button>
                          </center>
                      </div> 

                    </div>

              </div>
            </div>
          ): 
        (<h1>Loading ...</h1>)
      }

      </div>
    )
}