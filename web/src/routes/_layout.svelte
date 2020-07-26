<script context="module">
	import client from '../sanityClient'
	export async function preload() {
		let query = `{
			"navItems": *[_type == "siteSettings"]{navigation}[0],
			"events": *[_type == "events"],
			"locations": *[_type == "locations"],
			"sections": *[_type == "section"]{
				...,
				body[]{
					...,
					markDefs[]{
						...,
						_type == "internalLink" => {
							"hash": @.reference->hash
						}
					}
				}
			}
		}`
		const results = await client
		.fetch(query)
		.then((data) => {
			let {navItems : {navigation}, ...rest} = data;
			return {navItems: navigation.items, ...rest};
		})
		.catch(err => console.warn(500, err))
		let {navItems, ...pageData} = results;
		return {navItems, pageData};
	};
</script>

<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	export let navItems;
	export let pageData;

  import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	
  const pageData$ = writable(pageData)

  // this updates the store's value when `segment` changes
  // syntactic sugar for: segment$.set(segment)
  $: $pageData$ = pageData

  setContext('pageData', pageData$)
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
	:global(.upper-wrapper) {
		position: static;
	}
</style>

<Header {navItems}/>

<main class="body-wrapper grid-w-gutters">
	<slot {pageData}></slot>
</main>

<Footer/>