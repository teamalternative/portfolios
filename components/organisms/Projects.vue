<template>
  <div class="projects">
    <section>
      <h1
        class="lato is-italic has-text-centered is-size-1-desktop is-size-3-touch has-text-weight-bold"
      >
        Projects
      </h1>
      <div class="projects">
        <div class="columns">
          <ProjectOne />
          <ProjectTwo />
          <ProjectThree />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ProjectOne from '../molecules/ProjectOne.vue'
import ProjectTwo from '../molecules/ProjectTwo.vue'
import ProjectThree from '../molecules/ProjectThree.vue'

@Component({
  components: {
    ProjectOne,
    ProjectTwo,
    ProjectThree
  }
})
export default class Projects extends Vue {}
</script>
