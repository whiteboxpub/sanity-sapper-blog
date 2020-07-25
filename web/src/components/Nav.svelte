<script>
	export let segment;
</script>

<style>
	.main-nav {
    position: absolute;
    margin: 0 auto 5px;
    z-index: 100;
    background-color: #010131;
		overflow: hidden;
		right: 0;
		-webkit-transform: translate3d(100%, 0, 0);
		-moz-transform: translate3d(100%, 0, 0);
		transform: translate3d(100%, 0, 0);
		-webkit-transition: .5s ease-in-out;
		-moz-transition: .5s ease-in-out;
		transition: .5s ease-in-out;
	}
	.main-nav:not([class*="col"]) {
		width: 100%;
	}
	.main-nav.open {
		-webkit-transform: translate3d(0, 0, 0);
		-moz-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
	.main-nav > ul {
		height: auto;
		padding: 0 0 120px;
	}
	nav.main-nav > ul > li {
		position: relative;
		display: block;
		width: 100%;
		color: #fff;
		padding: 10px 0px 10px;
		margin: 0 auto 0;
		text-transform: uppercase;
		font-size: 18px;
		text-align: left;
		box-sizing: border-box;
	}
	nav.main-nav ul li a {
		color: #fff;
		text-decoration: none;
		padding-left: 10px;
		margin: 0 auto 0;
		text-transform: uppercase;
		font-family: "Paper Cutout", sans-serif;
		font-size: 35px;
		text-align: left;
		box-sizing: border-box;
	}
	@media screen and (min-width: 960px) {
		.main-nav {
			display: inline-block;
			vertical-align: top;
			height: auto;
			max-height: initial;
			position: relative;
			background-color: transparent;    
			margin: 2.25em 0 0 -.25em;
			-webkit-transform: translate3d(0,0,0);
			-moz-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
		}
		.main-nav > ul {
			text-align: right;
			padding: 0;
			margin: 0 auto;
		}
		nav.main-nav > ul > li {
			width: auto;
			display: inline-block;
			padding: 0 4% 0 0;
		}
		nav.main-nav > ul > li:last-child {
			padding-right: 0;
		}
		nav.main-nav ul li a {
			color: #e2cf57;
			padding: 0;
			font-size: 26px;
			line-height: 35px;
			color: transparent;
			-webkit-background-clip: text;
			background-clip: text;
			background-image: url('/assets/images/campaigns_1_image.jpg');
			background-size: 100%;
		}
		nav.main-nav ul li > a:hover {
			color: #001340;
		}
	}
</style>

<nav class="main-nav col-9-across s-twelve">
	<ul>
		<li class='{segment === "author" ? "mobile-active" : ""}'><a href='#author'>Author</a></li>
		<li class='{segment === "events" ? "mobile-active" : ""}'><a href='#events'>Events</a></li>
		<li class='{segment === "bookstore" ? "mobile-active" : ""}'><a href='#bookstore'>Bookstore</a></li>
		<li class='{segment === "creative_process" ? "mobile-active" : ""}'><a href='#creative_process'>Creative Process</a></li>
		<li class='{segment === "artwork" ? "mobile-active" : ""}'><a href='#artwork'>Artwork</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<!-- <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li> -->
	</ul>
</nav>