import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Human immunodeficiency virus infection screening', () => {
  // This test follows the human immunodeficiency virus infection screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/human-immunodeficiency-virus-hiv-infection-screening
  // Last time accessed 12/04/2021

  it('Screens any pregnant female who', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 22,
          gender: 'Female',
          smoker: 'No',
          pregnant: 'Yes'
        }
      }
    })

    expect(wrapper.find('humanImmunodeficiencyVirusInfection').element).toBe()
    expect(wrapper.text()).toContain('Human Immunodeficiency Virus (HIV) Infection')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/human-immunodeficiency-virus-hiv-infection-screening')
  })

  it('Screens a 15 year old male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 15,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('humanImmunodeficiencyVirusInfection').element).toBe()
    expect(wrapper.text()).toContain('Human Immunodeficiency Virus (HIV) Infection')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/human-immunodeficiency-virus-hiv-infection-screening')
  })

  it('Screens a 65 year old male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 65,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('humanImmunodeficiencyVirusInfection').element).toBe()
    expect(wrapper.text()).toContain('Human Immunodeficiency Virus (HIV) Infection')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/human-immunodeficiency-virus-hiv-infection-screening')
  })

  it('Doesn\'t screen a 66 year old female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 66,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('humanImmunodeficiencyVirusInfection').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Human Immunodeficiency Virus (HIV) Infection')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/human-immunodeficiency-virus-hiv-infection-screening')
  })
})
