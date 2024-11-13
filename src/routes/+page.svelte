<script lang="ts">
	import '$lib/components/Style.css';
	import { Button } from 'flowbite-svelte';
	import { randoms } from '$lib/components/Randoms.svelte';

	let mataValues: number[] = [];
	let cryptoValues: number[] = [];
	let windowValues: number[] = [];
	let timeValues: number[] = [];
	let fisherYatesValues: number[] = [];

	function auto_random(range: number) {
		mataValues = randoms.MataRandom(range, true);
		cryptoValues = randoms.CryptoRandom(range, true);
		windowValues = randoms.WindowCryptoRandom(range, true);
		timeValues = randoms.TimeRandom(range, true);
		fisherYatesValues = randoms.FisherYatesRandom(range);
	}
</script>

<div class="center">
	<Button onclick={() => auto_random(45)}>로또 번호 생성</Button>
</div>

<div class="lotto-vertical">
	<p class="menutext">로또1 : {mataValues}</p>
	<p class="menutext">로또2 : {cryptoValues}</p>
	<p class="menutext">로또3 : {windowValues}</p>
	<p class="menutext">로또4 : {timeValues}</p>
	<p class="menutext">로또5 : {fisherYatesValues}</p>
</div>
