import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import { BootstrapVue } from 'bootstrap-vue'
import patientsInformation from '@/pages/home/patientsInformation.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('patientsInformation.vue', () => {
  it('emits the data', async () => {
    const wrapper = mount(patientsInformation, {
      localVue
    })

    const age = wrapper.find('#input-age')
    await age.setValue(20)
    expect(wrapper.find('#input-age').element.value).toBe('20')

    const gender = wrapper.find('#input-gender')
    await gender.setValue('Male')
    expect(wrapper.find('#input-gender').element.value).toBe('Male')

    const smoker = wrapper.find('#input-smoker')
    await smoker.setValue('No')
    expect(wrapper.find('#input-smoker').element.value).toBe('No')

    await wrapper.find('form').trigger('submit')
    expect(wrapper.emitted('patientInformationSubmitted')[0][0]).toStrictEqual({ age: 20, gender: 'Male', smoker: 'No' })
  })
})
