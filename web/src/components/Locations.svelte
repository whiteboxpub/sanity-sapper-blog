<script>
  export let locations;
</script>
<style>
  /*store locations*/
  .sidebar-item:nth-child(3) {
    padding: .5em 1em;
  }
  .location-list {
      list-style: none;
      padding: 0;
  }
  .location-item {
    margin-bottom: .5em;
  }
  .location-item p {
    text-align: center;
  }
</style>

<section class="sidebar-item" id="locations">
  <h2 class="section-title">In-Store Locations</h2>
  <ul class="location-list">
    <!-- each bookstore location -->
    {#each locations as {name, address, city, state, zip}}
    <li class="location-item">
      <p class="location-address"><b>{name}</b><br> {address}<br> {city}, {state} {zip}</p>
    </li>
    {/each}
  </ul>
</section>