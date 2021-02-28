import "./Notifications.css"
import closeicon from '../assets/close-icon.png'
import { logClickClose, getLatestNotification }  from '../utils/utils'
import { NotificationItem } from './NotificationItem';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Notifications extends Component {
    render() {
        const { displayDrawer } = this.props;
        const { listNotifications } = this.props;
        return (
        <div className ="Notify">
            <div className='menuItem'>Your Notifications</div>
        {displayDrawer && (
            <div className="Notifications">
                {listNotifications.length ? (
                <React.Fragment>
                    <p>
                        Here is the list of notifications
                    </p>
                    <ul>
                        {
                            listNotifications.map(({id, type, value, html}) => (
                                <NotificationItem key={id} type={type} value={value} html={html} />
                            ))
                        }
                    </ul>
                </React.Fragment>
                ) : (
                    <p>No new notifications for now</p>  
                )}
                <button 
                    style={
                        {position:"absolute",
                        top:12,
                        right:12,
                        visibility:"hidden"
                        }
                    }
                    aria-label="Close"
                    onClick={logClickClose}
                >
                    <img alt="close" src={closeicon}
                        style={
                            {
                                height:"10px",
                                width:"10px",
                                visibility:"visible"
                            }
                        }></img>
                </button>
            </div>
            )}
        </div>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.array
  };
  
Notifications.defaultProps = {
displayDrawer: false,
listNotifications: []
};

export default Notifications;