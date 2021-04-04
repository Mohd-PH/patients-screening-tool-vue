<template>
  <div>
    <b-container>
      <h3>Screening recommendations</h3>
      <b-row class="justify-content-md-center">
        <b-col
          lg="6"
          class="recommendation colorectalCancer"
          v-if="colorectalCancer">
          <screeningRecommendationCard
          :disease="colorectalCancer.disease"
          :organization="colorectalCancer.organization"
          :link="colorectalCancer.link"
          :grade="colorectalCancer.grade"
          :recommendation="colorectalCancer.recommendation"
          :date="colorectalCancer.date"
          ></screeningRecommendationCard>
        </b-col>
        <b-col
          lg="6"
          class="recommendation breastCancer"
          v-if="breastCancer">
          <screeningRecommendationCard
          :disease="breastCancer.disease"
          :organization="breastCancer.organization"
          :link="breastCancer.link"
          :grade="breastCancer.grade"
          :recommendation="breastCancer.recommendation"
          :date="breastCancer.date"
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
    },
    breastCancer () {
      if (!this.patientsInformationData) return false
      //  No screening recommendations for males
      if (this.patientsInformationData.gender === 'Male') return false
      if (this.patientsInformationData.age >= 50 && this.patientsInformationData.age <= 74) {
        return {
          disease: 'Breast cancer screening',
          organization: 'U.S. Preventive Services Task Force',
          link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening',
          grade: 'B',
          recommendation: `The USPSTF recommends biennial screening mammography for women aged 50 to 74 years.`,
          date: 'January 11, 2016'
        }
      } else if (this.patientsInformationData.age >= 40 && this.patientsInformationData.age <= 49) {
        return {
          disease: 'Breast cancer screening',
          organization: 'U.S. Preventive Services Task Force',
          link: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening',
          grade: 'C',
          recommendation: `The decision to start screening mammography in women prior to age 50 years should be an individual one. Women who place a higher value on the potential benefit than the potential harms may choose to begin biennial screening between the ages of 40 and 49 years.

. For women who are at average risk for breast cancer, most of the benefit of mammography results from biennial screening during ages 50 to 74 years. Of all of the age groups, women aged 60 to 69 years are most likely to avoid breast cancer death through mammography screening. While screening mammography in women aged 40 to 49 years may reduce the risk for breast cancer death, the number of deaths averted is smaller than that in older women and the number of false-positive results and unnecessary biopsies is larger. The balance of benefits and harms is likely to improve as women move from their early to late 40s.

. In addition to false-positive results and unnecessary biopsies, all women undergoing regular screening mammography are at risk for the diagnosis and treatment of noninvasive and invasive breast cancer that would otherwise not have become a threat to their health, or even apparent, during their lifetime (known as "overdiagnosis"). Beginning mammography screening at a younger age and screening more frequently may increase the risk for overdiagnosis and subsequent overtreatment.

. Women with a parent, sibling, or child with breast cancer are at higher risk for breast cancer and thus may benefit more than average-risk women from beginning screening in their 40s.

Refer to the link for more information for information on implementation of the C recommendation.`,
          date: 'January 11, 2016'
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
