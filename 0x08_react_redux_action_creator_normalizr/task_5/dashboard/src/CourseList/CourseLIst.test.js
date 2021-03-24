import React from 'react';
import { shallow } from 'enzyme';

import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

describe('CourseList', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const rows = wrapper.find(CourseListRow);

    expect(rows.length).toEqual(5);
  });
});

describe('empty array', () => {
  it('empty array', () => {
    const wrapper = shallow(<CourseList />);

    const Course = wrapper.find('td');

      expect(Course.length).toEqual(1);
      expect(Course.text()).toEqual('No course available yet');
});
});