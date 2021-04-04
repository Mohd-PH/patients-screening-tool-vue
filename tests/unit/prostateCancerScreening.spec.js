import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Prostate cancer screening', () => {
  // This test follows the prostate cancer screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening
  // Last time accessed 04/04/2021

  it('Doesn\'t Screen females', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 55,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('prostateCancer').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Prostate cancer')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening')
  })
  it('Screens a 55 year old male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 55,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('prostateCancer').element).toBe()
    expect(wrapper.text()).toContain('Recommendation Grade: C')
    expect(wrapper.text()).toContain('Prostate cancer screening')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening')
  })
  it('Screens a 69 year old male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 69,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('prostateCancer').element).toBe()
    expect(wrapper.text()).toContain('Recommendation Grade: C')
    expect(wrapper.text()).toContain('Prostate cancer screening')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening')
  })
})
