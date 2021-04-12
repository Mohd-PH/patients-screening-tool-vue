import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Dental caries in children from birth through age 5 years screening', () => {
  // This test follows the dental caries in children from birth through age 5 years screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/dental-caries-in-children-from-birth-through-age-5-years-screening
  // Last time accessed 12/04/2021

  it('Screens a 6 months old boy', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 0.5,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('dentalCariesInChildrenFromBirthThroughAge5Years').element).toBe()
    expect(wrapper.text()).toContain('Dental Caries in Children from Birth Through Age 5 Years')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/dental-caries-in-children-from-birth-through-age-5-years-screening')
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

    expect(wrapper.find('dentalCariesInChildrenFromBirthThroughAge5Years').element).toBe()
    expect(wrapper.text()).toContain('Dental Caries in Children from Birth Through Age 5 Years')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/dental-caries-in-children-from-birth-through-age-5-years-screening')
  })

  it('Doesn\'t Screen a 3 months old girl', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 0.25,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('dentalCariesInChildrenFromBirthThroughAge5Years').element).toBe(undefined)
    expect(wrapper.text()).not.toContain('Dental Caries in Children from Birth Through Age 5 Years')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/dental-caries-in-children-from-birth-through-age-5-years-screening')
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

    expect(wrapper.find('dentalCariesInChildrenFromBirthThroughAge5Years').element).toBe(undefined)
    expect(wrapper.text()).not.toContain('Dental Caries in Children from Birth Through Age 5 Years')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/dental-caries-in-children-from-birth-through-age-5-years-screening')
  })
})
