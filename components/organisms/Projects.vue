<template>
  <div class="projects">
    <section>
      <h1
        class="is-italic has-text-centered is-size-1-desktop is-size-3-touch is-margin-bottom-m has-text-weight-bold"
      >
        Projects
      </h1>
      <div class="project-content">
        <div class="columns is-desktop">
          <div class="project column">
            <div class="content">
              <NLink class="is-block" to="projects/first">
                <h3 class="is-italic is-size-3-desktop is-size-4-touch">Project01</h3>
              </NLink>
              <div class="caption">
                <p>Website</p>
                <p>Designer - Shoji Kanamori</p>
                <p>Engineer - Ryoji Kita</p>
              </div>
            </div>
          </div>
          <div class="project column">
            <div class="content">
              <NLink class="is-block" to="projects/first">
                <h3 class="is-italic is-size-3-desktop is-size-4-touch">Project02</h3>
              </NLink>
              <div class="caption">
                <p>Website</p>
                <p>Designer - Shoji Kanamori</p>
                <p>Engineer - Ryoji Kita</p>
              </div>
            </div>
          </div>
          <div class="project column">
            <div class="content">
              <NLink class="is-block" to="projects/first">
                <h3 class="is-italic is-size-3-desktop is-size-4-touch">Project03</h3>
              </NLink>
              <div class="caption">
                <p>Website</p>
                <p>Designer - Shoji Kanamori</p>
                <p>Engineer - Ryoji Kita</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Project from '../molecules/Project.vue'

@Component({
})
export default class Projects extends Vue {
  @Prop()
  message!: string

  @Prop()
  imgPath!: string

  @Prop()
  projectPage!: string
}
</script>
<style lang="scss">
.projects {
  min-height: 100vh;
  padding: 0 4%;
  margin-bottom: 48px;
  .project-content {
    .project {
      height: 600px;
      padding: 0 24px;
      &:nth-child(2) {
        margin-top: 48px;
      }
      &:nth-child(1) a {
        background-image: url('~assets/images/project01.jpg');
        background-size: cover;
      }
      &:nth-child(2) a {
        background-image: url('~assets/images/project02.jpg');
        background-size: cover;
      }
      &:nth-child(3) a {
        background-image: url('~assets/images/project03.jpg');
        background-size: cover;
      }
      .content {
        a {
          height: 480px;
          position: relative;
          transition: .4s;
          background-position: center center;
          &:hover {
            transform: scale(1.05,1.05);
          }
          h3 {
            position: absolute;
            left: 12px;
            bottom: 0;
          }
        }
        .caption {
          padding: 12px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .projects {
    .project-content {
      .project {
        margin-bottom: 24px;
        &:nth-child(2) {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
