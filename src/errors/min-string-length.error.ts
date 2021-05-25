import { validateErrorFactory } from '@/factories'
import type { ValidateErrorFactoryFn } from '@/protocols'

export const minLengthError = (min: number): ValidateErrorFactoryFn =>
  validateErrorFactory({
    name: 'MinStringLenghtError',
    reason: `String must have at least ${min} characteres`,
  })
