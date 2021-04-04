import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Lung cancer screening', () => {
  // This test follows the lung cancer screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening
  // Last time accessed 04/04/2021

  it('Doesn\'t Screen non-smokers', async () => {
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

    expect(wrapper.find('lungCancer').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Lung cancer')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening')
  })

  it('Doesn\'t Screen smokers for less than 20 pack years', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 55,
          gender: 'Female',
          smoker: 'Yes',
          packYears: 19
        }
      }
    })

    expect(wrapper.find('lungCancer').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Lung cancer')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening')
  })

  it('Screens a 50 year old female who smoked 20 pack year', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 50,
          gender: 'Female',
          smoker: 'Yes',
          packYears: 20
        }
      }
    })

    expect(wrapper.find('lungCancer').element).toBe()
    expect(wrapper.text()).toContain('Recommendation Grade: B')
    expect(wrapper.text()).toContain('Lung cancer screening')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening')
  })
  it('Screens a 80 year old female who smoked 30 pack year', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 80,
          gender: 'Female',
          smoker: 'Yes',
          packYears: 30
        }
      }
    })

    expect(wrapper.find('lungCancer').element).toBe()
    expect(wrapper.text()).toContain('Recommendation Grade: B')
    expect(wrapper.text()).toContain('Lung cancer screening')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening')
  })
})
