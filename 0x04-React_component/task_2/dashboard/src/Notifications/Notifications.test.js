/*
    test that Notifications renders without crashing
    verify that Notifications renders three list items
    verify that Notifications renders the text Here is the list of notifications

*/

import { shallow, mount } from 'enzyme';
import React from "react";
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3,  type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }}
  ];

describe("test Notificacions", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        shallow(<Notifications />);
        expect(wrapper.exists());
    });
    it("verify that Notifications renders three list items", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find('ul').children().length).toEqual(3);
    });
    it("verify that Notifications renders the text Here is the list of notifications", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
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

describe('listNotifications is empty', () => {
    it('renders correctly if empty array is passed / prop not specified', () => {
      const wrapper = shallow(<Notifications />);
      const notifs = wrapper.find(NotificationItem);

      expect(notifs.length).toEqual(0);
    });

});

describe('listNotifications is not empty', () => {
    const testNotifs = [
      { id: 0, type: 'default', value: 'New project available' },
      {
        id: 1,
        type: 'urgent',
        html: { __html: '<strong>Project Deadline Approaching</strong>' }
      }
    ];

    const wrapper = shallow(
      <Notifications listNotifications={testNotifs} displayDrawer={true} />
    );
    const notifs = wrapper.find(NotificationItem);

    it('renders correct amount of notifications', () => {
        expect(notifs.length).toEqual(2);
    });
});


describe('message displays properly', () => {
    it('message displays properly', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        const noNewNotifs = wrapper.find('.Notifications p');

        expect(noNewNotifs.length).toEqual(1);
        expect(noNewNotifs.text()).toEqual('No new notifications for now');
  });
});

describe("calling the function markAsRead", () => {
    it('the spy is being called with the right message', () => {
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
        
        jest.restoreAllMocks();
    });
});