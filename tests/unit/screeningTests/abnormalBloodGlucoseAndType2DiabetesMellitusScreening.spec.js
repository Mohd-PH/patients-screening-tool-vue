import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Abnormal Blood Glucose and Type 2 Diabetes Mellitus screening', () => {
  // This test follows the abnormal blood glucose and type 2 diabetes mellitus in adults screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/screening-for-abnormal-blood-glucose-and-type-2-diabetes
  // Last time accessed 05/04/2021

  it('Screens a 40 year old male who is overweight "BMI = 27"', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 40,
          gender: 'Male',
          smoker: 'No',
          height: 172,
          weight: 80,
          BMI: 27
        }
      }
    })

    expect(wrapper.find('AbnormalBloodGlucoseAndType2DiabetesMellitus').element).toBe()
    expect(wrapper.text()).toContain('Abnormal Blood Glucose and Type 2 Diabetes Mellitus')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/screening-for-abnormal-blood-glucose-and-type-2-diabetes')
  })

  it('Screens a 70 year old male who is obese "BMI = 33.1"', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 70,
          gender: 'Male',
          smoker: 'No',
          height: 165,
          weight: 90,
          BMI: 33.1
        }
      }
    })

    expect(wrapper.find('AbnormalBloodGlucoseAndType2DiabetesMellitus').element).toBe()
    expect(wrapper.text()).toContain('Abnormal Blood Glucose and Type 2 Diabetes Mellitus')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/screening-for-abnormal-blood-glucose-and-type-2-diabetes')
  })

  it('Doesn\'t Screen 50 year old female who had normal weight "BMI = 24.2"', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 50,
          gender: 'Female',
          smoker: 'No',
          height: 160,
          weight: 62,
          BMI: 24.2
        }
      }
    })

    expect(wrapper.find('AbnormalBloodGlucoseAndType2DiabetesMellitus').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Abnormal Blood Glucose and Type 2 Diabetes Mellitus')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/screening-for-abnormal-blood-glucose-and-type-2-diabetes')
  })

  it('Doesn\'t Screen 35 year old male who is obese "BMI = 31.5"', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 35,
          gender: 'Female',
          smoker: 'No',
          height: 169,
          weight: 90,
          BMI: 31.5
        }
      }
    })

    expect(wrapper.find('AbnormalBloodGlucoseAndType2DiabetesMellitus').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Abnormal Blood Glucose and Type 2 Diabetes Mellitus')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/screening-for-abnormal-blood-glucose-and-type-2-diabetes')
  })
})
