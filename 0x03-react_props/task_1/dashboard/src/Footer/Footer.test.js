import { shallow } from 'enzyme';
import React from "react";
import Footer from './Footer';

describe("test Footer", () => {
    it("renders without crashing", () => {
        shallow(<Footer />);
    });
    const wrapper = shallow(<Footer />);
    it('Verify that the components at the very least render the text “Copyright"', () => {
        expect(wrapper.text().substring(0,9)).toBe('Copyright');

    });
}); 