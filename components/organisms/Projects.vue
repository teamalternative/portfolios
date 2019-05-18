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
          <Project
            message="テスト"
            imgPath="../../assets/images/project01.png"
          />
          <Project
            message="テスト"
            imgPath="../../assets/images/project02.png"
          />
          <Project
            message="テスト"
            imgPath="../../assets/images/project03.png"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Project from '../molecules/Project.vue'

@Component({
  components: {
    Project
  }
})
export default class Projects extends Vue {
  @Prop()
    message!: string;

  @Prop()
    imgPath!: string;
}
</script>
