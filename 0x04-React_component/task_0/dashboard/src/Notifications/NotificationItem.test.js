import { shallow } from 'enzyme';
import React from "react";
import NotificationItem from './NotificationItem';


describe("test NotificationItem", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<NotificationItem />);
        shallow(<NotificationItem />);
        expect(wrapper.exists());
    });
    
    it("renders with correct type and value", () => {
        const wrapper = shallow(<NotificationItem type='default' value='test'/>);
        expect(wrapper.containsMatchingElement(<li data-priority="default">test</li>)).toEqual(true);
    });
    it("renders with correct html", () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.html()).toEqual('<li data-priority=\"default\"><u>test</u></li>');
    });
   
}); 
  