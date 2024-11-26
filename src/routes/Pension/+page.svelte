<script lang="ts">
	import '$lib/components/Style.css';
	import { randoms } from '$lib/components/Randoms.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { WebSocketClient } from '$lib/components/Server.svelte';

	let mataValues: number[] = [];
	let cryptoValues: number[] = [];
	let windowValues: number[] = [];
	let lcgValues: number[] = [];
	const colors = ['#FFD700', '#FF6347', '#7FFFD4', '#87CEFA', '#FF69B4', '#98FB98'];

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

	function auto_random(range: number) {
		mataValues = randoms.MataRandom(range, 0, false);
		cryptoValues = randoms.CryptoRandom(range, 0, false);
		windowValues = randoms.WindowCryptoRandom(range, 0, false);
		// WebSocket에서 받은 데이터를 처리
		lcgValues = data
			.replace(/[^\d\s]/g, '') // 대괄호 및 기타 특수문자 제거
			.split(' ') // 공백으로 분리
			.map((num) => num.trim()) // 앞뒤 공백 제거
			.filter(Boolean) // 빈 값 제거
			.map(Number) // 숫자로 변환
			.filter((num) => !isNaN(num)); // NaN 값 제외
	}

	function getRandomColor(index: number) {
		return colors[index % colors.length];
	}
</script>

<div class="center">
	<button class="button" onclick={() => auto_random(9)}>연금 복권 번호 생성</button>
</div>

<div class="pension-vertical">
	<p class="menutext">
		연금 복권1:
		{#each mataValues as num, i}
			<span class="number-circle" style="background-color: {getRandomColor(i)}">{num}</span>
		{/each}
	</p>
	<p class="menutext">
		연금 복권2:
		{#each cryptoValues as num, i}
			<span class="number-circle" style="background-color: {getRandomColor(i)}">{num}</span>
		{/each}
	</p>
	<p class="menutext">
		연금 복권3:
		{#each windowValues as num, i}
			<span class="number-circle" style="background-color: {getRandomColor(i)}">{num}</span>
		{/each}
	</p>
	<p class="menutext">
		연금 복권4:
		{#each lcgValues as num, i}
			<span class="number-circle" style="background-color: {getRandomColor(i)}">{num}</span>
		{/each}
	</p>
</div>
