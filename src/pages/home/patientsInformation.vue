<template>
  <div>
    <h3>Patients information</h3>
    <b-row class="justify-content-md-center">
      <b-col lg="4">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Age:" label-for="input-age">
            <b-form-input id="input-age" v-model.number="form.age" type="number" placeholder="Enter age" required>
            </b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Gender:" label-for="input-gender">
            <b-form-select id="input-gender" v-model="form.gender" :options="genders" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-3" label="Smoker:" label-for="input-smoker">
            <b-form-select id="input-smoker" v-model="form.smoker" :options="smokers" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4" label="Smoker:" label-for="input-packYears" v-if="form.smoker === 'Yes'">
            <b-form-input id="input-packYears" v-model.number="form.packYears" type="number" placeholder="Pack years" required>
            </b-form-input>
          </b-form-group>
          <b-row>
            <b-col>
              <b-button type="submit" class="submit-button" variant="primary">Submit</b-button>
            </b-col>
            <b-col>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'patientsInformation',
  data () {
    return {
      form: {
        gender: null,
        age: null,
        smoker: null,
        packYears: null
      },
      genders: [{ text: 'Select One', value: null }, 'Male', 'Female'],
      smokers: [{ text: 'Select One', value: null }, 'Yes', 'No']
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.$emit('patientInformationSubmitted', this.form)
    }
  }
}
</script>

<style>

</style>
