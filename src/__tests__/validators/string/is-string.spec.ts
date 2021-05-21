import { isStringValidator } from '@/validators'
import { DataTypes } from '@/__tests__/validators/__mocks__'
import {
  typeHasErrors,
  typeHasNoErrors,
} from '@/__tests__/validators/__helpers__'

describe('IsStringValidator', () => {
  const makeSut = () => {
    const type: DataTypes = 'string'
    return {
      sut: isStringValidator,
      type,
    }
  }

  it('should return no errors', async () => {
    const { sut, type } = makeSut()
    const expected = await typeHasNoErrors(sut, type)
    expect(expected).toBe(true)
  })

  it('should return errors', async () => {
    const { sut, type } = makeSut()
    const expected = await typeHasErrors(sut, type)
    expect(expected).toBe(true)
  })
})
