import { Component } from 'nuxt-property-decorator';
<template>
  <div class="firstview">
    <div class="top-caption is-flex is-align-center">
      <h1 class="is-italic has-text-weight-bold has-text-left">
        We are<br />
        Alternative<br />
        Team<br />
      </h1>
    </div>
    <div class="top-content"></div>
    <a class="top-left-bottom is-block has-text-dark" href="#">Scroll</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class FirstView extends Vue {}
</script>

<style lang="scss">
.firstview {
  min-height: 100vh;
  position: relative;
  .top-caption {
    padding: 0 0 0 4%;
    position: absolute;
    height: 100%;
    z-index: 1;
    h1 {
      font-size: 100px !important;
    }
  }
  .top-content {
    z-index: 0;
    display: block;
    width: 80%;
    height: 85vh;
    left: calc(15.7% + 0.6vw);
    top: 55px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    background-image: url('~assets/images/firstview-min.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .top-left-bottom {
    padding: 0 0 0 3%;
    position: absolute;
    bottom: 3%;
    height: 48px;
    transform: rotate(90deg);
    transform-origin: right top;
    letter-spacing: 0.05em;
    overflow: hidden;
    z-index: 999;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    &::before {
      content: '';
      position: absolute;
      display: block;
      left: 0;
      top: 30px;
      width: 100%;
      height: 1px;
      background: #000;
      background-size: 100%;
      -webkit-animation: lineAnime 1.5s ease-in-out infinite;
      animation: lineAnime 1.5s ease-in-out infinite;
    }
  }
}
@keyframes lineAnime {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
@media screen and (max-width: 768px) {
  .firstview {
    .top-content {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      img {
        position: absolute;
        bottom: 0;
      }
    }
  }
}
</style>
