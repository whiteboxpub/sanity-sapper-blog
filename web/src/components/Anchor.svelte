<script>
  export let hash;
	function scrollTo({ target }) {
		let hash = target.getAttribute('href');
    let sectionElement = document.querySelector(hash);
    
		sectionElement.scrollTop += 53;
    sectionElement.scrollIntoView({
      behavior: 'smooth'
		});

		history.pushState({}, null, hash);
	}
</script>

<a class="content-link" href={`#${hash}`} on:click|preventDefault={scrollTo}>
  <slot />
</a>
