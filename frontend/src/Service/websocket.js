import { Client } from "@stomp/stompjs";

let stompClient = null;

export const connectWebSocket = (onMessageReceived) => {
  stompClient = new Client({
    brokerURL: "wss://space-weather-monitoring-system-2.onrender.com/ws",

    reconnectDelay: 5000,

    onConnect: () => {
      console.log("Connected to WebSocket");

      stompClient.subscribe("/topic/alerts", (message) => {
        const data = JSON.parse(message.body);

        onMessageReceived(data);
      });
    },

    onStompError: (frame) => {
      console.error("STOMP Error:", frame);
    },
  });

  stompClient.activate();
};

export const disconnectWebSocket = () => {
  if (stompClient) {
    stompClient.deactivate();
  }
};
