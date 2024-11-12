<script lang="ts">
	import '$lib/components/Style.css';
	import { Button } from 'flowbite-svelte';
	import Bar from '$lib/components/Bar.svelte';
	import { randoms } from '../Randoms.svelte';

	let mataValues: number[] = [];
	let cryptoValues: number[] = [];
	let windowValues: number[] = [];
	let timeValues: number[] = [];

	function auto_random(range: number) {
		mataValues = randoms.MataRandom(range, false);
		cryptoValues = randoms.CryptoRandom(range, false);
		windowValues = randoms.WindowCryptoRandom(range, false);
		timeValues = randoms.TimeRandom(range, false);
	}
</script>

<Bar />

<div class="center">
	<Button onclick={() => auto_random(9)}>연금 복권 번호 생성</Button>
</div>

<div class="center-vertical">
	<p>로또1 : {mataValues}</p>
	<p>로또2 : {cryptoValues}</p>
	<p>로또3 : {windowValues}</p>
	<p>로또4 : {timeValues}</p>
</div>

