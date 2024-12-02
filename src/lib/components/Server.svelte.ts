export class WebSocketClient {
  private socket: WebSocket | null = null;
  private url: string;
  numbers: number[] = [];

  constructor(url: string) {
    this.url = url;
  }

  // Initialize WebSocket connection
  connectWebSocket() {
    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      console.log("WebSocket connected");
    };

    this.socket.onmessage = (event: MessageEvent) => {
      // Parse the received data and update the numbers array
      this.numbers = JSON.parse(event.data);
    };

    this.socket.onerror = (error: Event) => {
      console.error("WebSocket error:", error);
    };

    this.socket.onclose = () => {
      console.log("WebSocket disconnected");
    };
  }

  // Send a message to the server
  requestNumbers() {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send("Request Numbers");
    } else {
      console.error("WebSocket is not connected");
    }
  }

  // Close the WebSocket connection
  close(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}
