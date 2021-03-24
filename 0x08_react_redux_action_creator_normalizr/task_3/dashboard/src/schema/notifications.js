import notificationsData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");

const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid'
  }
);

const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

export const normalizedNotifications = normalize(notificationsData, new schema.Array(notification));



export const getAllNotificationsByUser = (userID) => {
    const {notifications, messages } = normalizedNotifications.entities;
    const userNotificactions = [];
    for ( let key in notifications) {
      if (notifications[key].author == userID)
        userNotificactions.push(messages[notifications[key].context]);
    }
    return userNotificactions;
}

export default getAllNotificationsByUser;
