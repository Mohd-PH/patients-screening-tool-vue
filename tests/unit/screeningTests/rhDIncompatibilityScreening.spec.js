import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Rh(D) incompatibility screening', () => {
  // This test follows the Rh(D) incompatibility recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/rh-d-incompatibility-screening
  // Last time accessed 12/04/2021

  it('Screens any pregnant female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 18,
          gender: 'Female',
          smoker: 'No',
          pregnant: 'Yes'
        }
      }
    })

    expect(wrapper.find('rhDIncompatibility').element).toBe()
    expect(wrapper.find('rhDIncompatibilityUnsensitized').element).toBe()
    expect(wrapper.text()).toContain('Rh(D) Incompatibility')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/rh-d-incompatibility-screening')
  })

  it('Doesn\'t screen a non-pregnant female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 18,
          gender: 'Female',
          smoker: 'No',
          pregnant: 'No'
        }
      }
    })

    expect(wrapper.find('rhDIncompatibility').element).toBeFalsy()
    expect(wrapper.find('rhDIncompatibilityUnsensitized').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Rh(D) Incompatibility')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/rh-d-incompatibility-screening')
  })

  it('Doesn\'t screen a male patient', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 18,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('rhDIncompatibility').element).toBeFalsy()
    expect(wrapper.find('rhDIncompatibilityUnsensitized').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Rh(D) Incompatibility')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/rh-d-incompatibility-screening')
  })
})
