import './App.css';
import Login, {Login2} from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications';
import React, { Component } from 'react';

import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import BodySection from '../BodySection/BodySection';
import AppContext, { user, logOut } from './AppContext'


class App extends Component {
  constructor(props, context){
    super(props, context);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    this.state = {
      displayDrawer:false,
      user,
      logOut : this.logOut, 
      listNotifications : [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3,  type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }}
      ],               
    };
  }
  render() {
    const { isLoggedIn } = this.state.user;
    const {user, logOut} = this.state;
    const listCourses = [
      { id: 1, name: 'ES7', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 50 }
    ];
    
    var logged = (!isLoggedIn) ? 
                  <BodySectionWithMarginBottom title={"Log in to continue"}>
                     <Login logIn={this.logIn} />
                  </BodySectionWithMarginBottom>
                  :
                  <React.Fragment>
                    <BodySectionWithMarginBottom title={"Course List"}>
                        <CourseList listCourses={listCourses}/>
                    
                    <BodySection title={"News from the School"} >
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at.</p>
                    </BodySection>
                    </BodySectionWithMarginBottom>
                   
                  </React.Fragment>
    return (
      <React.Fragment>
        <AppContext.Provider value={ {user: this.state.user, logOut: this.state.logOut} }>
        <Notifications 
          listNotifications={this.state.listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
          /> 
        <div className="App">
          <Header />
          <div className="App-body">
            {logged}
          </div>
        </div>
        <Footer />
        </AppContext.Provider>
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
      this.state.logOut();
    }
  }

  handleDisplayDrawer(e) {
    this.setState({displayDrawer:true})

  }
  handleHideDrawer(e) {
    this.setState({displayDrawer:false});
  }
  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });           
  }

  logOut(){
    this.setState({
          user,
        });              
  }
  markNotificationAsRead (id) {
    const { listNotifications } = this.state;
    this.setState({...this.state, listNotifications: listNotifications.filter(notif => notif.id !== id)
    });
  }

  componentWillUnmount(){
    window.removeEventListener("keydown", this.handleKeyDown);
    console.log("unmount")
  }
}



export default App;
