import { shallow, mount } from 'enzyme';
import React from "react";
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';

const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3,  type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }}
  ];

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
  
describe("pass a spy as the markAsRead property", () => {
    it('when simulating a click on the component, the spy is called with the right ID argument', () => {
        // spy consolole.log
        const log = jest.spyOn(global.console, 'log');
        const notcomp = mount(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const instance = notcomp.instance();
        
        // spy markAsRead method
        const markAsRead = jest.spyOn(instance, 'markAsRead');
        const NotifyIt = shallow(<NotificationItem id={2} type={'default'} value={'New course available'} markAsRead={markAsRead} />);
        
        // simulate click on notification id=..             
        const wrapper= NotifyIt.find('li').simulate('click');
        
        // check console.log has been excecuted when click and log correct message
        expect(log).toHaveBeenCalled();
        expect(log).toHaveBeenCalledWith('Notification 2 has been marked as read');

        //check markAsRead method has been excecute whe click
        expect(markAsRead).toHaveBeenCalled();

        // check markAsRead method hasa been called widht id=2(in this case)
        expect(markAsRead).toHaveBeenCalledWith(2);
        
        jest.restoreAllMocks();
    });
});