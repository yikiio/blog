<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div id="app" tabindex="-1">
	<Header />
	<slot />
	<Footer />
</div>
