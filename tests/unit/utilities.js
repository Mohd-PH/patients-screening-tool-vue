module.exports = {
  screeningTestDisplayed (wrapper, screeningData) {
    expect(wrapper.find(screeningData.id).element).not.toBeUndefined()
    expect(wrapper.text()).toContain(screeningData.disease)
    expect(wrapper.html()).toContain(screeningData.link)
  },
  screeningTestNotDisplayed (wrapper, screeningData) {
    expect(wrapper.find(screeningData.id).element).toBeUndefined()
    expect(wrapper.text()).not.toContain(screeningData.disease)
    expect(wrapper.html()).not.toContain(screeningData.link)
  }
}
