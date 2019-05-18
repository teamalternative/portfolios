<template>
  <div class="wwa">
    <div>
      <h1
        class="lato is-italic is-size-1-desktop is-size-3-touch has-text-weight-bold"
      >
        Who We Are <span class="is-size-3-desktop">私達について</span>
      </h1>
    </div>
    <div class="content">
      <p>
        WATは多種多様な個性とスキルを持ったメンバーでモノづくりに取り組むチームです。<br />
        1人1人の個性やスキルを活かしながら、これから新しいことを始めようとしている人たちを支援することが私達のMissionです。<br />
        純粋に良いモノ・体験作りを一緒に想像し、メンバーはもちろん社外の人も巻き込みながら、日々新たなモノを創造しています。<br />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class WhoWeAre extends Vue {}
</script>

<style lang="scss" scoped>
.wwa {
  margin: 0 auto;
}
</style>
