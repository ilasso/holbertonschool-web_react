import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NotificationItem extends Component {
    render() {
        const { id, html,type, value, markAsRead } = this.props;
        //console.log(id,html, type,value, markAsRead);
        if (html === undefined)
            return (
                <li data-priority={type} onClick={() => markAsRead(id) }>
                    {value}
                </li>
            );
        return (
                <li data-priority={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
            );
    }
}



    NotificationItem.propTypes = {
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.string,
        html:PropTypes.shape({'_html':PropTypes.string}),
        markAsRead: PropTypes.func
        };

    
    NotificationItem.defaultProps = {
        type: "default",
        markAsRead: () => {}
    };    

export default NotificationItem;

