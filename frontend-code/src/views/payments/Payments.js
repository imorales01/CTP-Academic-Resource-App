import React, { Component } from 'react';
import {connect} from 'react-redux';
// import * as userActions from './reducers/userActions.js';
// import UploadImage from './UploadImage' I think we can 

export default class Payments extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo: ''
    } 
    this.submitPayment = this.submitPayment.bind(this);   
  }

  submitPayment(e) {
    e.preventDefault();
  }

  render() {
    console.log('this.props home:', this.props)
    console.log('sessionId', sessionStorage.getItem('currentUser'))
    return (
      <div className="container" style={{ width: '100%'}}>

        <div className="row">
          <div className="col-xs-12 col-md-12">

            <div className="panel panel-default credit-card-box">
              
              <div className="panel-heading display-table" >
                <div className="row display-tr" style={{height:'41px'}}>
                  <h3 className="panel-title display-td" >Payment Details</h3>
                  
                  <div className="display-td" >                            
                    <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"/>
                  </div>

                </div>                    
              </div>

              <div className="panel-body">

                <form role="form" id="payment-form" onSubmit={this.submitPayment}>
                  <div className="row">
                    <div className="col-xs-12">

                      <div className="form-group required">
                        <label className="control-label">Name on Card</label>
                        <input 
                        className="form-control" 
                        size="4" type="text" 
                        required autoFocus 
                        />
                      </div>




                      <div className="form-group">
                        <label htmlFor="cardNumber">CARD NUMBER</label>
                      
                        <div className="input-group">
                          <input 
                          type="tel"
                          className="form-control"
                          name="cardNumber"
                          placeholder="Valid Card Number"
                          autoComplete="cc-number"
                          required 
                          />
                          <span className="input-group-addon"><i className="fa fa-credit-card"></i></span>
                        </div>

                      </div>  

                    </div>

                  </div>

                  <div className="row">

                    <div className="col-xs-7 col-md-7">

                      <div className="form-group">
                        <label htmlFor="cardExpiry"><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label>
                        <input 
                        type="tel" 
                        className="form-control" 
                        name="cardExpiry"
                        placeholder="MM / YY"
                        autoComplete="cc-exp"
                        required 
                        />
                      </div>

                    </div>

                    <div className="col-xs-5 col-md-5 pull-right">
                    
                      <div className="form-group">
                        <label htmlFor="cardCVC">CV CODE</label>
                        <input 
                        type="tel" 
                        className="form-control"
                        name="cardCVC"
                        placeholder="CVC"
                        autoComplete="cc-csc"
                        required
                        />
                      </div>

                    </div>


                  </div>


                  <div className="row">
                    
                    <div className="col-xs-12">
                  
                      <div className="form-group">
                        <label htmlFor="couponCode">COUPON CODE</label>
                        <input type="text" className="form-control" name="couponCode" />
                      </div>
                    </div> 

                  </div>

                  <div className="row">
                    
                    <div className="col-md-12 form-group">
                      <button className="form-control btn btn-info submit-button" type="submit">Total: $102.50</button>
                    </div>

                    <div className="col-md-12 form-group">
                      <button className="form-control btn btn-primary submit-button" type="submit">Pay »</button>
                    </div>

                  </div>


                  <div className="row">
                    <div className="col-xs-12">
                      <p className="payment-errors"></p>
                    </div>
                  </div>

                </form>
                
              </div>

            </div>            
          </div>            
        </div>






    


      </div>
    );
  }
}

//@mapStoreToProps: makes available the userState from our redux state
// const mapStoreToProps = store => (
//   {userState: store.userReducer}
// )

// export default connect(mapStoreToProps, userActions)(Payments);

