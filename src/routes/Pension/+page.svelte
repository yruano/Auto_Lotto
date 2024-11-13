<script lang="ts">
  import '$lib/components/Style.css';
	import { Button } from 'flowbite-svelte';
	import { randoms } from '$lib/components/Randoms.svelte';

	let mataValues: number[] = [];
	let cryptoValues: number[] = [];
	let windowValues: number[] = [];

	function auto_random(range: number) {
		mataValues = randoms.MataRandom(range, false);
		cryptoValues = randoms.CryptoRandom(range, false);
		windowValues = randoms.WindowCryptoRandom(range, false);
	}
</script>

<div class="center">
	<Button onclick={() => auto_random(9)}>연금 복권 번호 생성</Button>
</div>

<div class="pension-vertical">
	<p class="menutext">번호1 : {mataValues}</p>
	<p class="menutext">번호2 : {cryptoValues}</p>
	<p class="menutext">번호3 : {windowValues}</p>
</div>
