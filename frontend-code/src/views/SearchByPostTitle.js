/******************************************************************************
Title           : SearchByPostTitle.js
Author          : Academic Resources App
Description     : SearchByPostTitle  search post by title with the props pass by  information that is pass SearchInNavBar.js
******************************************************************************/
import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router'
import './../App.css';


export default class SearchByPostTitle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post:[],
      inputToSearch: this.props.params.input,
    }
  }

  // @componentDidMount: It runs before rendering or when page is loading and get all post tha contain inputToSearch 
  componentDidMount() {
    let inputToSearch = this.state.inputToSearch;
    fetch("http://localhost:8000/api/post/search/" + inputToSearch , {
      method: 'get',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      this.setState({
        post: result
      })
    })
  }

  
  // @componentWillReceiveProps: It runs after props change. Then fetch posts with the new inputToSearch and re setState which cause to render again
  componentWillReceiveProps(nextProps) {
    this.setState({inputToSearch: nextProps.params.input})
    let inputToSearch = nextProps.params.input;
    fetch("http://localhost:8000/api/post/search/" + inputToSearch, {
      method: 'get',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      this.setState({
        post: result
      })
    })
  }

  // @handleChange: on handleChange setState of the inpu that is calling it 
  handleChange(inputField, e){
    this.setState({[inputField] : e.target.value})
  }

  render(){
    console.log('state:', this.state)
    return(

      <div className='container' style={{minHeight: '450px'}}>

        <div className="col-xs-12 col-sm-6">
          {/* this.state.post[0] checks if post exist*/}
          {
            (this.state.post[0]) ?
            (<div> Results for <strong>{this.state.inputToSearch}</strong></div>) :
            (<div> Sorry not Results for <strong>{this.state.inputToSearch}</strong></div>)
          } 
        </div>
        

        <div className='middle'>

          {this.state.post.map((ele,i)=>{
            return (
              <div key={i} className='gallery'>

              <Link to={'/sellers-book-detail/' +ele.id}><img src='https://images-na.ssl-images-amazon.com/images/I/51OPx5KCYqL._SX332_BO1,204,203,200_.jpg' alt="book cover of the universe" className='itemGallery'/></Link>
              
              <Link to={'/sellers-book-detail/' + ele.id}><h4 className='img-title'>Title: {ele.bookTitle}</h4> </Link>
              <p>Course's Book: {ele.course}</p>
              <p>Book Department: {ele.deparment}</p>
              <p>Book Format: {ele.format}</p>
            </div>

            )
          })}
        </div>
        <div className="searchEmpty-container"></div>

      </div>
    )
  }

}


  



