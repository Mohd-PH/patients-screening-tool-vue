import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Depression in children and adolescents screening', () => {
  // This test follows the depression in children and adolescents screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/depression-in-children-and-adolescents-screening
  // Last time accessed 12/04/2021

  it('Screens an 18 year old female', async () => {
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

    expect(wrapper.find('depressionInChildrenAndAdolescents').element).toBe()
    expect(wrapper.text()).toContain('Depression in Children and Adolescents')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/depression-in-children-and-adolescents-screening')
  })

  it('Screens a 12 year old male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 12,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('depressionInChildrenAndAdolescents').element).toBe()
    expect(wrapper.text()).toContain('Depression in Children and Adolescents')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/depression-in-children-and-adolescents-screening')
  })

  it('Doesn\'t Screen an 11 year old female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 11,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('depressionInChildrenAndAdolescents').element).toBe(undefined)
    expect(wrapper.text()).not.toContain('Depression in Children and Adolescents')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/depression-in-children-and-adolescents-screening')
  })

  it('Doesn\'t Screen a 19 year old female', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 19,
          gender: 'Female',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('depressionInChildrenAndAdolescents').element).toBe(undefined)
    expect(wrapper.text()).not.toContain('Depression in Children and Adolescents')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/depression-in-children-and-adolescents-screening')
  })
})
