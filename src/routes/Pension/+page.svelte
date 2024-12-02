<script lang="ts">
	import '$lib/components/Style.css';
	import { randoms } from '$lib/components/Randoms.svelte';
	import { onMount } from 'svelte';
	import { WebSocketClient } from '$lib/components/Server.svelte';

	let mataValues: number[] = [];
	let cryptoValues: number[] = [];
	let windowValues: number[] = [];
	let lcgValues: number[] = [];
	const colors = ['#FFD700', '#FF6347', '#7FFFD4', '#87CEFA', '#FF69B4', '#98FB98'];

	let webSocketClient: WebSocketClient | null = null; // 초기값 설정

	function auto_random(range: number, web: WebSocketClient) {
		mataValues = randoms.MataRandom(range, 0, false);
		cryptoValues = randoms.CryptoRandom(range, 0, false);
		windowValues = randoms.WindowCryptoRandom(range, 0, false);
    web.requestNumbers();
    lcgValues = web.numbers;
	}

	function getRandomColor(index: number) {
		return colors[index % colors.length];
	}

	onMount(() => {
		webSocketClient = new WebSocketClient("ws://localhost:8080/rg");
		webSocketClient.connectWebSocket();

		// 컴포넌트 파괴 시 연결 종료
		return () => {
			if (webSocketClient) {
				webSocketClient.close();
				webSocketClient = null; // 연결 종료 후 null로 초기화
			}
		};
	});
</script>

<div class="center">
	<button class="button" onclick={() => auto_random(9, webSocketClient!)}>연금 복권 번호 생성</button>
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
