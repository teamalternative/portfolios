<template>
  <div class="contact is-widescreen">
    <section class="section">
      <div class="container">
        <div class="contact-caption has-text-centered">
          <h2
            class="lato is-size-1-desktop is-size-5-touch has-text-weight-bold is-italic has-text-white"
          >
            Contact Us
          </h2>
          <p class="has-text-white">
            制作案件のご依頼について、お気軽にご相談下さい。<br />
            具体的な制作期間や制作イメージ（参考URL）などを併記頂ければ、より詳細な御見積りをお出し致します。<br />
            協業・取材といったご提案もお待ちしております。
          </p>
        </div>
      </div>
    </section>
    <section>
      <form class="contact" name="contact" method="POST" netlify>
        <b-field label="お名前" name="name" custom-class="has-text-white">
          <b-input />
        </b-field>
        <b-field label="会社名" name="organization" custom-class="has-text-white">
          <b-input />
        </b-field>
        <b-field label="メールアドレス" name="email" custom-class="has-text-white">
          <b-input type="email" maxlength="30" />
        </b-field>
        <b-field label="メールアドレス（確認用）" name="confirmation" custom-class="has-text-white">
          <b-input type="email" maxlength="30" />
        </b-field>
        <b-field label="メッセージ" name="message" custom-class="has-text-white">
          <b-input type="textarea" />
        </b-field>
        <b-button rounded class="has-text-weight-bold is-italic">Send</b-button>
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
