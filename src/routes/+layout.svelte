<script>
	import '../app.css';
  import { base } from '$app/paths';
	import '$lib/components/Style.css';
  let { children } = $props();
</script>

<div class="menubar">
  <a href="{base}/"> 로또 </a>
  <a href="{base}/Pension"> 연금 보권 </a>
</div>

{@render children()}
