import { shallow } from 'enzyme';
import React from "react";
import Header from './Header';

describe("test Header", () => {
    const wrapper = shallow(<Header />);
    it("renders without crashing", () => {
        shallow(<Header />);
        expect(wrapper.exists());
    });
    it("Verify that the components render img and h1 tags", () => {
        expect(wrapper.find('img').exists()).toEqual(true);
        expect(wrapper.find('h1').exists()).toEqual(true);
    });
}); 
  