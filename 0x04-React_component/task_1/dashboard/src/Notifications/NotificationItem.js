import React from 'react';
import PropTypes from 'prop-types';

export function NotificationItem({type, html, value}){
        if (html === undefined)
            return (
                <li data-priority={type}>
                    {value}
                </li>
            );
        return (
                <li data-priority={type} dangerouslySetInnerHTML={html}></li>
            );
    };


    NotificationItem.propTypes = {
        type: PropTypes.string.isRequired,
        value: PropTypes.string,
        html:PropTypes.shape({'_html':PropTypes.string})
        };

    
    NotificationItem.defaultProps = {
        type: "default"
    };    

export default NotificationItem;

