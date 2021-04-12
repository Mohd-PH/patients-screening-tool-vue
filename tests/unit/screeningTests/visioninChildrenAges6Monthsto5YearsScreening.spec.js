import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Vision in children ages 6 months to 5 years screening', () => {
  // This test follows the vision in children ages 6 months to 5 years screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/vision-in-children-ages-6-months-to-5-years-screening
  // Last time accessed 12/04/2021

  it('Screens a 3 year old boy', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 3,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('visioninChildrenAges6Monthsto5Years').element).toBe()
    expect(wrapper.text()).toContain('Vision in Children Ages 6 Months to 5 Years')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/vision-in-children-ages-6-months-to-5-years-screening')
  })

  it('Screens a 5 year old girl', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 5,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('visioninChildrenAges6Monthsto5Years').element).toBe()
    expect(wrapper.text()).toContain('Vision in Children Ages 6 Months to 5 Years')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/vision-in-children-ages-6-months-to-5-years-screening')
  })

  it('Doesn\'t Screen a 2 year old girl', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 2,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('visioninChildrenAges6Monthsto5Years').element).toBe(undefined)
    expect(wrapper.text()).not.toContain('Vision in Children Ages 6 Months to 5 Years')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/vision-in-children-ages-6-months-to-5-years-screening')
  })

  it('Doesn\'t Screen a 6 year old boy', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 6,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('visioninChildrenAges6Monthsto5Years').element).toBe(undefined)
    expect(wrapper.text()).not.toContain('Vision in Children Ages 6 Months to 5 Years')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/vision-in-children-ages-6-months-to-5-years-screening')
  })
})
