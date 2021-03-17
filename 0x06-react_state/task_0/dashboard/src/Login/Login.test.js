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
        expect(wrapper.find('input').length).toEqual(2);
    });
}); 
  