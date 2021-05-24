import { assertIsValidated } from '@/asserts'
import type { Validated } from '@/protocols'

describe('AssertIsValidated', () => {
  it('should be of Validated type', () => {
    const obj: Validated = { value: 'foo' }
    const result = assertIsValidated(obj)
    const expected = result === true
    expect(expected).toBe(true)
  })
})
