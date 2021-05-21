import { ValidateError, Validator } from '@/protocols'
import {
  DataTypes,
  omitMockDataToValidate,
  pickMockDataToValidate,
} from '../__mocks__'

export const typeHasNoErrors = async <T>(
  validator: Validator<T>,
  type: DataTypes,
) => {
  const valid = pickMockDataToValidate<T>(type)
  const { label, value } = valid
  const result = await validator.validate(value, false, label, [label])
  const expected = result?.get([label]) === undefined
  return expected
}

export const typeHasErrors = async <T>(
  validator: Validator<T>,
  type: DataTypes,
) => {
  const invalids = omitMockDataToValidate(type)

  const results: ValidateError[] = []

  for (const toValidate of invalids) {
    const { label, value } = toValidate
    const result = await validator.validate(value as any, false, label, [label])
    if (!result) continue
    result.forEach((error) => results.push(...error))
  }

  const expected = results.length === invalids.length

  return expected
}
