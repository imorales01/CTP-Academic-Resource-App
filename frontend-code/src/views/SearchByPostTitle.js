import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router'
import './../App.css';

export default class SearchByPostTitle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post:[],
      inputToSearch: '',
    }
    this.getPostTitles = this.getPostTitles.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  

  getPostTitles(e) {
    e.preventDefault()
    let inputToSearch = this.state.inputToSearch;
    console.log('inputToSearch:', inputToSearch)
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
      console.log('result:', result)
      this.setState({
        post: result
      })
    })
  }

  handleChange(inputField, e){
    this.setState({[inputField] : e.target.value})
  }

  render(){
    console.log('state:', this.state)
    return(
      <div className='container' style={{minHeight: '450px'}}>
        <center>
          <form onSubmit={this.getPostTitles}>

            <input className='input-search-searchComponent' type="text" placeholder="Quick Search" onChange={this.handleChange.bind(this, 'inputToSearch')} name="inputToSearch" required="required"  autoFocus />

            <button type="submit" className="btn btn-success">Search</button>
          </form>
        </center>

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


  



