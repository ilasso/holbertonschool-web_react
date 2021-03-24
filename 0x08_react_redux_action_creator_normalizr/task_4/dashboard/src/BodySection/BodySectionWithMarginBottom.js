import PropTypes from 'prop-types';
import BodySection from './BodySection';
import React, { Component } from 'react';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends Component {
    render() {
        return (
            <div className="bodySectionWithMargin">
                <BodySection {...this.props}/>
            </div>
        );
    }
}


BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
};


export default BodySectionWithMarginBottom;
