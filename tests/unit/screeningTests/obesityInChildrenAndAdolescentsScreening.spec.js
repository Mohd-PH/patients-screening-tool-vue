import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import screeningRecommendations from '@/pages/home/screeningRecommendations.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Obesity in children and adolescents screening', () => {
  // This test follows the obesity in children and adolescents screening recommendations by the U.S. Preventive services Task Force
  // https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/obesity-in-children-and-adolescents-screening
  // Last time accessed 12/04/2021

  it('Screens a 6 year old boy', async () => {
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

    expect(wrapper.find('obesityInChildrenAndAdolescents').element).toBe()
    expect(wrapper.text()).toContain('Obesity in Children and Adolescents')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/obesity-in-children-and-adolescents-screening')
  })

  it('Screens a 18 year old girl', async () => {
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

    expect(wrapper.find('obesityInChildrenAndAdolescents').element).toBe()
    expect(wrapper.text()).toContain('Obesity in Children and Adolescents')
    expect(wrapper.html()).toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/obesity-in-children-and-adolescents-screening')
  })

  it('Doesn\'t Screen a 5 year old girl', async () => {
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

    expect(wrapper.find('obesityInChildrenAndAdolescents').element).toBe(undefined)
    expect(wrapper.text()).not.toContain('Obesity in Children and Adolescents')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/obesity-in-children-and-adolescents-screening')
  })

  it('Doesn\'t Screen a 19 year old male', async () => {
    const wrapper = mount(screeningRecommendations, {
      localVue,
      propsData: {
        patientsInformationData: {
          age: 19,
          gender: 'Male',
          smoker: 'No'
        }
      }
    })

    expect(wrapper.find('obesityInChildrenAndAdolescents').element).toBe(undefined)
    expect(wrapper.text()).not.toContain('Obesity in Children and Adolescents')
    expect(wrapper.html()).not.toContain('https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/obesity-in-children-and-adolescents-screening')
  })
})
