import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Hepatitis B infection screening', () => {
  // This test follows the hepatitis B virus Infection in adolescents and adults recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hepatitis-b-virus-infection-screening
  // Last time accessed 10/04/2021

  it('Screen everyone who is 18 year old or older', async () => {
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

    expect(wrapper.find('hepatitisBInfection').element).toBe()
    expect(wrapper.text()).toContain('Hepatitis B Virus Infection in Adolescents and Adults')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hepatitis-b-virus-infection-screening')
  })

  it('Screen everyone who is 10 year old or older', async () => {
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

    expect(wrapper.find('hepatitisBInfection').element).toBe()
    expect(wrapper.text()).toContain('Hepatitis B Virus Infection in Adolescents and Adults')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hepatitis-b-virus-infection-screening')
  })
})
