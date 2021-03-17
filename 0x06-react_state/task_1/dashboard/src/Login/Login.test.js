import { shallow } from 'enzyme';
import React from "react";
import Login from './Login';


describe("test Login", () => {
    const wrapper = shallow(<Login />);
    it("renders without crashing", () => {
        shallow(<Login />);
        expect(wrapper.exists());
    });
    it("Verify that the components renders 2 input tags and 2 label tags", () => {
        expect(wrapper.find('label').length).toEqual(2);
        expect(wrapper.find('input').length).toEqual(3);
    });
    it("the submit button is disabled by default", () => {
        const wrapper = shallow(<Login />);
        const submitInput = wrapper.find("form input[type='submit']");
    
        expect(submitInput).toHaveLength(1);
        expect(submitInput.prop("disabled")).toEqual(true);
      });
    
      it("after changing the value of the two inputs, the button is enabled", () => {
        const wrapper = shallow(<Login />);
        const emailInput = wrapper.find("#email");
        const passwordInput = wrapper.find("#pwd");
    
        emailInput.simulate("change", {
          target: { name: "email", value: "123@hotmail.com" },
        });
    
        let submitInput = wrapper.find("form input[type='submit']");
    
        expect(submitInput.prop("disabled")).toEqual(true);
    
        passwordInput.simulate("change", {
          target: { name: "password", value: "123" },
        });
    
        submitInput = wrapper.find("form input[type='submit']");
        expect(submitInput.prop("disabled")).toEqual(false);
      });
}); 
  