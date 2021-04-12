import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Latent tuberculosis infection screening', () => {
  // This test follows the latent tuberculosis infection screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/latent-tuberculosis-infection-screening
  // Last time accessed 12/04/2021

  it('Screens everyone who is 18 year old or older', async () => {
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

    expect(wrapper.find('latentTuberculosisInfection').element).toBe()
    expect(wrapper.text()).toContain('Latent Tuberculosis Infection')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/latent-tuberculosis-infection-screening')
  })
})
