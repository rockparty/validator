import type { Validator } from '@/protocols'
import { createValidatorDecorator } from '@/decorators'
import { minLengthError } from '@/errors'

export const stringHasMinLength = (min: number): Validator<string> =>
  createValidatorDecorator(async (toValidate) => {
    if ((toValidate.value as string).length >= min) return
    return minLengthError(min)(toValidate)
  })
