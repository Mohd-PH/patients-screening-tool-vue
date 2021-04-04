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

          <b-form-group id="input-group-2" label="Height:" label-for="input-height">
            <b-form-input id="input-height" v-model.number="form.height" type="number" placeholder="Enter height in cm" required>
            </b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Weight:" label-for="input-weight">
            <b-form-input id="input-weight" v-model.number="form.weight" type="number" placeholder="Enter weight in kg" required>
            </b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Gender:" label-for="input-gender">
            <b-form-select id="input-gender" v-model="form.gender" :options="genders" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-5" label="Is she postmenopausal:" label-for="input-postmenopausal" v-if="form.gender === 'Female'">
            <b-form-select id="input-postmenopausal" v-model="form.postmenopausal" :options="postmenopausal" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-6" label="Smoker:" label-for="input-smoker">
            <b-form-select id="input-smoker" v-model="form.smoker" :options="smokers" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-7" label="Pack years:" label-for="input-packYears" v-if="form.smoker === 'Yes'">
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
      },
      genders: [{ text: 'Select One', value: null }, 'Male', 'Female'],
      smokers: [{ text: 'Select One', value: null }, 'Yes', 'No'],
      postmenopausal: [{ text: 'Select One', value: null }, 'Yes', 'No']
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
