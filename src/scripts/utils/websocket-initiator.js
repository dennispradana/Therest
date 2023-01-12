import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log(message.data);
    NotificationHelper.sendNotification({
      title: 'Notif from TheRest',
      options: {
        body: message.data,
        icon: 'icons/icon-192x192.png',
        image: 'https://images.unsplash.com/photo-1672501713478-cc30dd527522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        vibrate: [200, 100, 200],
      },
    });
  },
};

export default WebSocketInitiator;
