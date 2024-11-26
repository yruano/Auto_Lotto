export class WebSocketClient {
	private socket: WebSocket | null = null;
	private url: string;
	private reconnectInterval: number;

	constructor(url: string, reconnectInterval: number = 5000) {
		this.url = url;
		this.reconnectInterval = reconnectInterval;
	}

	// 웹소켓 연결
	connect(onMessage: (data: string) => void): void {
		this.socket = new WebSocket(this.url);

		this.socket.onopen = () => {
			console.log('서버와 연결되었습니다.');
		};

		this.socket.onmessage = (event: MessageEvent) => {
			console.log('서버에서 받은 데이터:', event.data);
			onMessage(event.data); // 데이터를 콜백으로 전달
		};

		this.socket.onclose = () => {
			console.log('서버 연결이 종료되었습니다.');
			setTimeout(() => this.connect(onMessage), this.reconnectInterval); // 재연결 시도
		};

		this.socket.onerror = (error: Event) => {
			console.error('웹소켓 오류:', error);
		};
	}

	// 웹소켓 연결 종료
	close(): void {
		if (this.socket) {
			this.socket.close();
			this.socket = null;
		}
	}
}
