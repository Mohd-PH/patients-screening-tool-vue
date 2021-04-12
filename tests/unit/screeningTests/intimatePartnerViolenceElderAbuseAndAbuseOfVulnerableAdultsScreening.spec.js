import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Intimate partner violence, elder abuse, and abuse of vulnerable adults screening', () => {
  // This test follows the intimate partner violence, elder abuse, and abuse of vulnerable adults screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/intimate-partner-violence-and-abuse-of-elderly-and-vulnerable-adults-screening
  // Last time accessed 12/04/2021

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

    expect(wrapper.find('intimatePartnerViolenceElderAbuseAndAbuseOfVulnerableAdults').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/intimate-partner-violence-and-abuse-of-elderly-and-vulnerable-adults-screening')
  })

  it('Screens a 28 year old female non-postmenopausal', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 28,
          gender: 'Female',
          smoker: 'No',
          postmenopausal: 'No'
        }
      }
    })

    expect(wrapper.find('intimatePartnerViolenceElderAbuseAndAbuseOfVulnerableAdults').element).toBe()
    expect(wrapper.text()).toContain('Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/intimate-partner-violence-and-abuse-of-elderly-and-vulnerable-adults-screening')
  })

  it('Doesn\'t Screen postmenopausal females', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 50,
          gender: 'Female',
          smoker: 'No',
          postmenopausal: 'Yes'
        }
      }
    })

    expect(wrapper.find('intimatePartnerViolenceElderAbuseAndAbuseOfVulnerableAdults').element).toBeFalsy()
    expect(wrapper.text()).not.toContain('Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/intimate-partner-violence-and-abuse-of-elderly-and-vulnerable-adults-screening')
  })
})
