<script>
  export let events;
</script>
<style>
  .left-sidebar .event-list p,
  .left-sidebar .location-list p {
    font-size: 13px;
  }

  /*upcoming events*/
  .event-item {
    height: 0;
    max-height: 0;
    font-size: 15px;
    overflow: hidden;
    -webkit-transition: .25s;
    -moz-transition: .25s;
    transition: .25s;
  }

  .event-item:nth-child(-n+3),
  .event-list.reveal .event-item {
    margin-bottom: 1em;
      height: auto;
      max-height: 200px;
  }

  .event-item p {
    color: inherit;
    font-family: inherit;
    font-size: 12px;
  }

  button.show-events:focus {
    outline: none;
  }
  .show-events span {
    margin-right: .5em;
  }
  .show-events div {
      display: inline-block;
      vertical-align: middle;
    transition: .25s;
  }
  .event-list.reveal .show-events div {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .event-list span.open {
    display: none;
  }
  .event-list.reveal span.closed {
    display: none;
  }
  .event-list.reveal span.open {
    display: inline;
  }
</style>

<section class="sidebar-item" id="events">
  <h2 class="section-title">Upcoming Events</h2>
  <p class="section-subtitle">You can find Jeanne at the following upcoming events:</p>
  <div class="event-list">
    <!-- if count > 3 -->
    {#each events as {start_date, title, location}}
    <p class="event-item"><b>{new Date(start_date).toLocaleString(undefined, {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      dayPeriod: "short"
    })} / {location}</b><br />{title}</p>
    {/each}
    {#if events.length > 3}
      <button class="show-events" onclick="show_events(); return false;">Show <span class="closed">More</span><span class="open">Less</span> <div><i class="fa fa-plus" aria-hidden="true"></i></div></button>
    {/if}
  </div>
</section>