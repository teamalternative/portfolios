<template>
  <div>
    <div>
      <FirstView />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FirstView from '../../components/organisms/FirstView.vue'

@Component({
  components: {
    FirstView
  }
})
export default class extends Vue {}
</script>
