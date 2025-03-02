import axios from "axios";

export function useApiCall() {
  const fetchData = async (
    method: string,
    endpoint: string,
    header: any,
    body: any
  ) => {
    const response = await axios.get(endpoint);
  };

  const wsConnect = () => {
    const socket = new WebSocket("ws://localhost:4001");

    socket.onopen = function (event) {
      console.log("connected to the WebSocket server.", "server");
    };

    socket.onmessage = function (event) {};

    const sendMessage = () => {
      socket.send("");
    };
  };
}
