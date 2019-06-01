<template>
  <div>
    <div class="contain">
      <Header />
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
import FirstView from '../components/organisms/FirstView.vue'
import Projects from '../components/organisms/Projects.vue'
import WhoWeAre from '../components/organisms/WhoWeAre.vue'
import Header from '../components/organisms/Header.vue'
import Contact from '../components/organisms/Contact.vue'
import Footer from '../components/organisms/Footer.vue'

@Component({
  components: {
    FirstView,
    Projects,
    WhoWeAre,
    Header,
    Contact,
    Footer
  }
})
export default class extends Vue {}
</script>
