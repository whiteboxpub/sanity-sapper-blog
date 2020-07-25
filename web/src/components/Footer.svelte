<style>
  .horse-grass {
    background-image: url("/assets/images/horse_grass.png");
    background-repeat: repeat-x;
    background-position: bottom;
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
  }
  .horse-img {
    position: absolute;
    bottom: -1px;
    left: 15%;
    max-width: 300px;
    width: 145px;
    right: 10%;
    -webit-transition: 2s;
    -moz-transition: 2s;
    transition: 2s;
    -webkit-animation:  3s ease-out 2s infinite alternate walkHorse;
    -moz-animation: 3s ease-out 2s infinite alternate walkHorse;
    animation: 3s ease-out 2s infinite alternate walkHorse;
  }
  .horse-body {
    position: relative;
    width: 100%;
  }
  .horse-tail {
    position: absolute;
    left: -60px;
    top: 15px;
    width: 70px;
    -webkit-transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    transform: rotate(20deg);
    transform-origin: right 50%;
    -webit-transition: 5s;
    -moz-transition: 5s;
    transition: 5s;
    -webkit-animation:  5s ease-out infinite alternate  tailSwing;
    -moz-animation: 5s ease-out infinite alternate tailSwing;
    animation: 5s ease-out infinite alternate tailSwing;
  }
  @media screen and (min-width: 960px) {
    .horse-img {
      width: 300px;
    }
    .horse-tail {
      left: -110px;
      width: 140px;
    }
  }
</style>
<footer>
  <div class="grid">
    <div class="horse-img">
      <img class="horse-body" src="/assets/images/horse_body.png" alt="cutout horse body">
      <img class="horse-tail" src="/assets/images/horse_tail.png" alt="coutout horse tail">
    </div>
    <div class="horse-grass"></div>
  </div>
</footer>