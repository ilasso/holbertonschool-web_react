import React, { Component } from 'react';
import { mount } from 'enzyme';

import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging', () => {
  it('console.log called on mount', () => {
    const log = jest.spyOn(global.console, 'log');

    const TestComp = WithLogging(() => <p />);
    const wrapper = mount(<TestComp />);

    expect(log).toHaveBeenCalled();
    expect(log).toHaveBeenCalledWith('Component WithLogging(Component) is mounted on componentDidMount()');

    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith(
      'Component WithLogging(Component) is going to unmount'
    );

    expect(log).toHaveBeenCalledTimes(2);

    jest.restoreAllMocks();
  });

  it('Component Login is mounted', () => {
    const log = jest.spyOn(global.console, 'log');

    const LoginWithLog = WithLogging(Login);
    const wrapper = mount(<LoginWithLog />);

    expect(log).toHaveBeenCalled();
    expect(log).toHaveBeenCalledWith('Component WithLogging(Login) is mounted on componentDidMount()');

    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith(
      'Component WithLogging(Login) is going to unmount'
    );

    expect(log).toHaveBeenCalledTimes(2);

    jest.restoreAllMocks();
    });
  });
  