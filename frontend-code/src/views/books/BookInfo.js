/******************************************************************************
Title           : profile.js
Author          : Academic Resources App
Description     : Book information that is pass to SellerBookDetail.js
******************************************************************************/

/******************************************************************************
  Libraries
******************************************************************************/
import React, { Component } from 'react';
import {Link} from 'react-router';


/******************************************************************************
    Component definitions
  ******************************************************************************/

  //@Title: BookInfo
  //@Description: Gets props from SellerBookDetail class and returns jsx elements that SellerBookDetail renders
export default function BookInfo(props) {
  return(
    <div>

      {
        (props.bookInfo) ? 
        (<div>
          <div>
            <img src={'https://images-na.ssl-images-amazon.com/images/I/51OPx5KCYqL._SX332_BO1,204,203,200_.jpg'} alt="book cover of the universe"/>
          </div>

          <div>
            <h1>Title: {props.bookInfo.title}</h1>
            <h1>Author: {props.bookInfo.author}</h1>
            <h1>Edition: {props.bookInfo.edition}</h1>
            <h1>Format: {props.bookInfo.format}</h1>
            <h1>Year: {props.bookInfo.year}</h1>
          </div>
        </div>): 
        (<h1>Loading ...</h1>)
      }


      {
        (props.postInfo) ? 
        (<table className="table table-bordered table-hover">
          <thead >
            <tr>
              <th> Seller </th>
              <th> Price </th>
              <th> Book Conditions  </th>
              <th>  Buy Now </th>
            </tr>
          </thead>
          <tbody> 
            {props.postInfo.map((book, key) => {
              return(
                <tr key={key}>
                  <td colSpan="1">{book.userName}</td>
                  <td scope="row"> $ {book.price}</td>
                  <td scope="row">{book.condition}</td>
                  <td scope="row"><button type="button" className="btn btn-success">Buy Now</button></td>
                </tr>) 
              })
            }
          </tbody> 
        </table>): 
        (<h1>Loading ...</h1>)
      }

      </div>
    )
}