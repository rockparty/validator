import type { Validator } from '@/protocols'
import { createValidatorDecorator } from '@/decorators'
import { minLengthError } from '@/errors'

export const stringHasMinLength = <T extends string = string>(
  min: number,
): Validator<T> =>
  createValidatorDecorator(async (toValidate) => {
    const { value } = toValidate
    if ((value as string).length >= min) return
    return minLengthError(min)(value)
  })
