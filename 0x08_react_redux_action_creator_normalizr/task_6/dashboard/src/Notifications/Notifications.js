import "./Notifications.css"
import closeicon from '../assets/close-icon.png'
import { logClickClose, getLatestNotification }  from '../utils/utils'
import NotificationItem from './NotificationItem';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


class Notifications extends PureComponent {
    constructor(props, context){
        super(props, context);
        }
    
    render() {
        const { displayDrawer, listNotifications,
            handleDisplayDrawer, handleHideDrawer, markNotificationAsRead} = this.props;
            
        return (
        <div className ="Notify">
            <div className='menuItem'  onClick={handleDisplayDrawer} data-test-id="notificationBtn" >Your Notifications</div>
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
                                <NotificationItem key={id} id={id} type={type} value={value} html={html} markAsRead={markNotificationAsRead} />
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
                        visibility:"hidden",
                        }
                    }
                    aria-label="Close"
                    onClick={handleHideDrawer}
                >
                    <img alt="close" src={closeicon}
                        style={
                            {
                                height:"10px",
                                width:"10px",
                                visibility:"visible"
                            }
                        }
                        data-test-id="closeNotificationBtn"
                        ></img>
                </button>
            </div>
            )}
        </div>
        );

    }
}



Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead : PropTypes.func
  };
  
Notifications.defaultProps = {
displayDrawer: false,
listNotifications: [],
handleDisplayDrawer: () => {},
handleHideDrawer:() => {},
markNotificationAsRead: () => {},
};



export default Notifications;