<template>
  <div class="contact">
    <section class="section">
      <div class="container">
        <div class="contact-caption has-text-centered">
          <h2
            class="lato is-size-4-desktop is-size-5-touch has-text-weight-bold"
          >
            <span class="is-inline-block">Contact Us</span>
          </h2>
        </div>
      </div>
    </section>
    <section>
      <form name="contact" method="POST" netlify>
        <b-field label="お名前">
          <b-input value="Kevin Garvey"></b-input>
        </b-field>
        <b-field label="会社名">
          <b-input value="Kevin Garvey"></b-input>
        </b-field>
        <b-field label="Email" type="is-danger" message="This email is invalid">
          <b-input type="email" value="john@" maxlength="30"> </b-input>
        </b-field>
        <b-field label="お名前">
          <b-input value="Kevin Garvey"></b-input>
        </b-field>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Contact extends Vue {}
</script>

<style scoped>
.contact {
  background-color: black;
}
</style>
