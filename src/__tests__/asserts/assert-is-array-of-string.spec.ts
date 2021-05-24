import { assertIsArrayOfString } from '@/asserts'

describe('AssertIsArrayOfString', () => {
  it('should be true', () => {
    const valid = ['foo']
    const result = assertIsArrayOfString(valid)
    const expected = result === true
    expect(expected).toBe(true)
  })

  it('should be false', () => {
    const invalid = [0]
    const result = assertIsArrayOfString(invalid)
    const expected = result === false
    expect(expected).toBe(true)
  })
})
