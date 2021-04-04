<template>
  <div>
    <b-container>
      <h3>Screening recommendations</h3>
      <b-row class="justify-content-md-center">
        <b-col lg="6" class="recommendation colorectalCancer">
          <screeningRecommendationCard
          v-if="colorectalCancer"
          :disease="colorectalCancer.disease"
          :organization="colorectalCancer.organization"
          :link="colorectalCancer.link"
          :grade="colorectalCancer.grade"
          :recommendation="colorectalCancer.recommendation"
          :date="colorectalCancer.date"
          ></screeningRecommendationCard>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import screeningRecommendationCard from '../../components/screeningRecommendationCard'

export default {
  name: 'screeningRecommendations',
  components: {
    screeningRecommendationCard
  },
  props: ['patientsInformationData'],
  data () {
    return {

    }
  },
  computed: {
    colorectalCancer () {
      if (!this.patientsInformationData) return false
      if (this.patientsInformationData.age >= 50 && this.patientsInformationData.age <= 75) {
        return {
          disease: 'Colorectal cancer screening',
          organization: 'U.S. Preventive Services Task Force',
          link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening',
          grade: 'A',
          recommendation: `The USPSTF recommends screening for colorectal cancer starting at age 50 years and continuing until age 75 years.

The risks and benefits of different screening methods vary. refer to the link for more information`,
          date: 'June 15, 2016'
        }
      } else if (this.patientsInformationData.age >= 76 && this.patientsInformationData.age <= 85) {
        return {
          disease: 'Colorectal cancer screening',
          organization: 'U.S. Preventive Services Task Force',
          link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening',
          grade: 'C',
          recommendation: `The decision to screen for colorectal cancer in adults aged 76 to 85 years should be an individual one, taking into account the patient's overall health and prior screening history.

Adults in this age group who have never been screened for colorectal cancer are more likely to benefit.

Screening would be most appropriate among adults who 1) are healthy enough to undergo treatment if colorectal cancer is detected and 2) do not have comorbid conditions that would significantly limit their life expectancy.`,
          date: 'June 15, 2016'
        }
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
  .recommendation {
    padding-bottom: 25px;
  }
</style>
