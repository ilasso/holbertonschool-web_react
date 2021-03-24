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
    const notifs = notificationsData.filter(item =>  item.author.id === userID);
    const contexts = notifs.map(item => item.context);
    return contexts;
}

export default getAllNotificationsByUser;
