<script lang="ts">
	import Header from '$components/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="container mx-auto p-4">
	<slot />
</main>

