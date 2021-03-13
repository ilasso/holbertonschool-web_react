import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


function CourseListRow({isHeader, textFirstCell, textSecondCell }) {
    return (
        <tr className={css(styles.blue)}>{
           (isHeader) ? (
                (textSecondCell === null) ?
                    (<th colSpan='2'>{textFirstCell}</th>) :
                        (<React.Fragment>
                            <th className={css(styles.blue)} >{textFirstCell}</th>
                            <th className={css(styles.blue)}>{textSecondCell}</th>
                        </React.Fragment> 
                        ) ):
                                (<React.Fragment>
                                    <td className={css(styles.red)}>{textFirstCell}</td>
                                    <td className={css(styles.red)}>{textSecondCell}</td>
                                </React.Fragment> )
        }       
        </tr>
    );
};

const styles = StyleSheet.create({
    red: {
        backgroundColor: '#f5f5f5ab'
    },

    blue: {
        backgroundColor: '#deb5b545'
    }
});

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
  
  CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
  };


export default CourseListRow;