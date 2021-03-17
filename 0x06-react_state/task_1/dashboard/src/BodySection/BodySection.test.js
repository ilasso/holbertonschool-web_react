import React from "react";
import BodySection from './BodySection';
import {shallow, mount} from 'enzyme';

describe('BodySection', () => {
    it('should properly render children', () => {
      const wrapper = shallow(
        <BodySection title={"test title"} >
            <p>test children node</p>
        </BodySection>
        );
      
        const title = wrapper.find('h2');
        const text = wrapper.find('p');
        // check title is rendered
        expect(title.length).toEqual(1);
        // check correct title text
        expect(title.text()).toEqual('test title');

        //check paraph is rendered
        expect(text.length).toEqual(1);
        //check correct paraph text
        expect(text.text()).toEqual('test children node');      
    });
});
