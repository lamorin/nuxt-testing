import { describe, it, expect } from 'vitest'
import add from '/functions/add'

describe('Test add(a,b) from ~/functions/add.js', () => {
  it('function add(a,b) return the sum of the two parameters', () => {
    const a = 1;
    const b = 2;
    
    expect(add(a,b)).toBe(a+b)
  })
})