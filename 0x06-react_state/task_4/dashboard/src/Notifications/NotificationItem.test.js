import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow, mount, unmount  } from 'enzyme';
import Notifications from './Notifications'
import { StyleSheetTestUtils } from "aphrodite";


describe("NotificationItem.test.js", () => {
  let wrapper;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('correct component rendering', () => {
    wrapper = shallow(<NotificationItem id={1}/>);
  });

  it('correct component rendering - case1 - value, type', () => {
    const type = "default";
    const value = "test";
    const html = undefined;
    wrapper = shallow(<NotificationItem id={1} type={ type } value={ value }/>);
    const li = wrapper.find('li');
    expect(li.exists()).toEqual(true);
    expect(li.props()['data-priority']).toEqual("default");
    expect(li.prop('dangerouslySetInnerHTML')).toEqual(html);
    expect(li.text()).toEqual(value);
  });

  it('correct component rendering - case2 - html', () => {
    const html = '<u>test</u>';
    wrapper = shallow(<NotificationItem id={1} html={{ __html: '<u>test</u>' }}/>);
    const li = wrapper.find('li');
    expect(li.exists()).toEqual(true);
    expect(li.html()).toContain(`${ html }`);
  });
});

describe("NotificationItem.test.js - events", () => {
  let wrapper;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

});
