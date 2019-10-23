
<template>
	<Nav {segment}/>
	
	<main>
		<slot></slot>
	</main>
</template>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>