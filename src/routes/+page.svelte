<script lang="ts">
	import '$lib/components/Style.css';
	import { randoms } from '$lib/components/Randoms.svelte';

	let mataValues: number[] = [];
	let cryptoValues: number[] = [];
	let windowValues: number[] = [];
	let timeValues: number[] = [];
	let fisherYatesValues: number[] = [];
	const colors = ['#FFD700', '#FF6347', '#7FFFD4', '#87CEFA', '#FF69B4', '#98FB98'];

	function auto_random(range: number) {
		mataValues = randoms.MataRandom(range, 1, true);
		cryptoValues = randoms.CryptoRandom(range, 1, true);
		windowValues = randoms.WindowCryptoRandom(range, 1, true);
		timeValues = randoms.TimeRandom(range);
		fisherYatesValues = randoms.FisherYatesRandom(range);
	}

	function getRandomColor(index: number) {
		return colors[index % colors.length];
	}
</script>

<div class="center">
	<button class="button" onclick={() => auto_random(45)}>로또 번호 생성</button>
</div>

<div class="lotto-vertical">
	<p class="menutext">로또1:
		{#each mataValues as num, i}
			<span class="number-circle" style="background-color: {getRandomColor(i)}">{num}</span>
		{/each}
	</p>
	<p class="menutext">로또2:
		{#each cryptoValues as num, i}
			<span class="number-circle" style="background-color: {getRandomColor(i)}">{num}</span>
		{/each}
	</p>
	<p class="menutext">로또3:
		{#each windowValues as num, i}
			<span class="number-circle" style="background-color: {getRandomColor(i)}">{num}</span>
		{/each}
	</p>
	<p class="menutext">로또4:
		{#each timeValues as num, i}
			<span class="number-circle" style="background-color: {getRandomColor(i)}">{num}</span>
		{/each}
	</p>
	<p class="menutext">로또5:
		{#each fisherYatesValues as num, i}
			<span class="number-circle" style="background-color: {getRandomColor(i)}">{num}</span>
		{/each}
	</p>
</div>
