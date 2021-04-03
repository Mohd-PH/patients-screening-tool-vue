<template>
  <div>
    <b-row class="justify-content-md-center">
      <b-col lg="4">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Age:" label-for="input-1">
            <b-form-input id="input-1" v-model="form.age" type="number" placeholder="Enter age" required>
            </b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Gender:" label-for="input-2">
            <b-form-select id="input-2" v-model="form.gender" :options="genders" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-3" label="Smoker:" label-for="input-3">
            <b-form-select id="input-3" v-model="form.smoker" :options="smokers" required></b-form-select>
          </b-form-group>
          <b-row>
            <b-col>
              <b-button type="submit" variant="primary">Submit</b-button>
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
        smoker: null
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
