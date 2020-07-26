<!-- <script context="module">
	import client from '../sanityClient'
	export async function preload() {
		const navItems = await client
		.fetch('*[_type == "siteSettings"]{navigation}[0]')
		.then(({navigation}) => {
			console.log({navigation});
			return navigation.items;
		})
		.catch(err => error(500, err))
		console.log({navItems});
		return {navItems};
	};
</script> -->
<script>
	import Nav from '../components/Nav.svelte';
  import Hamburger from './Hamburger.svelte';
  import SunLogo from './SunLogo.svelte';
  export let navItems;
  export let posY;
  export let headerHeight;
</script>

<style>
  header {
    overflow: auto;
    overflow: visible;
    -webkit-transition: .25s;
    -moz-transition: .25s;
    transition: .25s;
    background-color: #fff;
    width: 100%;
    z-index: 110;
    position: relative;
    position: fixed;
    top: 0;
  }
  header.scroll {
		-webkit-transform: translate3d(0,-35px,0);
		-moz-transform: translate3d(0,-35px,0);
		transform: translate3d(0,-35px,0);
  }
  header:after {
    content: ' ';
    width: 100%;
    height: 3px;
    background-color: #eab921;
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    z-index: 1000;
  }
  .header-wrapper {
    position: static;
    width: 90%;
  }
  @media screen and (min-width: 960px) {
    header.scroll {
      -webkit-transform: translate3d(0,-35px,0);
      -moz-transform: translate3d(0,-35px,0);
      transform: translate3d(0,-35px,0);
    }
    header:after {
      width: 70%;
    }
  }

  h1.site-title {
    font-family: "Sweet Pea";
    font-size: 25px;    
    display: inline-block;
    position: relative;
    padding-left: 2.7em;
  }

  .site-title:before {
    content: ' ';
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: -10px;
    bottom: 4px;
    background-image: url('/assets/images/finch.png');
    background-size: 100%;
    left: 157px;
    right: 3px;
    z-index: 220;
  }
  @media screen and (min-width: 960px) {
    h1.site-title {
      display: inline-block;
      vertical-align: top;
      text-align: left;
      font-size: 42px;
      line-height: 1em;
      padding: 0;
      margin: .5em auto 0;
      z-index: 10;
      transition: transform .125s ease-out;
      transform-origin: bottom;
    }
    .site-title:before {
      width: 40px;
      height: 40px;
      bottom: -10px;
      left: 157px;
    }
    header.scroll h1.site-title {
      margin: 0 auto;
      -webkit-transform: scale(0.7) translate3d(0,50px,0);
      -moz-transform: scale(0.7) translate3d(0,50px,0);
      transform: scale(0.7) translate3d(0,50px,0);
    }
  }
</style>
<svelte:window bind:scrollY={posY}/>
<header bind:clientHeight={headerHeight} class={posY >= headerHeight && "scroll"} data-embed="Header">
  <SunLogo/>
  <div class="header-wrapper grid" data-embed="Header grid">
    <a href="/#">
      <h1 class="site-title col-3-across">Mrs. Jeanne</h1>
    </a>
    <Hamburger/>
    <Nav {navItems}/>
  </div>
</header>