<script>
	import Sidebar from "../components/Sidebar.svelte";
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../components/serializers";
  import { getContext } from 'svelte'

  const pageData$ = getContext('pageData')
	$: pageData = $pageData$
	$: console.log({sections: pageData.sections})
</script>
<style>
	:global(.main-content .home-author div, 
	.creative-process, 
	.artist-portfolio, 
	.contact) {
		border: solid 1px #dcdcdc;
		padding: 1em;
		box-sizing: border-box;
		overflow: auto;
		margin-bottom: 1em;
	}
	.main-content .home-author div {
		padding-bottom: 4em;
	}
	:global(.main-content .home-author div > .creative-list-bee) {
		margin-top: 6em;
		left: auto;
	}
	@media screen and (min-width: 960px) {
		.main-content {
			position: relative;
			padding-left: 3.5em;
		}
		.flower-stem {
			position: absolute;
			content: ' ';
			background-image: url('/assets/images/flower_stem.png');
			background-repeat: repeat-y;
			background-size: 100%;
			width: 60px;
			height: 100%;
			top: 0;
			left: -80px;
			left: 0;
			overflow: visible;
			z-index: 9;
		}
		.flower-stem:before {
			content: ' ';
			width: 100%;
			height: 100px;
			background-image: url('/assets/images/flower.png');
			background-repeat: no-repeat;
			background-size: 100%;
			position: absolute;
			top: -60px;
			-webkit-animation: outdoorMovement 10s 2s ease-out infinite alternate;
			-moz-animation: outdoorMovement 10s 2s ease-out infinite alternate;
			animation: outdoorMovement 10s 2s ease-out infinite alternate;
		}
		.main-content .home-author div {
			padding-bottom: 4em;
		}
	}
</style>

<div class="upper-wrapper clearfix column col-12-across">
	<Sidebar/>
	<section class="main-content column col-9-across float-right">
		<div class="flower-stem"></div>
		<section class="home-author grid-w-gutters">
			{#each pageData.sections as {title, hash, body}}
			 <div id={hash}>
				<BlockContent blocks={body} {serializers}/>
				<!-- <p><img alt="hello text" class="img_full_width" src="/assets/images/hello.png" /></p>
				<p><img alt="classroom activities" class="img_full_width" src="/assets/images/campaigns_1_image.jpg" /></p>
				<p class="section-subtitle">Welcome to Mrs. Jeanne&rsquo;s Website!</p>
				<p>We are so excited that you decided to learn more about Jeanne and her books.</p>
				<p>Over the course of many years while Jeanne was teaching kindergarten, she collected ideas for books which she stored in a filing cabinet in her classroom. Finally in 2013, Jeanne decided to establish Jeanne Kay Publishing as a way to pursue her passion for writing and illustrating children&rsquo;s books.</p>
				<p>Fast forward and Jeanne is the proud author and illustrator of Mama, How Does The Wind Start To Blow?, and Papa, Why Does The Sun Shine? both recipients of the Children&rsquo;s Moonbeam Award and Children&rsquo;s Literary Classics Seal of Approval.</p>
				<p>Jeanne resides in Colfax, Wisconsin with her husband, Gerry, dog, four horses, and two barn cats. Her four children are all grown up and live across the midwest, visiting home often. Jeanne has enjoyed visiting schools and libraries to talk to students about writing and illustrating books. Interested in a visit?</p>
				<p><a class="content-link" href="/contact/" onclick="navigationScroll(this); return false;">Contact Mrs. Jeanne</a></p> -->
			 </div>
			{/each}
		</section>
		<section class="artist-portfolio col-12-across" id="artwork">
			<h2 class="section-title">Artist Portfolio</h2>
			<div class="book-illustrations">
				<h2 class="section-subtitle">Book Illustrations</h2>
				<div class="portfolio_carousel"></div>
			</div>
		</section>
	</section>
</div>

