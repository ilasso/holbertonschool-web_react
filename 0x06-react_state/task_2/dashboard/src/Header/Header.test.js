import { shallow, mount } from 'enzyme';
import React from "react";
import Header from './Header';
import AppContext, { user, logOut } from "../App/AppContext";
import { StyleSheetTestUtils } from "aphrodite";

describe("test Header", () => {
    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
      });
    
      afterEach(() => {
        wrapper.unmount();
      });
    
      afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
      });
    const wrapper = shallow(
        <AppContext.Provider value={{ user, logOut }}>
            <Header />
        </AppContext.Provider>
    );
    it("renders without crashing", () => {
        shallow(
        <AppContext.Provider value={{ user, logOut }}>
            <Header />
        </AppContext.Provider>
        );

        expect(wrapper.exists());
    });
    it('img exist', () => {
        const wrapper = mount(
        <AppContext.Provider value={{ user, logOut }}>
          <Header />
        </AppContext.Provider>
        );
        expect(wrapper.find('img').length).toEqual(1);
      });
      it('h1 exist', () => {
        const wrapper = mount(
          <AppContext.Provider value={{ user, logOut }}>
            <Header />
          </AppContext.Provider>
        );
        expect(
          wrapper.containsMatchingElement(<h1>School dashboard</h1>)
        ).toBeTruthy();
      });
      it("The logoutSection is created", () => {
        const wrapper = mount(
          <AppContext.Provider
            value={{ user: { ...user, isLoggedIn: true }, logOut }}
          >
            <Header />
          </AppContext.Provider>
        );
    
        expect(wrapper.find("#logoutSection")).toHaveLength(1);
      });

      it("The logoutSection disappears when the logout function is called", () => {
        let logOutSpy = jest.fn();
    
        const wrapper = mount(
          <AppContext.Provider
            value={{
              user: {
                email: "123@hotmail.com",
                password: "123",
                isLoggedIn: true,
              },
              logOut: logOutSpy,
            }}
          >
            <Header />
          </AppContext.Provider>
        );
    
        expect(wrapper.find("#logoutSection")).toHaveLength(1);
        wrapper.find("span").simulate("click");
    
        expect(logOutSpy).toHaveBeenCalled();
    
        jest.restoreAllMocks();
      });
    xit("Verify that the components render img and h1 tags", () => {
        expect(wrapper.find('img').exists()).toEqual(true);
        expect(wrapper.find('h1').exists()).toEqual(true);
    });
}); 
  