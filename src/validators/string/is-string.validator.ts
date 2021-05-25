import { assertIsString } from '@/asserts'
import { createValidatorDecorator } from '@/decorators'
import { notAStringError } from '@/errors'
import type { Validator } from '@/protocols'

export const isStringValidator = <T extends string = string>(): Validator<T> =>
  createValidatorDecorator<T>(async (toValidate) => {
    const { value } = toValidate
    if (assertIsString(value)) return
    return notAStringError(value)
  })
