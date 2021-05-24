import { assertIsArrayOfValidateError } from '@/asserts'
import type { ValidateError } from '@/protocols'

describe('AssertIsArrayOfValidateError', () => {
  it('should be true', () => {
    const valid: ValidateError[] = [
      { name: 'foo', reason: 'any', validated: { value: 'foo' } },
    ]
    const result = assertIsArrayOfValidateError(valid)
    const expected = result === true
    expect(expected).toBe(true)
  })

  it('should be false', () => {
    const invalid = [0]
    const result = assertIsArrayOfValidateError(invalid)
    const expected = result === false
    expect(expected).toBe(true)
  })
})
