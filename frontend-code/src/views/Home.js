import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as userActions from './reducers/userActions.js';
import Luis from './Luis.jpg'
import Ivelisse from './Ivelisse.jpg'
import Chuck from './Chuck.jpg'
import './Home.css';


class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo: ''
    }  
    this.updateEmailConfirmation = this.updateEmailConfirmation.bind(this); 
  }

  updateEmailConfirmation(e) {
    e.preventDefault()
    console.log('toggleEmailConfirmationComponent: HOME ,:')
    // this.setState({
    //   toggleEmailConfirmationComponent: true,
    //   togglePaymentsComponent: false,
    //   toggleContactSellerComponent: false,
    //   toggleBookDetailsComponent:false,
    // })
  }

  render() {
    console.log('this.props home:', this.props)
    console.log('sessionId', sessionStorage.getItem('currentUser'))
    return (
      <div className="container-fluid" style={{ width: '100%'}} >
        <div id="fullPage">
        <h2>
          Why Academic Resources App?
        </h2>
        <p id="homeText">
          Academic Resource App is a free web app whose goal is to provide students with college textbooks 
          without having to spend an outrageous amount of money throughout one’s college process. This 
          centralized platform consists of all CUNY campuses so that students can search for their materials 
          by departments, sections and/or classes relevant to their campus. The motivation for this app goes 
          beyond saving money but also take part in reducing the need to overproduce textbook through reusing. 
          In addition, it is more convenient for students to navigate and find the necessary materials since 
          each campus resource page is familiar to the student themselves. Similar web apps include Chegg, 
          CampusBooks, and SlugBooks but what makes our app unique is the familiarity and the users themselves. 
          As described above, the main purpose for this app is to include the information from each campus so 
          students can navigate with ease. The latter part is the users themselves because students can only 
          join through the verification of the student’s school email. This ensures that buyers/sellers are not 
          fake but also act as a communication device for students in the same college.
        </p>
        <h2 id="Available">
          Schools Available
        </h2>
        <p id="Schools">
          Baruch College <br />
          Brooklyn College <br />
          The City College of New York <br />
          College of Staten Island <br />
          Hunter College <br />
          Lehman College <br />
        </p>
        <h2> 
          Tech Stack
        </h2>
        <p id="Stack">
          express <br />
          react <br />
          react-redux <br />
          javascript <br />
          html/css <br />
          lint <br />
          node <br />
        </p>
        </div>
        <div class="row " id="aboutUs">
          <h2>
            Meet the Developers
          </h2>
          <p>
            Luis Carbajal: <br/>
            School: The City College of New York <br />
            Programs apart of: CUNY Tech Prep, CUNY Codes, Coalition for Queens

            <img src={Luis} alt={"Luis"} id="ourpics"/>
          </p>
          <p>
            Ivelisse Morales: <br/>
            School: Hunter College <br />
            Programs apart of: CUNY Tech Prep, MTA Bus Technology

            <img src={Ivelisse} alt={"Ivelisse"} id="ourpics"/> 
          </p>  
          <p>
            Chuk Ho Wu: <br/>
            School: Hunter College <br />
            Programs apart of: CUNY Tech Prep, Department of Youth and Community Development
            <img src={Chuck} alt={"Chuck"} id="ourpics" /> <br />

          </p>
        </div>



    

        </div>
    );
  }
}

//@mapStoreToProps: makes available the userState from our redux state
const mapStoreToProps = store => (
  {userState: store.userReducer}
)

export default connect(mapStoreToProps, userActions)(Home);

