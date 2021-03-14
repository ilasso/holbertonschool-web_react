import React from 'react';
import CourseListRow from './CourseListRow'
//import './CourseList.css';
import CourseShape from './CourseShape'
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  table: {
    width: '100%'
  },
  'table-header': {
    textAlign: 'center'
  },
  cell: {
    padding: '0.25rem',
    border: '1px solid lightgray'
  }
});


function CourseList({ listCourses }) {
    return (
    <table id='CourseList' className={css(styles.table)} cellSpacing='0'>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow textFirstCell='Course Name' textSecondCell='Credit' isHeader={true} />
      </thead>
      <tbody>
        {(listCourses.length > 0) ? 
              (listCourses.map(({id, name, credit}) => (
                <CourseListRow key={id}  textFirstCell={name} textSecondCell={credit} />
              ))) :
              (
                <tr>
                  <td colSpan='2' clasName={css(styles.cell)}>
                    No course available yet
                  </td>
                </tr>
              )
        }
        </tbody>
    </table>
    );
};


CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

export default CourseList;