<script>
	import Header from '../components/Header.svelte';
import Footer from '../components/Footer.svelte';
</script>

<style>
	.body-wrapper {
		margin: 0 auto;
		position: relative;
		display: block;
		overflow: hidden;
	}
	@media screen and (min-width: 960px) {
		.body-wrapper {
			padding-top: 10em;
		}
	}
	.upper-wrapper {
		position: static;
	}
</style>

<Header/>

<main class="body-wrapper grid-w-gutters">
	<div class="upper-wrapper clearfix column col-12-across">
		<slot></slot>
	</div>
</main>

<Footer/>