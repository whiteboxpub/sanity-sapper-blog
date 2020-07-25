<style>
  .sun-img {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 50px;
    z-index: 1;
    -webkit-transform: translate3d(-5%, 0, 0);
    -moz-transform: translate3d(-5%, 0, 0);
    transform: translate3d(-5%, 0, 0);
      -webkit-animation: outdoorMovement 13s ease-out infinite normal;
      animation: outdoorMovement 13s ease-out infinite normal;
    -webkit-animation-direction: alternate-reverse;
    animation-direction: alternate-reverse;
  }
  .sun-img img {
    width: 100%;
  }
  @media screen and (min-width: 960px) {
    .sun-img {
      max-width: 150px;
    }
  }
</style>

<a class="sun-img" href='/#'>
  <img src="/assets/images/sun_ray.png" alt="sun cutout">
</a>