<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>©2019 AlternativeTeam All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  padding: 2% 4%;
  background-color: #ffffff;
}
</style>
