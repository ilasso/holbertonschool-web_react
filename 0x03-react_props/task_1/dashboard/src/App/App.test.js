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



describe("test App", () => {
    it("renders without crashing", () => {
        shallow(<App />);
    });
    const wrapper = shallow(<App />);
    it("Notifications", () => {
        shallow(<Notifications />);
        
    });
    it("Header", () => {
        shallow(<Header />);
    });
    it("Login", () => {
        shallow(<Login />);
    });
    it("Footer", () => {
        shallow(<Footer />);
    });
}); 
  