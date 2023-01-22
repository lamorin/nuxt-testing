import { describe, it, expect } from 'vitest'
import {useAdd} from '/composables/useAdd.ts'

describe('Test useAdd', () => {
  it('useAdd(a,b) must return the summ of the a and b', () => {
    const a = 1;
    const b = 2;
    
    const add = useAdd(a,b)
    
    expect(add.value).toBe(a+b)
  })
})