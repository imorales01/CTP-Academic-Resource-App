/******************************************************************************
Title           : BooksByCollege.js
Author          : Academic Resources App
Description     : BooksByCollege view allows user to search by college, Department and courses
******************************************************************************/

/******************************************************************************
  Libraries
******************************************************************************/
import React, { Component } from 'react';
import { Link } from 'react-router';
import ContactSeller from '../ContactSeller';
import ToggleDisplay from 'react-toggle-display';
import Chat from '../Chat';
import '../../App.css';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

/******************************************************************************
    Component definitions
  ******************************************************************************/

  //@Title: BooksByCollege
  //@Description: Will render college, Department, courses, books and sellers.
export default class BooksByCollege extends Component {

  constructor(props) {
    super(props);
      this.state = {
        
        colleges: '',
        collegeDepartments:'',
        departmentCourses:'',
        booksByCourse:'',
        postsByTitle:'',
        selectedPostByTitle:'',
        singlePostInfo:'',
        singlePostBookInfo:'',
        toggleContactSellerComponent:false,
        toggleBookDetailsComponent:false,
        showChat:false,
        chatDisplay: false,
        visibleDiv: false,
        selectedDepartmentsButton: {},
        selectedCourseButton: {},
        selectedBookButton: {},

      }
    this.selectDropDown = this.selectDropDown.bind(this);
    this.getSinglePostInfo = this.getSinglePostInfo.bind(this)
    this.contactUser = this.contactUser.bind(this)
    this.handleChatComponent = this.handleChatComponent.bind(this)
    this.handleVisibleDiv = this.handleVisibleDiv.bind(this)

  }

  /******************************************************************************
  Function definitions
  ******************************************************************************/
  //@selectDropDown: Fetches Cuny colleges
  selectDropDown(e) {
    let collegeId = e.target.value;
    fetch('http://localhost:8000/api/colleges/' + collegeId, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      this.setState({collegeDepartments: result})
    })
  }

  
  handleChatComponent() {
    this.setState({
      showChat: !this.state.showChat,
      chatDisplay:!this.state.chatDisplay,
    });
  }


  //@getBooksByCourseId: Gets courseId from onClick event and fetches all books within the course
  getBooksByCourseId(key, e) {
    // @selectedCourseButton: changes the button's font color to active
    let selected = this.state.selectedCourseButton;
    selected = {};
    selected[key] = this.state.selectedCourseButton[key] == "selected" ? "" : "selected";
    this.setState({selectedCourseButton: selected});


    let courseId = e.target.value;
    fetch('http://localhost:8000/api/courses/' + courseId, {
      method: 'get',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({booksByCourse: data})
    })
  }

  //@getPostsByTitle: Gets book title from onClick event and fetches all posts with the same title
  getPostsByTitle(key, e) {

    // @selectedCourseButton: changes the button's font color to active
    let selected = this.state.selectedBookButton;
    selected = {};
    selected[key] = this.state.selectedBookButton[key] == "selected" ? "" : "selected";
    this.setState({selectedBookButton: selected});


    // fetches all posts with the same title
    let postTitle = e.target.value;
    this.setState({selectedPostByTitle: postTitle})
    fetch('http://localhost:8000/api/post/' + postTitle , {
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
      this.setState({postsByTitle: result})
    })
  }

   //@getSinglePostInfo: Gets single post info where the post has the same postTitle and userID
  getSinglePostInfo(e) {
    let postId = e.target.value;
    fetch('http://localhost:8000/api/post/postInfo/' + postId , {
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
        singlePostInfo: result,
        toggleContactSellerComponent:false,
        toggleBookDetailsComponent:true
      })
    })
    .then(() => {
      let bookTitle = this.state.singlePostInfo.bookTitle
      fetch('http://localhost:8000/api/books/title/' + bookTitle , {
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
        console.log('result singlePostBookInfo:', result)
        this.setState({
          singlePostBookInfo: result,
        })
      })

    })
      
  }

  //@contactUser: Gets single post info where the post has the same postTitle and userID
  contactUser(e) {
    let sellerId = e.target.value;
    console.log('sellerId:', sellerId)
    this.setState({
      toggleContactSellerComponent: true,
      toggleBookDetailsComponent:false
    })
    // this.setState({selectedPostByTitle: postTitle})
    // fetch('http://localhost:8000/api/post/' + postTitle , {
    //   method: 'get',
    //   header: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // })
    // .then((response) => {
    //   return response.json()
    // })
    // .then((result) => {
    //   this.setState({postsByTitle: result})
    // })
  }

  buyNow(e) {
    let bookToBuy = e.target.value;
    console.log('bookToBuy:',bookToBuy)

  }



  //@componentWillMount: Fetches all colleges and renders them
  componentWillMount() {
    fetch('http://localhost:8000/api/colleges', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({colleges: data})
    })
  }


  handleVisibleDiv() {
    this.setState({visibleDiv: !this.state.visibleDiv})
  }

  //@getCoursesByDepartmentId: Gets departmentId from dropDown and fetches all courses within the department
  getCoursesByDepartmentId(key, e) {

    // @selectedDepartmentsButton: changes the button's font color to active
    let selected = this.state.selectedDepartmentsButton;
    selected = {};
    selected[key] = this.state.selectedDepartmentsButton[key] == "selected" ? "" : "selected";
    this.setState({selectedDepartmentsButton: selected});
    
    // @fetches all courses within the department
    let departmentId = e.target.value;
    fetch('http://localhost:8000/api/departments/' + departmentId , {
      method: 'get',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({departmentCourses: data})
    })
  }

  
 

  render() {
    return (
      <div className="container" style={{width: '100%',paddingBottom: '30px'}} >
        <div className="row ">

          {/*Renders colleges and departments*/}
          <div className="col-sm-2">
            <div className="card" style={{padding: '10px'}}>
              <div className="card-body border-success">
                <h4 className="card-title border-success" style={{color:'blue', fontSize: '25px'}}>Find your Books By College</h4>

                {
                  (this.state.colleges) ?
                  (
                    <center>
                      <div>
                        <select onChange={this.selectDropDown}>
                          <option value="Please">College Name</option>
                          {this.state.colleges.map((college, key) => {
                            return (
                                    <option key={key} value={college.id}>{college.name}</option>
                                   )
                            })
                          }
                        </select>
                        
                      </div>
                    </center>
                  ): 
                  (<h1>Loading ...</h1>)
                }












                {
                  (this.state.collegeDepartments) ?
                  (
                    <div >
                      <center><h4 className="card-title border-success" style={{color:'blue', fontSize: '25px'}}>Departments</h4></center>
                      <div className="scrollable1">
                        {
                          this.state.collegeDepartments.Departments.map((department, key) => {
                            return (
                              <div  className="list-group well well-lg" key={key}>

                                <button 
                                onClick={this.getCoursesByDepartmentId.bind(this, key)}
                                className={this.state.selectedDepartmentsButton[key]} 
                                value={department.id}>
                                  {department.departmentName}
                                </button>


                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  ): 
                  (<p></p>)
                }










              </div>
            </div>
          </div>

          {/*Renders courses*/}
          <div className="col-sm-2">
            <div className="card" style={{padding: '10px'}}>
              <div className="card-body">
                <center><h4 className="card-title" style={{color:'blue', fontSize: '25px'}}>List of courses in  {this.state.departmentCourses.departmentName}</h4></center>


                  {
                    (this.state.departmentCourses) ?
                    (
                      <div className="scrollable2">
                        {this.state.departmentCourses.Courses.map((course, key) => {
                          return (
                            <div className="list-group well well-lg"  key={key}>
                              <button 
                                onClick={this.getBooksByCourseId.bind(this, key)}
                                className={this.state.selectedCourseButton[key]} 
                                value={course.id}>
                                  {course.courseName}
                              </button>

                            </div>
                          )
                         })
                        }
                      </div>
                    ):
                    (<p>No Courses Selected!</p>)

                  }


              </div>
            </div>
          </div>

          {/*Renders Books*/}
          <div className="col-sm-2">
            <div className="card" style={{padding: '10px'}}>
              <div className="card-body">
                <h4 className="card-title" style={{color:'blue', fontSize: '25px'}}>Books for {this.state.booksByCourse.courseName}</h4>


                  {
                    (this.state.booksByCourse) ?
                    (
                      <div className="scrollable3">
                        <h1>{this.state.booksByCourse.title}</h1>
                        {this.state.booksByCourse.Books.map((book, key) => {
                          return (
                            <div className="list-group well well-lg" key={key}>
                              <button 
                                onClick={this.getPostsByTitle.bind(this, key)}
                                className={this.state.selectedBookButton[key]} 
                                value={book.title}>
                                  {book.title}
                              </button>

                            </div>
                          )
                         })
                        }
                        
                      </div>
                    ):
                    (<p>No Books Selected!</p>)

                  }


              </div>
            </div>
          </div>

          {/*Renders Sellers*/}
          <div className="col-sm-6">

            <div>
              <div className="card-body">
                <h4 className="card-title" style={{color:'blue', fontSize: '25px'}}> Book sellers for {this.state.selectedPostByTitle}</h4>
                {
                  (this.state.postsByTitle) ? 
                  
                  (
                    <table className="table table-bordered table-hover">
                      <thead >
                        <tr>
                          <th> Seller </th>
                          <th> Price </th>
                          <th> Book Condition  </th>
                          <th>  Contact Seller </th>
                          <th>  Full Description </th>
                          <th>  Buy Now </th>
                        </tr>
                      </thead>
                      <tbody> 
                        {this.state.postsByTitle.map((book, key) => {
                          return(
                            <tr key={key}> 
                              <td colSpan="1"><Link to={'/sellers-profile/' + book.UserId} > {book.userName} </Link></td>
                              <td scope="row"> $ {book.price}</td>
                              <td scope="row">{book.condition}</td>

                              <td scope="row"><button onClick={this.contactUser} value={book.UserId} className="btn-info">Contact</button></td>


                              <td scope="row"><button onClick={this.getSinglePostInfo} value={book.id} className="btn-info">Details</button></td>
                              
                              <td scope="row"><button  value={book.id} className="btn btn-success">Buy Now</button></td>
                              <td scope="row"><button onClick={this.handleChatComponent} value={book.id} className="btn btn-success">Chat Now</button></td>
                            </tr>) 
                          })
                        }
                      </tbody> 
                    </table>): 
                  (<p>No Seller Selected!</p>)
                }
              </div>
            </div>


            {/*BOOK DETAILS IF STATE EXIST DISPLAY IT*/}
            <div className="card" style={{padding: '10px', width:'100%'}}>
              <div className="card-body" style={{width:'100%'}}>


                {/*toggleBookDetailsComponent AND toggleContactSellerComponent WILL TOGGLE TO DISPLAY IF STATE EXIST DISPLAY IT*/}

                {/*CONTACT SELLER  IF toggleContactSellerComponent STATE EXIST DISPLAY IT*/}
                {
                  (this.state.toggleContactSellerComponent) ?
                  (<ContactSeller />) :
                  (null)
                }


                {/*BOOK DETAILS IF toggleBookDetailsComponent STATE EXIST DISPLAY IT*/}
                {
                  (this.state.toggleBookDetailsComponent) ?
                  (
                    <div className="row" style={{fontSize: '15px'}}>

                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                        <img className="img-responsive" style={{ marginTop: '42px'}} src='https://images-na.ssl-images-amazon.com/images/I/51OPx5KCYqL._SX332_BO1,204,203,200_.jpg' alt="book cover of the universe"/>
                      </div>


                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-9">

                        <p className="card-title border-success" style={{color:'blue', fontSize: '25px'}}>{this.state.singlePostInfo.bookTitle} by {this.state.singlePostBookInfo.author}</p>

                        <p><strong>Book Condition: </strong>   {this.state.singlePostInfo.condition}  <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i> <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i> <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i> <i className="glyphicon glyphicon-star" style={{color:"red"}} aria-hidden="true"></i> <i className="glyphicon glyphicon-star" aria-hidden="true"></i></p>

                        <p><strong>Course's Book: </strong> {this.state.singlePostInfo.course}</p>
                        <p><strong>Book Format: </strong>{this.state.singlePostInfo.format}</p>
                        <p><strong>Price: </strong>${this.state.singlePostInfo.price} &nbsp; &nbsp; | &nbsp; &nbsp; Seller: {this.state.singlePostInfo.userName}</p> 

                        <p><strong>Edition: </strong>{this.state.singlePostBookInfo.edition}</p>
                        <p><strong>Copyright: </strong>{this.state.singlePostBookInfo.year}-06-28</p>
                      </div>

                      <div className="col-sm-12"> 

                        
                        <p><strong>Book Department: </strong> {this.state.singlePostInfo.deparment}</p>

                        <p><strong>Publisher: </strong> Scholastic Inc.</p>

                        <p><strong>Note: </strong> Supplemental materials are not guaranteed with Used book purchases.</p>
                        <p><i className="glyphicon glyphicon-shopping-cart" style={{color:"#62033c"}} aria-hidden="true"></i> Free Shipping On Orders Over $35!</p>
                        <p><i className="glyphicon glyphicon-check" style={{color:"#62033c"}} aria-hidden="true"></i> Get Rewarded for Ordering Your Textbooks! Enroll Now</p>
                        <p><i className="glyphicon glyphicon-pencil" style={{color:"#62033c"}} aria-hidden="true"></i> Reviews coming soon</p>
                        
                        <center>
                          <button onClick={this.contactUser} value={this.state.singlePostInfo.UserId} className="btn-info" style={{marginRight: '20px'}}>Contact Seller</button>

                          <button type="submit" onClick={this.buyNow} className="btn-success" value={this.state.singlePostInfo.id}>Buy Now</button>
                          </center>
                      </div> 

                    </div>
                  ): 
                  (null)
                }


              </div>
            </div>

            {/*Chat component
        <div className="chat-window-inBooks">
          <p>
            {
              (this.state.chatDisplay) ?
              (<button onClick={ () => this.handleChatComponent() } style={{ paddingLeft: '40px', paddingRight: '40px', borderRadius: '6px', fontFamily: 'Futura'}}>Close   <i className="glyphicon glyphicon-remove" style={{color:"red", top:'3px', fontSize: 'larger', marginLeft:'10px'}} aria-hidden="true"></i></button>) :
              (<button onClick={ () => this.handleChatComponent() } style={{ paddingLeft: '40px', paddingRight: '40px', borderRadius: '6px', fontFamily: 'Futura'}}> Chat </button>)
            }
          </p>

          <div className="chat-window col-xs-5 col-md-3">
            <ToggleDisplay>
              {
                (this.state.showChat) ?
                (<Chat />):
                (null)
              }
                
            </ToggleDisplay>
          </div>
        </div>

*/}



          </div>

        </div>

        {/*SECOND ROW*/}
        <div className="row ">
          {/*Chat component*/}

          <div className="col-sm-4 pull-right sticky">
            <p className="pull-right">
              {
                (this.state.chatDisplay) ?
                (<button onClick={ () => this.handleChatComponent() } style={{ paddingLeft: '40px', paddingRight: '40px', borderRadius: '6px', fontFamily: 'Futura'}}>Close   <i className="glyphicon glyphicon-remove" style={{color:"red", top:'3px', fontSize: 'larger', marginLeft:'10px'}} aria-hidden="true"></i></button>) :
                (<button onClick={ () => this.handleChatComponent() } style={{ paddingLeft: '40px', paddingRight: '40px', borderRadius: '6px', fontFamily: 'Futura'}}> Chat </button>)
              }
            </p>

            <div className="chat-window col-xs-5 col-md-3">
              <ToggleDisplay>
                {
                  (this.state.showChat) ?
                  (<Chat />):
                  (null)
                }
                  
              </ToggleDisplay>
            </div>



          </div>



        </div>


        {/* TRIYING TO MAKE IT BETTER
        <div>
          <button onClick={this.handleVisibleDiv}>{this.state.visibleDiv ? 'Close chat' : 'Chat'}</button>
          <CSSTransitionGroup transitionName="example">
              { 
                (this.state.visibleDiv ) ?
                (
                  <div className='panel'>
                    <Chat />
                  </div>
                ) :
                (null)
              }

          </CSSTransitionGroup>

      

        </div>
*/}

        

      </div>

    )
  }
}


