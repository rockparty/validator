/* eslint-disable @typescript-eslint/no-explicit-any */

import { createValidatorDecorator } from '@/decorators'
import { typeError } from '@/errors'

export const isObjectValidator = createValidatorDecorator<
  Record<PropertyKey, any>
>(async (toValidate) => {
  if (toValidate.value === Object(toValidate)) return
  return typeError(toValidate, 'object')
})
