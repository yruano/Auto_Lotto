<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { WebSocketClient } from '$lib/components/Server.svelte';

	let data: string = '<p>데이터 로드 중...</p>';
	let webSocketClient: WebSocketClient | null = null; // 초기값 설정

	onMount(() => {
		// WebSocketClient 생성
		webSocketClient = new WebSocketClient('ws://localhost:8080/ws');

		// 연결 시작
		webSocketClient.connect((message: string) => {
			data = message;
		});

		// 컴포넌트 파괴 시 연결 종료
		return () => {
			if (webSocketClient) {
				webSocketClient.close();
				webSocketClient = null; // 연결 종료 후 null로 초기화
			}
		};
	});

	onDestroy(() => {
		if (webSocketClient) {
			webSocketClient.close();
			webSocketClient = null; // 연결 종료 후 null로 초기화
		}
	});
</script>

<main>
	{@html data}
</main>

