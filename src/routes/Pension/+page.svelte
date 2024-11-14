<script lang="ts">
	import '$lib/components/Style.css';
	import { randoms } from '$lib/components/Randoms.svelte';

	let mataValues: number[] = [];
	let cryptoValues: number[] = [];
	let windowValues: number[] = [];
	const colors = ['#FFD700', '#FF6347', '#7FFFD4', '#87CEFA', '#FF69B4', '#98FB98'];

	function auto_random(range: number) {
		mataValues = randoms.MataRandom(range, 0, false);
		cryptoValues = randoms.CryptoRandom(range, 0, false);
		windowValues = randoms.WindowCryptoRandom(range, 0, false);
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
		{#each windowValues as num, i}
			<span class="number-circle" style="background-color: {getRandomColor(i)}">{num}</span>
		{/each}
	</p>
</div>
