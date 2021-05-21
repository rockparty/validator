import type { Validator } from '@/protocols'
import { createValidatorDecorator } from '@/decorators'

export const stringHasMinLength = (min: number): Validator<string> =>
  createValidatorDecorator(async (toValidate) => {
    if ((toValidate.value as string).length >= min) return
    return {
      name: 'MinStringLenghtError',
      reason: `String must have at least ${min} characteres`,
    }
  })
