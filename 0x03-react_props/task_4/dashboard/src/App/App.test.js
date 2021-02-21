/*

    test that App renders without crashing
    verify that App renders a div with the class App-header
    verify that App renders a div with the class App-body
    verify that App renders a div with the class App-footer
*/
import { shallow } from 'enzyme';
import React from "react";
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';



describe("test App", () => {
    
    it("renders without crashing", () => {
        const wrapper = shallow(<App />);
        shallow(<App />);
        expect(wrapper.exists());
    });
    
    it("Notifications", () => {
        const wrapper = shallow(<Notifications />);
        shallow(<Notifications />);
        expect(wrapper.exists());
        
    });
    it("Header", () => {
        const wrapper = shallow(<Header />);
        shallow(<Header />);
        expect(wrapper.exists());
    });
    it("Login", () => {
        const wrapper = shallow(<Login />);
        shallow(<Login />);
        expect(wrapper.exists());
    });
    it("Footer", () => {
        const wrapper = shallow(<Footer />);
        shallow(<Footer />);
        expect(wrapper.exists());
    });
    it("Footer", () => {
        const wrapper = shallow(<Footer />);
        shallow(<Footer />);
        expect(wrapper.exists());
    });
}); 
  

/*
- Add a test to check that CourseList is not displayed
- Describe a new case, when isLoggedIn is true, and add two checks. 
  The first one should verify that the Login component is not included. 
  The second one should verify that the CourseList component is included
*/

describe("CourseList", () => {
it("test to check that CourseList is not displayed", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toEqual(0);
    }); 
}); 

const wrapper = shallow(<App isLoggedIn={true} />);
describe("when isLoggedIn is true", () => {
    it("the Login component is not included.", () => {
        expect(wrapper.find(Login).length).toEqual(0);
    }); 
    it("the CourseList component is included", () => {
        expect(wrapper.find(CourseList).length).toEqual(1);
    }); 
}); 