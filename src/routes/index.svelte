<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<template>
	<h1>Great success!</h1>
	
	<figure>
		<img alt='Borat' src='great-success.png'>
		<figcaption>HIGH FIVE!</figcaption>
	</figure>
	
	<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
</template>

<style lang="scss">
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;

		@media (min-width: 480px) {
			font-size: 4em;
		}
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}
</style>
