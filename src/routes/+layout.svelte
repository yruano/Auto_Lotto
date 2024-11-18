<script>
	import '../app.css';
  import { base } from '$app/paths';
	import '$lib/components/Style.css';
  let { children } = $props();
</script>

<div class="menubar">
  <a href="https://dhlottery.co.kr/common.do?method=main" target="_blank" rel="noopener noreferrer"> 구매 </a>
  <a href="{base}/"> 로또 </a>
  <a href="{base}/Pension"> 연금 보권 </a>
</div>

{@render children()}
