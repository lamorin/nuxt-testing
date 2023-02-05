import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Counter from './Counter.vue'


describe('Component Counter Test', () => {
  it('Component must render', () => {
    const wrapper = shallowMount(Counter, {
    })

    expect(wrapper).not.toBeUndefined()
  })
  
  it('Component must have a property called counter', () => {
    const wrapper = shallowMount(Counter, {
    })

    expect(wrapper).not.toBeUndefined()
  })
  
})