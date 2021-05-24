import { assertIsValidateError } from '@/asserts'
import type { ValidateError } from '@/protocols'

describe('AssertIsValidated', () => {
  it('should be of ValidateError type', () => {
    const obj: ValidateError = {
      name: 'foo',
      reason: 'any',
      validated: { value: 'foo' },
    }
    const result = assertIsValidateError(obj)
    const expected = result === true
    expect(expected).toBe(true)
  })
})
