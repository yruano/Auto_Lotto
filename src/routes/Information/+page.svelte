<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let data: string = '<p>데이터 로드 중...</p>'; // 초기 HTML 데이터
	let socket: WebSocket | null = null;

	// 웹 소켓 연결 함수
	function connectWebSocket() {
		socket = new WebSocket('ws://localhost:8080/ws');

		socket.onopen = () => {
			console.log('서버와 연결되었습니다.');
		};

		socket.onmessage = (event: MessageEvent) => {
			console.log('서버에서 받은 데이터:', event.data); // 서버에서 받은 데이터 확인
			data = event.data; // 서버로부터 받은 HTML 데이터를 업데이트
		};

		socket.onclose = () => {
			console.log('서버 연결이 종료되었습니다.');
			// 필요시 재연결 로직 추가 가능
			setTimeout(connectWebSocket, 5000); // 5초 후 재연결 시도
		};

		socket.onerror = (error: Event) => {
			console.error('웹소켓 오류:', error);
		};
	}

	// 컴포넌트가 로드될 때 웹 소켓 연결
	onMount(() => {
		connectWebSocket();

		return () => {
			if (socket) {
				socket.close();
			}
		};
	});

	// 컴포넌트가 파괴될 때 연결 종료
	onDestroy(() => {
		if (socket) {
			socket.close();
		}
	});
</script>

<div class="data-container">
	<!-- HTML 콘텐츠를 안전하게 렌더링 -->
	<div>{@html data}</div>
</div>

<style>
	.data-container {
		padding: 20px;
		font-size: 18px;
		background: #f4f4f4;
		border-radius: 8px;
		max-width: 400px;
		margin: 20px auto;
		text-align: center;
	}

	.hidden {
		display: none;
	}
</style>
