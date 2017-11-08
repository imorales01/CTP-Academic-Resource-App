import React, { Component } from 'react';

class SellersBookDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInfo: '',
			bookInfo: '',
		}
	}

	// componentWillMount() {

	// }

	render() {
		return (
			
			<div className="App">

				<h1 style={{color:'blue', fontSize: '30px'}}>
		          SellersBookDetail  
		        </h1>
		      {/*  {(this.state.userInfo) ? (<p style={{color:'brown', fontSize: '20px'}}> 
		          Full name: {this.state.userInfo.firstName}  {this.state.userInfo.lastName}<br/> 
		          UserName: {this.state.userInfo.userName}<br/>
		          Email: {this.state.userInfo.email}<br/> 
		          College: {this.state.userInfo.college}<br/>  
		          Cuny Id: {this.state.userInfo.cunyId}<br/>   </p>):(<p>No userInfo</p>)}. */}

		    </div>
		)
	}



}
export default SellersBookDetail;