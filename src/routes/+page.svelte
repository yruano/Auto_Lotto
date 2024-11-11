<script lang="ts">
  import { random } from "../routes/random.svelte";
  let mataValues: number[] = [];
  let cryptoValues: number[] = [];
  let windowValues: number[] = [];
  let timeValues: number[] = [];
  let fisherYatesValues: number[] = [];

  function auto_random(range: number) {
    mataValues = random.MataRandom(range);
    cryptoValues = random.CryptoRandom(range);
    windowValues = random.WindowCryptoRandom(range);
    timeValues = random.TimeRandom(range);
    fisherYatesValues = random.FisherYatesRandom(range);
  }
</script>

<h1>auto Lotto</h1>



<button on:click={() => auto_random(45)}>랜덤 번호 로또 번호 생성</button>

<p>로또1 : {mataValues}</p>
<p>로또2 : {cryptoValues}</p>
<p>로또3 : {windowValues}</p>
<p>로또4 : {timeValues}</p>
<p>로또5 : {fisherYatesValues}</p>
