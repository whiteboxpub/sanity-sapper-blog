<script context="module">
	import client from '../sanityClient'
	export async function preload() {
		let customStyles = [
			'title'
		];
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
			let {navItems : {navigation}, sections,...rest} = data;
			console.log({...sections})
			sections.map(section => {
				return section.body.map(block => {
					if(customStyles.includes(block.style)) {
						block._type = block.style
					}
					return block;
				});
			})
			return {navItems: navigation.items, sections,...rest};
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
	export let segment;

  import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	
  const pageData$ = writable(pageData)
  const segment$ = writable(segment)
  $: $pageData$ = pageData
  $: $segment$ = segment

  setContext('pageData', pageData$)
  setContext('segment', segment$)
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