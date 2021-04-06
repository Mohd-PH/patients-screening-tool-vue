import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Osteoporosis to prevent fractures screening', () => {
  // This test follows the osteoporosis to prevent fractures screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening
  // Last time accessed 04/04/2021

  it('Doesn\'t Screen males', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 70,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('osteoporosisToPreventFractures').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening')
  })

  it('Doesn\'t Screen a 42 year old female who is not postmenopausal', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 42,
          gender: 'Female',
          smoker: 'No',
          postmenopausal: 'No'
        }
      }
    })

    expect(wrapper.find('osteoporosisToPreventFractures').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening')
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

    expect(wrapper.find('osteoporosisToPreventFractures').element).toBe()
    expect(wrapper.text()).toContain('Recommendation Grade: B')
    expect(wrapper.text()).toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening')
  })

  it('Screens a 80 year old female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 80,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('osteoporosisToPreventFractures').element).toBe()
    expect(wrapper.text()).toContain('Recommendation Grade: B')
    expect(wrapper.text()).toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening')
  })
  it('Screens a 60 year old female who postmenopausal ', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 60,
          gender: 'Female',
          smoker: 'No',
          postmenopausal: 'Yes'
        }
      }
    })

    expect(wrapper.find('osteoporosisToPreventFractures').element).toBe()
    expect(wrapper.text()).toContain('Recommendation Grade: B')
    expect(wrapper.text()).toContain('Osteoporosis to Prevent Fractures')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening')
  })
})
