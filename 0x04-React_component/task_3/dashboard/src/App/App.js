import './App.css';
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import BodySection from '../BodySection/BodySection';

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  render() {
    const { isLoggedIn } = this.props;
    const listCourses = [
      { id: 1, name: 'ES7', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3,  type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }}
    ];
    var logged = (!isLoggedIn) ? 
                  <BodySectionWithMarginBottom title={"Log in to continue"}>
                     <Login />
                  </BodySectionWithMarginBottom>
                  :
                  <BodySectionWithMarginBottom title={"Course List"}>
                      <CourseList listCourses={listCourses}/>;
                  </BodySectionWithMarginBottom>
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications} /> 
        <div className="App">
          <Header />
          <div className="App-body">
            {logged}
            <BodySection title={"News from the School"} >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at.</p>
            </BodySection>
          </div>
          <Footer />
        </div>
        
    </React.Fragment>
    );
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown(e){
    /*e.target.name
    e.target.value*/
    if (e.ctrlKey && e.key==="h"){
      alert("Logging you out");
      this.props.logOut();
    }
  }
  componentWillUnmount(){
    window.removeEventListener("keydown", this.handleKeyDown);
    console.log("unmount")
  }
}



App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut : PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut : () => {}
};

export default App;
