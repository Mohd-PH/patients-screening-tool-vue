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
    expect(wrapper.emitted('patientInformationSubmitted')[0][0]).toStrictEqual({ age: 20, gender: 'Male', smoker: 'No', packYears: null })
  })
  it('shows the pack years input for smokers and emits the data', async () => {
    const wrapper = mount(patientsInformation, {
      localVue
    })

    const age = wrapper.find('#input-age')
    await age.setValue(55)
    expect(wrapper.find('#input-age').element.value).toBe('55')

    const gender = wrapper.find('#input-gender')
    await gender.setValue('Male')
    expect(wrapper.find('#input-gender').element.value).toBe('Male')

    // Pack years field is hidden
    expect(wrapper.find('#input-packYears').element).toBeFalsy()

    const smoker = wrapper.find('#input-smoker')
    await wrapper.setData({ form: { smoker: 'Yes' } })
    expect(wrapper.find('#input-smoker').element.value).toBe('Yes')

    // Pack years field is visible
    expect(wrapper.find('#input-packYears').element).not.toBe(undefined)

    const packYears = wrapper.find('#input-packYears')
    await packYears.setValue(22)
    expect(wrapper.find('#input-packYears').element.value).toBe('22')

    await wrapper.find('form').trigger('submit')
    expect(wrapper.emitted('patientInformationSubmitted')[0][0]).toStrictEqual({ age: 55, gender: 'Male', smoker: 'Yes', packYears: 22 })
  })
})
