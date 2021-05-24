import { assertIsValidateErrorMap } from '@/asserts'
import type { ValidateError, ValidateErrorMap } from '@/protocols'

describe('AssertIsValidateErrorMap', () => {
  it('should be true', () => {
    const valid: ValidateErrorMap = new Map<
      string[] | undefined,
      ValidateError[]
    >([
      [['foo'], [{ name: 'foo', reason: 'any', validated: { value: 'foo' } }]],
    ])
    const result = assertIsValidateErrorMap(valid)
    const expected = result === true
    expect(expected).toBe(true)
  })

  it('should be false', () => {
    const invalid = [0]
    const result = assertIsValidateErrorMap(invalid)
    const expected = result === false
    expect(expected).toBe(true)
  })
})
