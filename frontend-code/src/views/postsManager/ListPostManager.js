import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router'
import {connect} from 'react-redux';
import '../../ListManager.css'

export default class ListPostManager extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo: null,
      posts: null,
    }   
  }

  componentDidMount() {
    let userName = sessionStorage.getItem('currentUser');
    fetch('/api/users/' + userName, {
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
      console.log('bookInfo Request succeeded with JSON response', data);
      this.setState({
        userInfo: data,
        posts: data.Posts,
      })
    })
    .catch(function (error) {
      console.log('Request failed', error);
    })

  }


  render() {
    console.log('this.state', this.state)
    console.log('posts', this.state.posts)
    return (
      <div className="container" style={{ width: '100%'}}>
        <div className="row">
          <h1>Manage your ads all in one place</h1>
          {
            (this.state.posts) ?
            (<PostList postList={this.state.posts}/>):
            (<h3>Somenthing went wrong. Please log in and try again.</h3>)
          }
        </div>
      </div>
    );
  }
}



function PostList(props) {
  return(
    <div >
      <div className="col-sm-offset-1 col-sm-8 col-md-offset-2 col-md-8">
        <div className="panel panel-default bootcards-media">
          
          {
            (props.postList) ? 
            (<div className="panel-body row">
               { props.postList.map((ele, i) => {
                  return (

                    <div key={i} className="panel-body row">

                      <div className="row">
                        <div className="col-xs-2">
                          <img id="logo" src="https://github.com/taulantspahiu/Bootcards-Examples/blob/master/twitter_card/images/logo.jpg?raw=true"/>
                        </div>

                        <div className="col-xs-10">
                          
                          <div className="row">
                            <p id="title">
                              Post id: <span className="inTitle">{ele.id}
                            <Link to={'/post-manager/' +ele.id} className="btn btn-info pull-right" style={{marginLeft:'10px'}}>Delete</Link> 
                            <Link to={'/post-manager/' +ele.id} className="btn btn-info  pull-right">Edit</Link>

                            </span>
                            </p>


                          </div>

                          <div className="row heading">
                            <h5>{ele.bookTitle} by {ele.bookAuthor} </h5>
                          </div>

                        </div>

                      </div>

                       <div className="row body-card">
                        <div className="col-xs-4">
                          <img style={{height:'200px'}} src={ele.image}/>
                        </div>
                        <div className="col-xs-8">
                          <h4>{ele.bookTitle}</h4>
                          <h5>{ele.description}</h5>
                          <h5>academicresources.com</h5>
                        </div>
                      </div>

                      <div className="panel-footer">
                        <p><i className="fa fa-reply" aria-hidden="true"></i></p>
                        <p><i className="fa fa-retweet" aria-hidden="true"></i> 3</p>
                        <p><i className="fa fa-heart" aria-hidden="true"></i> 4</p>
                        <p><i className="fa fa-ellipsis-h" aria-hidden="true"></i></p>
                      </div>
                
                    </div>
                  )
               })
               }
            </div>): 
            (<h1>Loading ...</h1>)
          }

        </div>
      </div>

    </div>
  )
}



