import React from 'react';
import "./Notifications.css"
import closeicon from '../assets/close-icon.png'
import { logClickClose, getLatestNotification }  from '../utils/utils'
import { NotificationItem } from './NotificationItem';

export function Notifications(){
    return (
        <div className="Notifications">
            <p>
                Here is the list of notifications
            </p>
            <ul>
                <React.Fragment>
                    <NotificationItem type='default' value='New course available' />
                    <NotificationItem type='urgent' value='New resume available' />
                    <NotificationItem type='urgent' html={{__html:getLatestNotification()}} />
                </React.Fragment>
            </ul>
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
    )

}

export default Notifications;