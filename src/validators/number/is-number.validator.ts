import { assertIsNumber } from '@/asserts'
import { createValidatorDecorator } from '@/decorators'
import { notANumberError } from '@/errors'
import type { Validator } from '@/protocols'

export const isNumberValidator = <T extends number = number>(): Validator<T> =>
  createValidatorDecorator<T>(async (toValidate) => {
    const { value } = toValidate
    if (assertIsNumber(value)) return
    return notANumberError(value)
  })
