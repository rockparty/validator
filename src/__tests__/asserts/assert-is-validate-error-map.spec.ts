import { assertIsValidateErrorMap } from '@/asserts'
import { validateErrorMapFactory } from '@/factories'

describe('AssertIsValidateErrorMap', () => {
  it('should be true', () => {
    const valid = validateErrorMapFactory(
      {
        name: 'foo',
        reason: 'any',
        validated: { value: 'foo' },
      },
      ['foo'],
    )
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
