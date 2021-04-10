import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Screening recommendations cases', () => {
  // This test will test screening recommendation made by the screeningRecommendation.vue file for different cases
  it('Screens a 40 year old male who is overweight "BMI = 27" for abnormal blood glucose and T2DM, depression, hypertension and unhealthy drug use', async () => {
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

    expect(wrapper.text()).toContain('Abnormal Blood Glucose and Type 2 Diabetes Mellitus')
    expect(wrapper.text()).not.toContain('Breast cancer')
    expect(wrapper.text()).not.toContain('Cervical cancer')
    expect(wrapper.text()).not.toContain('Colorectal cancer')
    expect(wrapper.text()).toContain('Depression in Adults')
    expect(wrapper.text()).toContain('High Blood Pressure in Adults')
    expect(wrapper.text()).not.toContain('Lung cancer')
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).not.toContain('Prostate cancer')
    expect(wrapper.text()).toContain('Unhealthy Drug Use')
  })
  it('Screens a 60 year old male smoker for 30 pack year for lung cancer, prostate cancer, colorectal cancer, depression, hypertension and unhealthy drug use', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 60,
          gender: 'Male',
          smoker: 'Yes',
          packYears: 30
        }
      }
    })

    expect(wrapper.text()).not.toContain('Abnormal Blood Glucose and Type 2 Diabetes Mellitus')
    expect(wrapper.text()).not.toContain('Breast cancer')
    expect(wrapper.text()).not.toContain('Cervical cancer')
    expect(wrapper.text()).toContain('Colorectal cancer')
    expect(wrapper.text()).toContain('Depression in Adults')
    expect(wrapper.text()).toContain('High Blood Pressure in Adults')
    expect(wrapper.text()).toContain('Lung cancer')
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).toContain('Prostate cancer')
    expect(wrapper.text()).toContain('Unhealthy Drug Use')
  })

  it('Screens a 55 year old female postmenopausal smoker for 19 pack year for breast cancer, cervical cancer, osteoporosis, colorectal cancer, depression, hypertension and unhealthy drug use', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 55,
          gender: 'Female',
          smoker: 'Yes',
          packYears: 19,
          postmenopausal: 'Yes'
        }
      }
    })

    expect(wrapper.text()).not.toContain('Abnormal Blood Glucose and Type 2 Diabetes Mellitus')
    expect(wrapper.text()).toContain('Breast cancer')
    expect(wrapper.text()).toContain('Cervical cancer')
    expect(wrapper.text()).toContain('Colorectal cancer')
    expect(wrapper.text()).toContain('Depression in Adults')
    expect(wrapper.text()).toContain('High Blood Pressure in Adults')
    expect(wrapper.text()).not.toContain('Lung cancer')
    expect(wrapper.text()).toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).not.toContain('Prostate cancer')
    expect(wrapper.text()).toContain('Unhealthy Drug Use')
  })
  it('Screens a 20 year old female medically free for depression, hypertension and unhealthy drug use', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 20,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.text()).not.toContain('Abnormal Blood Glucose and Type 2 Diabetes Mellitus')
    expect(wrapper.text()).not.toContain('Breast cancer')
    expect(wrapper.text()).not.toContain('Cervical cancer')
    expect(wrapper.text()).not.toContain('Colorectal cancer')
    expect(wrapper.text()).toContain('Depression in Adults')
    expect(wrapper.text()).toContain('High Blood Pressure in Adults')
    expect(wrapper.text()).not.toContain('Lung cancer')
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).not.toContain('Prostate cancer')
    expect(wrapper.text()).toContain('Unhealthy Drug Use')
  })

  it('Screens a 43 year old female medically free for breast cancer, cervical cancer, depression, hypertension and unhealthy drug use', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 43,
          gender: 'Female',
          smoker: 'No',
          postmenopausal: 'No'
        }
      }
    })

    expect(wrapper.text()).not.toContain('Abnormal Blood Glucose and Type 2 Diabetes Mellitus')
    expect(wrapper.text()).toContain('Breast cancer')
    expect(wrapper.text()).toContain('Cervical cancer')
    expect(wrapper.text()).not.toContain('Colorectal cancer')
    expect(wrapper.text()).toContain('Depression in Adults')
    expect(wrapper.text()).toContain('High Blood Pressure in Adults')
    expect(wrapper.text()).not.toContain('Lung cancer')
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).not.toContain('Prostate cancer')
    expect(wrapper.text()).toContain('Unhealthy Drug Use')
  })

  it('Screens a 55 year old male obese (BMI = 33) and smoker for 20 pack year but medically free for prostate cancer, colorectal cancer, lung cancer, abnormal BG and T2DM, depression, hypertension and unhealthy drug use', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 55,
          gender: 'Male',
          smoker: 'Yes',
          packYears: 20,
          height: 175,
          weight: 101,
          BMI: 33
        }
      }
    })

    expect(wrapper.text()).toContain('Abnormal Blood Glucose and Type 2 Diabetes Mellitus')
    expect(wrapper.text()).not.toContain('Breast cancer')
    expect(wrapper.text()).not.toContain('Cervical cancer')
    expect(wrapper.text()).toContain('Colorectal cancer')
    expect(wrapper.text()).toContain('Depression in Adults')
    expect(wrapper.text()).toContain('High Blood Pressure in Adults')
    expect(wrapper.text()).toContain('Lung cancer')
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.text()).toContain('Prostate cancer')
    expect(wrapper.text()).toContain('Unhealthy Drug Use')
  })
})