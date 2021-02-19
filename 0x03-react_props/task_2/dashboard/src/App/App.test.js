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
}); 
  