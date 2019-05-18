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
import Contact from '~/components/organisms/Contact.vue'
import FirstView from '../components/organisms/FirstView.vue'
import Projects from '../components/organisms/Projects.vue'
import WhoWeAre from '../components/organisms/WhoWeAre.vue'
import Header from '../components/organisms/Header.vue'
import Footer from '../components/organisms/Footer.vue'
@Component({
  components: {
    Contact,
    FirstView,
    Projects,
    WhoWeAre,
    Header,
    Footer
  }
})
export default class extends Vue {}
</script>
