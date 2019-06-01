<template>
  <div class="wwa">
    <section class="is-margin-bottom-l">
      <h1
        class="is-italic is-size-3-touch has-text-weight-bold"
      >
        Who We Are <span class="is-size-3-desktop">私達について</span>
      </h1>
      <div class="content">
        <p>
          WATは多種多様な個性とスキルを持ったメンバーでモノづくりに取り組むチームです。<br />
          1人1人の個性やスキルを活かしながら、これから新しいことを始めようとしている人たちを支援することが私達のMissionです。<br />
          純粋に良いモノ・体験作りを一緒に想像し、メンバーはもちろん社外の人も巻き込みながら、日々新たなモノを創造しています。<br />
        </p>
      </div>
    </section>
    <section>
      <div class="member is-margin-bottom-l">
        <h3 class="is-margin-bottom-s is-size-4-desktop is-size-3-touch has-text-weight-bold">喜多 遼司<span class="is-italic">01</span></h3>
        <h2 class="is-margin-bottom-m is-italic is-size-2-desktop has-text-weight-bold">Ryoji Kita</h2>
        <p>立命館大学経営学部卒業後、2018年より株式会社RITにエンジニアとして参画。現在はフロントエンド を中心とした開発・運用に従事する傍ら、ベンチャーキャピタルでの長期インターンシップの経験から企画・リサーチ職として新規事業の立ち上げに従事している。</p>
      </div>
      <div class="member is-margin-bottom-l">
        <h3 class="is-margin-bottom-s is-size-4-desktop is-size-3-touch has-text-weight-bold">金森 祥治<span class="is-italic">02</span></h3>
        <h2 class="is-margin-bottom-m is-italic is-size-2-desktop has-text-weight-bold">Shoji Kanamori</h2>
        <p>受託や新規事業、コーポレートまで全てのデザインを担当している。今までにスポーツ・ヘルスケア・物流・音楽等様々な業界の制作に上流工程から携わってきた経験があり、その知見を活かし社内の新規事業開発にも注力している。</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class WhoWeAre extends Vue {}
</script>

<style lang="scss" scoped>
.wwa {
  min-height: 100vh;
  padding: 0 4%;
  h1 {
    font-size: 100px;
  }
  .member {
    padding: 48px 12px;
    border-bottom: 1px solid #000;
    h3 {
      position: relative;
      width: 200px;
      span {
        position: absolute;
        right: 0;
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 18px;
          left: -48px;
          width: 40px;
          height: 1px;
          border-top: 1px solid #000;
        }
      }
    }
    p {
      font-size: 20px;
      line-height: 38px;
    }
  }
}
@media screen and (max-width: 768px) {
  .wwa {
    min-height: auto;
    .member {
      h3 {
        width: 400px;
        span {
          &::before {
            top: 24px;
            left: -48px;
            width: 40px;
            height: 1px;
            border-top: 1px solid #000;
          }
        }
      }
    }
  }
}
</style>
