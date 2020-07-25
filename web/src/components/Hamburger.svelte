<style>
  .hamb-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    padding: 12px 1.5px 12px;
    z-index: 10;
  }
  .hamb-wrapper:before {
    content: '';
    display: inline-block;
    min-height: 100%;
    vertical-align: middle;
    margin-right: -0.5em;
  }
  .hamb-wrapper > span {
    color: #333;
    font-size: 16px;
    font-weight: 700;
    padding-left: 15px;
    vertical-align: middle;
  }
  #hamb-icon {
    position: relative;
    display: inline-block;
    margin: 0 10px;
    /* float: right; */
    vertical-align: middle;
    width: 40px;
    height: 28px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    z-index: 100;
  }
  #hamb-icon span {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: #333;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    /* Animate "X" back to Hamburger Icon */
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  #hamb-icon span:nth-child(1) {
    top: 0px;
  }
  #hamb-icon span:nth-child(2) {
    top: 11px;
  }
  #hamb-icon span:nth-child(3) {
    top: 11px;
  }
  #hamb-icon span:nth-child(4) {
    top: 22px;
  }
  #hamb-icon.open span:nth-child(1) {
    top: 22px;
    width: 0%;
    left: 50%;
  }
  #hamb-icon.open span:nth-child(2) {
    /* Animate Hamburger Icon into clickable "X" */
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  #hamb-icon.open span:nth-child(3) {
    /* Animate Hamburger Icon into clickable "X" */
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  #hamb-icon.open span:nth-child(4) {
    top: 22px;
    width: 0%;
    left: 50%;
  }
  @media screen and (min-width: 500px) and (max-width: 959px) {
    .hamb-wrapper {
      display: block;
    }
  }
  @media screen and (min-width: 960px) {
    .hamb-wrapper {
      display: none;
    }
  }
</style>

<div class="hamb-wrapper" onclick="nav_open_menu(); return false;">
  <div id="hamb-icon">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>