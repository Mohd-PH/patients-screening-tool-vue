import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Syphilis infection in nonpregnant adults and adolescents screening', () => {
  // This test follows the syphilis infection in nonpregnant adults and adolescents screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/syphilis-infection-in-nonpregnant-adults-and-adolescents
  // Last time accessed 12/04/2021

  it('Screens a 10 year old female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 10,
          gender: 'Female',
          smoker: 'No',
          pregnant: 'No'
        }
      }
    })

    expect(wrapper.find('syphilisInfectionInNonpregnantAdultsAndAdolescents').element).toBe()
    expect(wrapper.text()).toContain('Syphilis Infection in Nonpregnant Adults and Adolescents')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/syphilis-infection-in-nonpregnant-adults-and-adolescents')
  })

  it('Screens a 20 year old Male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 20,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('syphilisInfectionInNonpregnantAdultsAndAdolescents').element).toBe()
    expect(wrapper.text()).toContain('Syphilis Infection in Nonpregnant Adults and Adolescents')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/syphilis-infection-in-nonpregnant-adults-and-adolescents')
  })

  it('Doesn\'t screen a pregnant female', async () => {
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

    expect(wrapper.find('syphilisInfectionInNonpregnantAdultsAndAdolescents').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Syphilis Infection in Nonpregnant Adults and Adolescents')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/syphilis-infection-in-nonpregnant-adults-and-adolescents')
  })
})
