import React from 'react';
import PropTypes from 'prop-types';



function CourseListRow({isHeader, textFirstCell, textSecondCell }) {
    return (
        <tr style={linestyleheader}>{
           (isHeader) ? (
                (textSecondCell === null) ?
                    (<th colSpan='2'>{textFirstCell}</th>) :
                        (<React.Fragment>
                            <th style={linestyleheader} >{textFirstCell}</th>
                            <th style={linestyleheader}>{textSecondCell}</th>
                        </React.Fragment> 
                        ) ):
                                (<React.Fragment>
                                    <td style={linestylerow}>{textFirstCell}</td>
                                    <td style={linestylerow}>{textSecondCell}</td>
                                </React.Fragment> )
        }       
        </tr>
    );
};

const linestylerow = {
    backgroundColor: '#f5f5f5ab',
    padding: '0.25rem',
    border: '1px solid lightgray'
}
const linestyleheader = { 
    backgroundColor: '#deb5b545', 
    padding: '0.25rem',
    border: '1px solid lightgray'
}



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