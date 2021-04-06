import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Cervical cancer screening', () => {
  // This test follows the cervical cancer screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening
  // Last time accessed 04/04/2021

  it('Doesn\'t Screen males', async () => {
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

    expect(wrapper.find('cervicalCancer').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Cervical cancer')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening')
  })
  it('Screens a 21 year old female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 21,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('cervicalCancer').element).toBe()
    expect(wrapper.text()).toContain('Recommendation Grade: A')
    expect(wrapper.text()).toContain('Cervical cancer screening')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening')
  })
  it('Screens a 65 year old female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 65,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('cervicalCancer').element).toBe()
    expect(wrapper.text()).toContain('Recommendation Grade: A')
    expect(wrapper.text()).toContain('Cervical cancer screening')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening')
  })
})
