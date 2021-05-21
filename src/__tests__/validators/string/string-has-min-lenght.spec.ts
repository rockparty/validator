import { stringHasMinLength } from '@/validators'

describe('StringHasMinLength', () => {
  const makeSut = () => {
    return {
      sut: stringHasMinLength('foobar'.length),
      valid: 'foobar',
      invalid: 'foo',
    }
  }

  it('should return true', async () => {
    const { sut, valid } = makeSut()
    const result = await sut.validate(valid)
    const expected = result === undefined
    expect(expected).toBe(true)
  })

  it('should return error', async () => {
    const { sut, invalid } = makeSut()
    const result = await sut.validate(invalid)
    const expected = result !== undefined
    expect(expected).toBe(true)
  })
})
