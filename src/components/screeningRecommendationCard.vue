<template>
  <div>
    <b-card
      :title="disease"
      header-tag="header">
      <template #header>
        <h6 class="mb-0" v-text="organization"></h6>
      </template>
      <b-card-text v-text="recommendation"></b-card-text>
      <p>Recommendation Grade: <b v-text="grade" class="grade"></b>, dated <em v-text="date"></em></p>
      <div class="text-right">
        <b-button :href="link" variant="primary" target="_blank">
          Recommendation <b-icon icon="box-arrow-up-right" scale="0.8"></b-icon>
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'screeningRecommendationCard',
  props: ['disease', 'organization', 'link', 'grade', 'recommendation', 'date'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .grade {
    font-size: 1.4em;
    text-shadow: 1px 2px 7px rgba(109,120,109,0.41);
  }
</style>
