<template>
  <div>
    <div class="contain">
      <FirstView />
      <Projects />
      <WhoWeAre />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Contact from '~/components/organisms/Contact.vue'
import FirstView from '../components/organisms/FirstView.vue'
import Projects from '../components/organisms/Projects.vue'
import WhoWeAre from '../components/organisms/WhoWeAre.vue'
import Footer from '../components/organisms/Footer.vue'
@Component({
  components: {
    Contact,
    FirstView,
    Projects,
    WhoWeAre,
    Footer
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.contain {
  div {
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }
}
</style>
