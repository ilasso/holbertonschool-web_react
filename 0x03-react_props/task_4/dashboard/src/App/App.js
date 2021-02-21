import './App.css';
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications';
import React from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({isLoggedIn}) {
  var logged = (!isLoggedIn) ? <Login />: <CourseList />;
  return (
    <React.Fragment>
      <Notifications /> 
      <div className="App">
        <Header />
        <div className="App-body">
          {logged}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
