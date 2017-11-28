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
      }
    this.selectDropDown = this.selectDropDown.bind(this);
    this.getCoursesByDepartmentId = this.getCoursesByDepartmentId.bind(this)
    this.getBooksByCourseId = this.getBooksByCourseId.bind(this)
    this.getPostsByTitle = this.getPostsByTitle.bind(this)
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

  //@getCoursesByDepartmentId: Gets departmentId from dropDown and fetches all courses within the department
  getCoursesByDepartmentId(e) {
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

  //@getBooksByCourseId: Gets courseId from onClick event and fetches all books within the course
  getBooksByCourseId(e) {
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
  getPostsByTitle(e) {
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

  render() {
    return (
      <div className="container" style={{width: '100%'}}>
        <div className="row ">

          {/*Renders colleges and departments*/}
          <div className="col-sm-3">
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
                        <button type="submit" onClick={this.getCollege} className="btn-success">Go</button>
                      </div>
                    </center>
                  ): 
                  (<h1>Loading ...</h1>)
                }

                {
                  (this.state.collegeDepartments) ?
                  (
                    <div>
                      <center><h4 className="card-title border-success" style={{color:'blue', fontSize: '25px'}}>Departments</h4></center>
                      {
                        this.state.collegeDepartments.Departments.map((department, key) => {
                          return (
                            <div  className="list-group well well-lg" style={{width: '200px'}} key={key} >
                              <button onClick={this.getCoursesByDepartmentId} value={department.id}>{department.departmentName}</button>
                            </div>
                          )
                        })
                      }
                    </div>
                  ): 
                  (<p></p>)
                }
              </div>
            </div>
          </div>

          {/*Renders courses*/}
          <div className="col-sm-3">
            <div className="card" style={{padding: '10px'}}>
              <div className="card-body">
                <center><h4 className="card-title" style={{color:'blue', fontSize: '25px'}}>List of courses in  {this.state.departmentCourses.departmentName}</h4></center>
                {
                  (this.state.departmentCourses) ?
                  (
                    <div>
                      {this.state.departmentCourses.Courses.map((course, key) => {
                        return (
                          <div className="list-group well well-lg" style={{width: '200px'}} key={key}>
                            <button onClick={this.getBooksByCourseId} value={course.id}>{course.courseName}</button>
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
          <div className="col-sm-3">
            <div className="card" style={{padding: '10px'}}>
              <div className="card-body">
                <h4 className="card-title" style={{color:'blue', fontSize: '25px'}}>Books for {this.state.booksByCourse.courseName}</h4>
                {
                  (this.state.booksByCourse) ?
                  (
                    <div>
                      <h1>{this.state.booksByCourse.title}</h1>
                      {this.state.booksByCourse.Books.map((book, key) => {
                        return (
                          <div className="list-group well well-lg" style={{width: '200px'}} key={key}>
                            <button onClick={this.getPostsByTitle} value={book.title}>{book.title}</button>
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
          <div className="col-sm-3">
            <div  style={{padding: '10px'}}>
              <div className="card-body">
                <h4 className="card-title" style={{color:'blue', fontSize: '25px'}}>Book sellers for {this.state.selectedPostByTitle}</h4>
                {
                  (this.state.postsByTitle) ? 
                  
                  (
                    <table className="table table-bordered table-hover">
                      <thead >
                        <tr>
                          <th> Seller </th>
                          <th> Price </th>
                          <th> Book Conditions  </th>
                          <th>  Buy Now </th>
                        </tr>
                      </thead>
                      <tbody> 
                        {this.state.postsByTitle.map((book, key) => {
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
                  (<p>No Seller Selected!</p>)
                }
              </div>
            </div>
          </div>


        </div>
      </div>

    )
  }
}
