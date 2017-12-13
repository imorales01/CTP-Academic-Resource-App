/******************************************************************************
Title           : SearchInNavBar.js
Author          : Academic Resources App
Description     : SearchInNavBar search form that passes inputToSearch as props to SearchByPostTitle.js component
******************************************************************************/

import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router'
import './../App.css';

export default class SearchInNavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputToSearch: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  
  handleChange(inputField, e){
  	e.preventDefault()
  	this.setState({[inputField] : e.target.value})    
  }

  handleSearch(e){
  	e.preventDefault();

  	// resets all input texts from the form to blank 
  	this.refs.form.reset()

  	browserHistory.push(`/search/${this.state.inputToSearch}`)
  }

  render(){
    console.log('state SearchInNavBar:', this.state)
    return(
      <div>
          <form onSubmit={this.handleSearch} ref="form">

            <input id="inputSearchInNav" className='input-search-searchComponent' type="text" placeholder="Search Books For Sale" onChange={this.handleChange.bind(this, 'inputToSearch')}  required="required"  autoFocus/>

            <button type="submit" className="glyphicon glyphicon-search" id="searchbutton"></button>

          </form>
      </div>
    )
  }

}




  



