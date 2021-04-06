<template>
  <div>
    <h3>Patient's information</h3>
    <b-row class="justify-content-md-center">
      <b-alert variant="success" show>This tool doesn't collect any data, it works entirely in your browser</b-alert>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col lg="4">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Age:" label-for="input-age" label-cols-sm="6">
            <b-form-input id="input-age" v-model.number="form.age" type="number" placeholder="Enter age" required>
            </b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Height:" label-for="input-height" label-cols-sm="6">
            <b-form-input id="input-height" v-model.number="form.height" type="number" placeholder="Enter height in cm" required>
            </b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Weight:" label-for="input-weight" label-cols-sm="6">
            <b-form-input id="input-weight" v-model.number="form.weight" type="number" placeholder="Enter weight in kg" required>
            </b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Gender:" label-for="input-gender" label-cols-sm="6">
            <b-button-group id="input-gender">
              <b-button id="gender-male-button" :variant="form.gender === 'Male' ? 'primary' : ''" @click="form.gender = 'Male'">Male</b-button>
              <b-button id="gender-female-button" :variant="form.gender === 'Female' ? 'primary' : ''" @click="form.gender = 'Female'">Female</b-button>
            </b-button-group>
          </b-form-group>

          <b-form-group id="input-group-5" label="Is she postmenopausal:" label-for="input-postmenopausal" label-cols-sm="6" v-if="form.gender === 'Female'">
            <b-button-group id="input-postmenopausal">
              <b-button id="postmenopausal-yes-button" :variant="form.postmenopausal === 'Yes' ? 'primary' : ''" @click="form.postmenopausal = 'Yes'">Yes</b-button>
              <b-button id="postmenopausal-no-button" :variant="form.postmenopausal === 'No' ? 'primary' : ''" @click="form.postmenopausal = 'No'">No</b-button>
            </b-button-group>
          </b-form-group>

          <b-form-group id="input-group-6" label="Smoker:" label-for="input-smoker" label-cols-sm="6">
            <b-button-group id="input-smoker">
              <b-button id="smoker-yes-button" :variant="form.smoker === 'Yes' ? 'primary' : ''" @click="form.smoker = 'Yes'">Yes</b-button>
              <b-button id="smoker-no-button" :variant="form.smoker === 'No' ? 'primary' : ''" @click="form.smoker = 'No'">No</b-button>
            </b-button-group>
          </b-form-group>

          <b-form-group id="input-group-7" label="Pack years:" label-for="input-packYears" label-cols-sm="6" v-if="form.smoker === 'Yes'">
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
        height: null,
        weight: null,
        BMI: null,
        smoker: null,
        packYears: null,
        postmenopausal: null
      }
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.form.BMI = Math.floor((this.form.weight / (Math.pow((this.form.height / 100), 2))) * 10) / 10
      if (isNaN(this.form.BMI)) {
        this.form.BMI = null
      }
      this.$emit('patientInformationSubmitted', this.form)
    }
  }
}
</script>

<style>

</style>
