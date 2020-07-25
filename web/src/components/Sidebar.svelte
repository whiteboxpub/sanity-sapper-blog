<script>
import Events from "./Events.svelte";
import Bookstore from "./Bookstore.svelte";
import Locations from "./Locations.svelte";

</script>
<style>
  .sticky-spacer {
		max-width: 243px;
		box-sizing: border-box;
  }
  .left-sidebar {
    box-sizing: border-box;
    padding: 0 3%;
    color: #333;
    font-family: "Lato", sans-serif;
    margin: 1em auto 0;
  }

  :global(.sidebar-item) {
    margin: 0 auto 1em;
    border: solid 1px #d6f6f1;
  }
  :global(.sidebar-item:first-child) {
    background-color: #d6f6f1;
    padding: .5em 1em;
    border: none;
  }
  @media screen and (min-width: 960px) {
    .left-sidebar {
      box-sizing: border-box;
      padding: 0;
      margin-top: 6em;
      text-align: center;
      max-width: 100%;
      z-index: 10;
    }
    :global(.sidebar-item) {
      box-sizing: border-box;
      overflow: hidden;
    }
  }
</style>
<div class="sticky-spacer column col-3-across">
  <div class="left-sidebar column col-12-across">
    <Events/>
    <Bookstore/>
    <Locations/>
  </div>
</div>