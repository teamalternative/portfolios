import { Component } from 'nuxt-property-decorator';
<template>
  <div class="firstview has-text-black is-flex">
    <div>
      <h1
        class="lato is-size-1-desktop is-italic is-size-3-touch has-text-weight-bold has-text-left"
      >
        We are<br />
        Alternative<br />
        Team<br />
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class FirstView extends Vue {}
</script>

<style lang="scss">
.firstview {
  height: 88vh;
  background: url('../../assets/images/first-view.png') no-repeat center center/
    80%;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 2px rgba(0, 3, 0, 0.6);
  h1 {
    span {
      font-size: 100px;
    }
  }
  h2 {
    margin: 0 0 48px 0;
  }
}
// @media screen and (max-width: 768px) {
//   .firstview {
//     height: 100vh;
//     background: url('../../assets/images/career-top-sp.jpg') no-repeat center
//       center/115%;
//     h1 {
//       span {
//         font-size: 48px;
//       }
//     }
//     h2 {
//       margin: 0 0 24px 0;
//       span {
//         display: inline-block;
//       }
//     }
//   }
// }
</style>
