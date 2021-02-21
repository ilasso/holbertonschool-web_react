/*
    test that Notifications renders without crashing
    verify that Notifications renders three list items
    verify that Notifications renders the text Here is the list of notifications

*/

import { shallow } from 'enzyme';
import React from "react";
import Notifications from './Notifications';


describe("test Notificacions", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        shallow(<Notifications />);
        expect(wrapper.exists());
    });
    it("verify that Notifications renders three list items", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('ul').children().length).toEqual(3);
    });
    it("verify that Notifications renders the text Here is the list of notifications", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toEqual(true);
    });


}); 
  
describe("displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    it("check that the menu item is being displayed when displayDrawer is false", () => {
        const menuItem = wrapper.find('.menuItem');
        expect(menuItem.length).toEqual(1);
        expect(wrapper.exists());
    });

    it("check that the div.Notifications is not being displayed when displayDrawer is false", () => {
        expect(wrapper.find('div.Notifications').length).toEqual(0);
        
    });
}); 

describe("displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    it("check that the menu item is being displayed when displayDrawer is true", () => {
        const menuItem = wrapper.find('.menuItem');
        expect(menuItem.length).toEqual(1);
        expect(wrapper.exists());
    });

    it("check that the div.Notifications is being displayed when displayDrawer is true", () => {
        expect(wrapper.find('div.Notifications').length).toEqual(1);
        
    });
}); 
