import { assertIsValidateErrorMap } from '@/asserts'
import { ValidateError, Validator } from '@/protocols'
import {
  DataTypes,
  omitMockDataToValidate,
  pickMockDataToValidate,
} from '../__mocks__'
import { printIfNotExpected } from './test.helper'

export const typeHasNoErrors = async <T>(
  validator: Validator<T>,
  type: DataTypes,
  override?: T,
) => {
  const valid = pickMockDataToValidate<T>(type, override)
  const { label, value } = valid
  const result = await validator.validate(value, false, label, label)
  const expected = !assertIsValidateErrorMap(result)
  printIfNotExpected(expected, result)
  return expected
}

export const typeHasErrors = async <T>(
  validator: Validator<T>,
  type: DataTypes,
) => {
  const invalids = omitMockDataToValidate(type)

  const result: ValidateError[] = []

  for (const toValidate of invalids) {
    const { label, value } = toValidate
    const errors = await validator.validate(value, false, label, label)
    if (!errors) continue
    errors.forEach((error) => result.push(...error))
  }

  const expected = result.length === invalids.length
  printIfNotExpected(expected, result)

  return expected
}
