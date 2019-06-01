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
          <div class="column">
            <div class="card">
              <NLink to="projects/first">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="~/assets/images/project01.png" alt="project_01" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <p>テスト</p>
                  </div>
                </div>
              </NLink>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <NLink to="projects/first">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="~/assets/images/project02.png" alt="project_01" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <p>テスト</p>
                  </div>
                </div>
              </NLink>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <NLink to="projects/first">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="~/assets/images/project03.png" alt="project_01" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <p>テスト</p>
                  </div>
                </div>
              </NLink>
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
