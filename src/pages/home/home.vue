<template>
  <div>
    <b-container>
      <b-row>
        <b-col><patients-information v-on:patientInformationSubmitted="patientsInformationData = $event"></patients-information></b-col>
      </b-row>
      <hr>
    </b-container>
  </div>
</template>

<script>
import patientsInformation from './patientsInformation'

export default {
  name: 'Home',
  components: {
    patientsInformation
  },
  data () {
    return {
      patientsInformationData: null
    }
  }
}
</script>

<style>

</style>
