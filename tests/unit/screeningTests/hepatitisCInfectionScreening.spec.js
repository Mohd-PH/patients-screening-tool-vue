import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Hepatitis C infection screening', () => {
  // This test follows the hepatitis C virus Infection in adolescents and adults recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hepatitis-c-screening
  // Last time accessed 10/04/2021

  it('Screens a 18 year female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 18,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('hepatitisCInfection').element).toBe()
    expect(wrapper.text()).toContain('Hepatitis C Virus Infection in Adolescents and Adults')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hepatitis-c-screening')
  })

  it('Screens a 79 year male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 79,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('hepatitisCInfection').element).toBe()
    expect(wrapper.text()).toContain('Hepatitis C Virus Infection in Adolescents and Adults')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hepatitis-c-screening')
  })

  it('Doesn\' screen a 10 year old male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 10,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('hepatitisCInfection').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Hepatitis C Virus Infection in Adolescents and Adults')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hepatitis-c-screening')
  })

  it('Doesn\' screen a 80 year old male', async () => {
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

    expect(wrapper.find('hepatitisCInfection').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Hepatitis C Virus Infection in Adolescents and Adults')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hepatitis-c-screening')
  })
})
