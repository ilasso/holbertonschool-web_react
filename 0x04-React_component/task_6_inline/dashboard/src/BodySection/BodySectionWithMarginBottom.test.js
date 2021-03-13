import React from "react";
import {shallow, mount} from 'enzyme';

import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('shallowing the component should render correctly a BodySection', () => {
    it('BodySectionWithMarginBottom', () => {
      const wrapper = mount(
        <BodySectionWithMarginBottom title='test title'>
          <p>test children node</p>
        </BodySectionWithMarginBottom>
      );
      const bodysection = wrapper.find(BodySection);
      const title = bodysection.find('h2');
      const paraph = wrapper.find('p');

      expect(bodysection.length).toEqual(1);
      expect(bodysection.text()).toEqual('test titletest children node');
      expect(paraph.text()).toEqual('test children node');
      expect(title.text()).toEqual('test title');
    });
    it('Make sure that the CSS is correctly applied to your component', () => {
        const wrapper = mount(<BodySectionWithMarginBottom />);
        const cl = wrapper.find('.bodySectionWithMargin');
    
        expect(cl.exists()).toEqual(true);
      });
});
