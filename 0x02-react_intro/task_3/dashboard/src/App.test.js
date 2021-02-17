/*

    test that App renders without crashing
    verify that App renders a div with the class App-header
    verify that App renders a div with the class App-body
    verify that App renders a div with the class App-footer
*/
import { shallow } from 'enzyme';
import App from './App';

describe("test App", () => {
    it("renders without crashing", () => {
        shallow(<App />);
    });
    const wrapper = shallow(<App />);
    it("verify that App renders a div with the class App-header", () => {
        expect(wrapper.find('div.App-header').exists()).toEqual(true);
    });
    it("verify that App renders a div with the class App-body", () => {
        expect(wrapper.find('div.App-body').exists()).toEqual(true);
    });
    it("verify that App renders a div with the class App-footer", () => {
        expect(wrapper.find('div.App-footer').exists()).toEqual(true);
    });
}); 
  