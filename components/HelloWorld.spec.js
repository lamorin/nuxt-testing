import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'


describe('HelloWorld.vue Test', () => {
  it('renders message when component is created', () => {
    // render the component
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        message: 'Hello World!'
      }
    })

    // check that the title is rendered
    expect(wrapper.text()).toMatch('Hello World!')
  })
})