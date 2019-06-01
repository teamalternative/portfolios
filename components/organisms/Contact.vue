<template>
  <div class="contact">
    <section class="section">
      <div class="container">
        <div class="contact-caption has-text-centered">
          <h2
            class="lato is-size-1-desktop is-size-3-touch is-margin-bottom-m has-text-weight-bold is-italic has-text-white"
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
        <b-field
          label="会社名"
          name="organization"
          custom-class="has-text-white"
        >
          <b-input />
        </b-field>
        <b-field
          label="メールアドレス"
          name="email"
          custom-class="has-text-white"
        >
          <b-input type="email" maxlength="30" />
        </b-field>
        <b-field
          label="メールアドレス（確認用）"
          name="confirmation"
          custom-class="has-text-white"
        >
          <b-input type="email" maxlength="30" />
        </b-field>
        <b-field
          label="メッセージ"
          name="message"
          custom-class="has-text-white"
        >
          <b-input type="textarea" />
        </b-field>
        <div class="has-text-centered">
          <b-button class="has-text-weight-bold is-italic">Send</b-button>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Contact extends Vue {}
</script>

<style scoped lang="scss">
.contact {
  min-height: 100vh;
  padding: 0 4%;
  background-color: black;
  button {
    color: white!important;
    border: 0!important;
    border-radius: 0!important;
    background-color: transparent!important;
    font-size: 48px;
    transition: .4s;
    &:hover {
      border-bottom: 1px solid #fff!important;
    }
  }
}
@media screen and (max-width: 768px) {
  .contact {
    min-height: 80px;
  }
}
</style>
