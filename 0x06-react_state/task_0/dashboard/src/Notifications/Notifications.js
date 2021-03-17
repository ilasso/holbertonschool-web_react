import "./Notifications.css"
import closeicon from '../assets/close-icon.png'
import { logClickClose, getLatestNotification }  from '../utils/utils'
import NotificationItem from './NotificationItem';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


class Notifications extends Component {
    constructor(props, context){
        super(props, context);
        this.markAsRead = this.markAsRead.bind(this);
      }
    
    render() {
        const { displayDrawer, listNotifications,
            handleDisplayDrawer, handleHideDrawer} = this.props;
            
        return (
        <div className ="Notify">
            <div className='menuItem'  onClick={handleDisplayDrawer} >Your Notifications</div>
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
                                <NotificationItem key={id} id={id} type={type} value={value} html={html} markAsRead={this.markAsRead} />
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
                        }></img>
                </button>
            </div>
            )}
        </div>
        );

    }
    
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.listNotifications.length > this.props.listNotifications.length ||
            nextProps.displayDrawer!== this.props.displayDrawer ){
            console.log('shouldComponentUpdate return true then rerender');
            return true; // rerender component
        }
        
        console.log('shouldComponentUpdate return false then no rerender');
        // doesn't rerender component
        return false;
      }
    
}



Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func
  };
  
Notifications.defaultProps = {
displayDrawer: false,
listNotifications: [],
handleDisplayDrawer: () => {},
handleHideDrawer:() => {},
};



export default Notifications;