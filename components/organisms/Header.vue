<template>
  <header class="header">
    <div class="content">
      <a class="is-italic has-text-weight-bold has-text-dark" href="/">WAT</a>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  padding: 4%;
  font-size: 32px;
  width: 100%;
  position: absolute;
  z-index: 10;
}
</style>
