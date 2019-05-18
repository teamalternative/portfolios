<template>
  <div class="column">
    <div class="card" >
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src=imgPath alt="project_01" />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p>{{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Project extends Vue {
  @Prop()
  message!: string;
  @Prop()
  imgPath!: string;
}
</script>
