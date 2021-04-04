import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Colorectal cancer screening', () => {
  // This test follows the breast cancer screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening
  // Last time accessed 04/04/2021

  it('Doesn\'t Screen males', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 80,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('breastCancer').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Breast cancer')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening')
  })
  it('Screens a 55 year old female', async () => {
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

    expect(wrapper.find('breastCancer').element).toBe()
    expect(wrapper.text()).toContain('Recommendation Grade: B')
    expect(wrapper.text()).toContain('Breast cancer screening')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening')
  })
  it('Screens a 45 year old female who has a high risk', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 45,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('breastCancer').element).toBe()
    expect(wrapper.text()).toContain('Recommendation Grade: C')
    expect(wrapper.text()).toContain('Breast cancer screening')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening')
  })
})
