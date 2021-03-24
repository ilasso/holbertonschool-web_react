import React, { Component } from 'react';
import PropTypes from 'prop-types';


class BodySection extends Component {
    render() {
        const {title} = this.props;
        return (
            <div className="bodySection">
                <h2>{title}</h2>
                {this.props.children}
            </div>
        );
    }
}

BodySection.propTypes = {
    title: PropTypes.string
};


export default BodySection;
