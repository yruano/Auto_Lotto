<script>
	import '../app.css';
	import '$lib/components/Style.css';
	import Bar from '$lib/components/Bar.svelte';
  let { children } = $props();
</script>

<Bar/>

{@render children()}
