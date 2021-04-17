<template>
  <div>
    <b-card
      :title="disease"
      header-tag="header">
      <template #header>
        <h6 class="mb-0" v-text="organization"></h6>
      </template>
      <b-card-text v-text="recommendation"></b-card-text>
      <p>Recommendation Grade: <b v-text="grade" class="grade" :title="gradeDescription"></b>, dated <em v-text="date"></em></p>
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
  },
  computed: {
    gradeDescription () {
      if (this.organization === 'U.S. Preventive Services Task Force') {
        if (this.grade === 'A') {
          return 'The USPSTF recommends the service. There is high certainty that the net benefit is substantial.'
        } else if (this.grade === 'B') {
          return 'The USPSTF recommends the service. There is high certainty that the net benefit is moderate or there is moderate certainty that the net benefit is moderate to substantial.'
        } else if (this.grade === 'C') {
          return 'The USPSTF recommends selectively offering or providing this service to individual patients based on professional judgment and patient preferences. There is at least moderate certainty that the net benefit is small.'
        } else {
          return null
        }
      }
      return null
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
